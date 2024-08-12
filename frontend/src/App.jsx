import React, { useState, useEffect } from 'react';

function App() {
  // State variables to store drug options, selected drugs, and interaction details
  const [drugs, setDrugs] = useState([]);
  const [drug1, setDrug1] = useState('');
  const [drug2, setDrug2] = useState('');
  const [interaction, setInteraction] = useState('');

  // Fetch drug options from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:8000/drugs/')
      .then((response) => response.json())
      .then((data) => setDrugs(data.drugs));
  }, []);

  // Function to check interaction between the selected drugs
  const checkInteraction = () => {
    fetch(`http://localhost:8000/interaction/?drug1=${drug1}&drug2=${drug2}`)
      .then((response) => response.json())
      .then((data) => setInteraction(data.interaction))
      .catch(() => setInteraction('No interaction found.'));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow p-10">
        {/* Header section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">💊 Drug Interaction Checker</h1>
        </div>
        
        {/* Drug selection dropdowns */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <select
              value={drug1}
              onChange={(e) => setDrug1(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg shadow-sm"
            >
              <option value="">Select Drug 1</option>
              {drugs.map((drug) => (
                <option key={drug} value={drug}>{drug}</option>
              ))}
            </select>
            <select
              value={drug2}
              onChange={(e) => setDrug2(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg shadow-sm"
            >
              <option value="">Select Drug 2</option>
              {drugs.map((drug) => (
                <option key={drug} value={drug}>{drug}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Button to check interaction */}
        <div className="flex justify-center mb-8">
          <button
            onClick={checkInteraction}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Check Interaction
          </button>
        </div>
        
        {/* Display interaction details */}
        {interaction && (
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold mb-2">Interaction Details</h2>
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
              {interaction.map((desc, index) => (
                <p key={index} className="text-gray-700">{desc}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer with GitHub and Portfolio links */}
      <footer className="py-4">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/PrahladNarayan" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition">
              My GitHub
            </button>
          </a>
          <a href="https://prahladnarayan.com" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition">
              My Portfolio
            </button>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
