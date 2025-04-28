import "./PatientList.css";
import { PatientPreview } from "../PatientPreview/PatientPreview";

export function PatientList() {
    const hardCodedPatients = [
        {
            imageUrl: "/Layer 1.png",
            name: "Emily Williams",
            extraInfo: "Female, 18"
        },
        {
            imageUrl: "/Layer 3.png",
            name: "Ryan Johnson",
            extraInfo: "Male, 45"
        },
        {
            imageUrl: "/Layer 4.png",
            name: "Brandon Mitchell",
            extraInfo: "Male, 36"
        },
        {
            imageUrl: "/Layer 5.png",
            name: "Jessica Taylor",
            extraInfo: "Female, 28"
        },
        {
            imageUrl: "/Layer 12.png",
            name: "Samantha Johnson",
            extraInfo: "Female, 56"
        },
        {
            imageUrl: "/Layer 6.png",
            name: "Angela Martinez",
            extraInfo: "Female, 54"
        },
        {
            imageUrl: "/Layer 7.png",
            name: "Kevin Anderson",
            extraInfo: "Male, 30"
        },
        {
            imageUrl: "/Layer 8.png",
            name: "Nathan Evans",
            extraInfo: "Male, 58"
        },
        {
            imageUrl: "/Layer 9.png",
            name: "Mike Nolan",
            extraInfo: "Male, 31"
        }
    ]
    
    return (
        <div className="patient-list">
            <div className="patient-list__header">
                <div className="patient-list__header__title">
                    Patients
                </div>
                <div>
                    <img src="/search_FILL0_wght300_GRAD0_opsz24.png" alt="Placeholder" className="patient-list__header__image" />
                </div>
            </div>
            <div className="patient-list__body">
                {hardCodedPatients.map((patient, index) => (
                    <PatientPreview 
                        key={index}
                        imageUrl={patient.imageUrl}
                        name={patient.name}
                        extraInfo={patient.extraInfo}
                    />
                ))}
            </div>
            
        </div>
    )
}