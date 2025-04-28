import "./PatientPreview.css";

type PreviewProps = {
    imageUrl: string;
    name: string;
    extraInfo: string;
}

export function PatientPreview({imageUrl, name, extraInfo}: PreviewProps) {
    return (
        <div className="patient-preview">
            <div className="patient-preview__header">
                <div className="">
                    <img src={imageUrl} alt="Logo" />
                </div>
                <div className="practitioner-info">
                    <p className="body-emphasized-14pt">{name}</p>
                    <p className="body-secondary-info-14pt">{extraInfo}</p>
                </div>
            </div>
            <div className="patient-more-info">
                <img src="/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="Logo" />
            </div>
        </div>
    )
}