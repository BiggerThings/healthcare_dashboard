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

type Readings = {
    levels: string
    value: number
}

type singleMonthData = {
    blood_pressure: {
        systolic: Readings
        diastolic: Readings
    },
    heart_rate: Readings,
    month: string,
    respiratory_rate: Readings,
    temperature: Readings,
    year: number
}

export function DiagnosisHistory({ diagnosis_history }: { diagnosis_history: singleMonthData[] }) {
    const myLabels = diagnosis_history.slice(0,6).map((item) => `${item.month.substring(0, 3)}, ${item.year}`);

    const myDataSet1 = diagnosis_history.slice(0,6).map((item) => item.blood_pressure.systolic.value);
    const myDataSet2 = diagnosis_history.slice(0,6).map((item) => item.blood_pressure.diastolic.value);
    
    const data = {
        labels: myLabels.reverse(),
        datasets: [
          {
            label: 'Dataset 1',
            data: myDataSet1.reverse(),
            borderColor: '#C26EB4',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
          },
          {
            label: 'Dataset 2',
            data: myDataSet2.reverse(),
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
        scales: {
            x: {
              ticks: {
                display: true,
              },
              grid: {
                drawTicks: true,
                display: false,
              },
            },
            y: {
              ticks: {
                display: true,
              },
              grid: {
                drawTicks: true,
              },
            },
          }
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

                <div className="bp-readings-container">
                    <div className="blood-pressure-readings mg-bt">
                        <div className="blood-pressure-readings-gauge stolic">
                            <div className="round-stolic bg-systolic">col</div>
                            <div>Systolic</div>
                        </div>
                        <div className="blood-pressure-readings-value">
                            {diagnosis_history[0].blood_pressure.systolic.value}
                        </div>
                        <div className="blood-pressure-readings-gauge">
                        <div className="blood-pressure-readings-gauge average">
                                <div>
                                    <img src="/ArrowUp.svg" alt="arrow" />
                                </div>
                                <div>
                                {diagnosis_history[0].blood_pressure.systolic.levels}
                                </div>
                            </div>
                        </div>
                </div>

                <div className="blood-pressure-readings">
                    <div className="blood-pressure-readings-gauge stolic">
                        <div className="round-stolic bg-diatolic">col</div>
                        <div>Diastolic</div>
                    </div>
                    <div className="blood-pressure-readings-value">
                    {diagnosis_history[0].blood_pressure.diastolic.value}
                    </div>
                    <div className="blood-pressure-readings-gauge">
                    <div className="blood-pressure-readings-gauge average">
                            <div>
                                <img src="/ArrowDown.svg" alt="arrow" />
                            </div>
                            <div>
                            {diagnosis_history[0].blood_pressure.diastolic.levels}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
                <div className="chart-container">
                    <Line data={data} options={options} />
                </div>

                <div className="readings-container">
                    <div className="readings-all respiratory-bg">
                        <div className="readings-image">
                            <img src="/respiratory rate.svg" alt="arrow" />
                        </div>
                        <div className="readings-title">
                            <p>Respitory Rate</p> 
                        </div>
                        <div className="readings-value">
                            <p>{diagnosis_history[0].respiratory_rate.value} bpm</p> 
                        </div>
                        <div className="readings-gauge">
                            <p>{diagnosis_history[0].respiratory_rate.levels}</p>
                        </div> 
                    </div>
                    <div className="readings-all temperature-bg">
                        <div  className="readings-image">
                            <img src="/temperature.svg" alt="arrow" />
                        </div>
                        <div className="readings-title">
                            <p>Temperature</p> 
                        </div>
                        <div className="readings-value">
                            <p>{diagnosis_history[0].temperature.value} &deg;F</p> 
                        </div>
                        <div className="readings-gauge">
                            <p>{diagnosis_history[0].temperature.levels}</p>
                        </div> 
                    </div>
                    <div className="readings-all heart-rate-bg">
                        <div  className="readings-image">
                            <img src="/HeartBPM.svg" alt="arrow" />
                        </div>
                        <div className="readings-title">
                            <p>Heart Rate</p> 
                        </div>
                        <div className="readings-value">
                            <p>{diagnosis_history[0].heart_rate.value} bpm</p> 
                        </div>
                        <div className="readings-gauge symbol-container">
                            <div>
                                <img src="/ArrowDown.svg" alt="arrow" />
                            </div>
                            <div>
                                <p>{diagnosis_history[0].heart_rate.levels}</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
