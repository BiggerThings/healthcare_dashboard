import { Navbar } from "./components/Navbar/Navbar";
import { PatientList } from "./components/PatientList/PatientList";
import { DiagnosisHistory } from "./components/DiagnosisHistory/DiagnosisHistory";
import { PatientInfo } from "./components/PatientInfo/PatientInfo";
import { DiagnosticList } from "./components/DiagnosticList/DiagnosticList";
import { LabResults } from "./components/LabResults/LabResults";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';
        const username = 'coalition';
        const password = 'skills-test';

        const authHeader = 'Basic ' + btoa(username + ':' + password);

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/json', 
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json(); 
        setData(result);
        console.log(result[3]);
      } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`);
      } 
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

   const patientInfo = data[3];

  return (
    <div className="App">
      <Navbar />
      <PatientList patients={data} />
      <DiagnosisHistory diagnosis_history={patientInfo.diagnosis_history} />
      <PatientInfo myInfo={patientInfo} />
      <DiagnosticList list={patientInfo.diagnostic_list} />
      <LabResults results={patientInfo.lab_results} />
    </div>
  )
}

export default App
