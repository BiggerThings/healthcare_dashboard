import "./LabResults.css";

type LabResultsProps = {
    results: string[];
};

export function LabResults({ results } : LabResultsProps) {
    return (
        <div className="lab-results">
            <div className="lab-results-title">Lab Results</div>
            <div className="lab-results-conatainer">
                {results.map((result, index) => (
                <div key={index} className="lab-results-header">
                    <div className="lab-results-header-title">
                        {result}
                    </div>
                    <div>
                        <img src="/download_FILL0_wght300_GRAD0_opsz24 (1).svg" alt="arrow" />
                    </div>
                </div>
                ))}
                 
            </div>  
        </div>
    )
}