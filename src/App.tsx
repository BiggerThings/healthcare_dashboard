import { Navbar } from "./components/Navbar/Navbar";
import { PatientList } from "./components/PatientList/PatientList";
import { DiagnosisHistory } from "./components/DiagnosisHistory/DiagnosisHistory";
import { PatientInfo } from "./components/PatientInfo/PatientInfo";
import { DiagnosticList } from "./components/DiagnosticList/DiagnosticList";
import { LabResults } from "./components/LabResults/LabResults";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar />
      <PatientList />
      <DiagnosisHistory />
      <PatientInfo />
      <DiagnosticList />
      <LabResults />
    </div>
  )
}

export default App
