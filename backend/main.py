import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the CSV file containing drug interaction data
file_path = 'DDI_data.csv'
df = pd.read_csv(file_path)

@app.get("/")
def read_root():
    # Basic root endpoint to confirm the API is working
    return {"message": "Drug Interaction API"}

@app.get("/drugs/")
def get_drugs():
    # Return a list of unique drug names for the dropdowns
    drug_names = pd.concat([df['drug1_name'], df['drug2_name']]).unique()
    return {"drugs": sorted(drug_names)}

@app.get("/interaction/")
def get_interaction(drug1: str, drug2: str):
    # Filter the DataFrame for the selected drugs and their interactions
    interaction = df[((df['drug1_name'] == drug1) & (df['drug2_name'] == drug2)) |
                     ((df['drug1_name'] == drug2) & (df['drug2_name'] == drug1))]

    if interaction.empty:
        # Raise an error if no interaction is found
        raise HTTPException(status_code=404, detail="No interaction found")

    # Return unique interaction types between the selected drugs
    interaction_types = interaction['interaction_type'].unique().tolist()
    return {"interaction_types": interaction_types}
