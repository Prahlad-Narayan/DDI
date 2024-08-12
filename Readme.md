# Drug Interaction Checker 💊

## Overview

The **Drug Interaction Checker** is a web application that allows users to check for potential interactions between two drugs. The application is built using FastAPI for the backend and React for the frontend.

## Features

- **Drug Selection:** Users can select two drugs from dropdowns.
- **Interaction Check:** The application will fetch and display interaction details between the selected drugs.
- **Responsive Design:** The UI is built with Tailwind CSS, ensuring a modern and responsive design.
- **Footer Links:** Links to GitHub and Portfolio are included in the footer.

## Technology Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** FastAPI, Python, Pandas
- **Hosting/Deployment:** Docker (Optional)

## Backend Setup

bash
	python3 -m venv venv
	source venv/bin/activate

### Install the required Python packages
bash
	pip install -r requirements.txt

### Start the FastAPI server:
bash
	uvicorn main:app --reload

## Frontend Setup

bash
	npm install
	npm start

## Access the Application:
Open your browser and navigate to http://localhost:3000.

## Usage
Select two drugs from the dropdown menus.
Click on the "Check Interaction" button to fetch and display the interaction details.
Use the footer links to visit the GitHub repository or Portfolio.