import "./DiagnosticList.css";

type DiagnosticListProps = {
    name: string;
    description: string;
    status: string;
}

type DiagnosticListComponentProps = {
    list: DiagnosticListProps[];
  };

export function DiagnosticList({ list }: DiagnosticListComponentProps) {
    return (
        <div className="diagnostic-list">
            <div className="diagnostic-list-title">Diagnostic List</div>
            <div className="diagnostic-list-container">
                <div className="diagnostic-list-header dp-flex">
                    <div>Problems/Diagnosis</div>
                    <div>Description</div>
                    <div>Status</div>
                </div>
                {list.map((item, index) => (
                    <div key={index} className="diagnostic-list-item dp-flex">
                        <div>{item.name}</div>
                        <div>{item.description}</div>
                        <div>{item.status}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}