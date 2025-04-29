import "./DiagnosisHistory.css";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function DiagnosisHistory() {
    const data = {
        labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023','Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: '#C26EB4',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4, // smooth curve
          },
          {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 86, 27],
            borderColor: '#7E6CAB',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            tension: 0.4,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
            display: false,
          },
          title: {
            display: false,
            text: 'Line Chart with Two Datasets',
          },
        },
      };
    
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
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    )
}
