import "./DiagnosisHistory.css";

export function DiagnosisHistory() {
    return (
        <div className="diagnosis-history">
            <div className="diagnosis-history-header">Diagnosis History</div>
                
            <div className="blood-pressure-container">
                <div className="blood-pressure-title-container">
                    <div  className="blood-pressure-header">Blood Pressure</div>
                        <div  className="time-period">
                        <div className="time-period-text">Last 6 months</div>
                        <div>
                            <img src="/expand_more_FILL0_wght300_GRAD0_opsz24.svg" alt="arrow" />
                        </div>
                    </div>
                </div>
            
                <div className="chart-container">
                    d
                </div>
            </div>
        </div>
    )
}
