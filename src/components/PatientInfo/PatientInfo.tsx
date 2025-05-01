import "./PatientInfo.css";

type PatientInfoProps = {
    profile_picture: string;
    name: string;
    date_of_birth: string;
    gender: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
}

type PatientInfoComponentProps = {
    myInfo: PatientInfoProps;
}

export function PatientInfo({ myInfo }: PatientInfoComponentProps) {
    const { profile_picture, name, date_of_birth, gender, phone_number, emergency_contact, insurance_type } = myInfo;

    return (
        <div className="patient-full-info">
            <div>
                <img className="patient-image" src={profile_picture} alt="arrow" />
            </div>
            <div className="patient-name">
                {name}
            </div>
            <div>
                <div className="patient-info-container">
                    <div>
                        <img src="BirthIcon.svg" alt="DOB" />
                    </div>
                    <div>
                        <p className="p-info patient-info-title">Date Of Birth</p>
                        <p className="p-info patient-info-value">{date_of_birth}</p>
                    </div>
                </div>
                <div className="patient-info-container">
                    <div>
                        <img src="FemaleIcon.png" alt="DOB" />
                    </div>
                    <div>
                        <p className="p-info patient-info-title">Gender</p>
                        <p className="p-info patient-info-value">{gender}</p>
                    </div>
                </div>
                <div className="patient-info-container">
                    <div>
                        <img src="PhoneIcon.png" alt="DOB" />
                    </div>
                    <div>
                        <p className="p-info patient-info-title">Contact Info.</p>
                        <p className="p-info patient-info-value">{phone_number}</p>
                    </div>
                </div>
                <div className="patient-info-container">
                    <div>
                        <img src="PhoneIcon.png" alt="DOB" />
                    </div>
                    <div>
                        <p className="p-info patient-info-title">Emergency Contacts</p>
                        <p className="p-info patient-info-value">{emergency_contact}</p>
                    </div>
                </div>
                <div className="patient-info-container">
                    <div>
                        <img src="InsuranceIcon.png" alt="DOB" />
                    </div>
                    <div>
                        <p className="p-info patient-info-title">Insurance Provider</p>
                        <p className="p-info patient-info-value">{insurance_type}</p>
                    </div>
                </div>

            </div>
            <div className="show-all-info">
                Show All Information
            </div>
        </div>
    )
}