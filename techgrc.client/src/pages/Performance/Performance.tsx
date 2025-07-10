// Performance.tsx
import React from 'react';
import {
  FaCog,
  FaHome,
  FaChartLine,
  FaExclamationTriangle,
  FaLightbulb,
  FaTrophy,
  FaArrowRight,
} from 'react-icons/fa';
import './Performance.css';
import { useNavigate } from 'react-router-dom';

const Performance: React.FC = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const goToAdministration = () => {
    navigate('/administration');
  };

  const goToMilestones = () => {
    navigate('/milestone');
  };

  return (
    <div className="performance-container">
      <div className="performance-navbar">
        <div>
          <h1>
            <FaCog /> Contract Administration
          </h1>
          <div className="performance-contract-id">
            Contract ID: PET-2024-G01 | Petroleum Upstream Services Agreement
          </div>
        </div>
        <button
          className="performance-home-button"
          onClick={goToDashboard}
          title="Return to Dashboard">
          <FaHome />
        </button>
      </div>

      <div className="performance-alert-box">
        <FaExclamationTriangle className="alert-icon" />
        <strong>Performance Alert:</strong> 2 KPIs below target threshold -
        Review required
      </div>

      <div className="performance-tabs">
        <div className="performance-tab" onClick={goToAdministration}>
          Obligations
        </div>
        <div className="performance-tab" onClick={goToMilestones}>
          Milestones
        </div>
        <div className="performance-tab performance-active">Performance</div>
      </div>

      <div className="performance-content">
        <div className="performance-overview">
          <div className="overall-performance">
            <h2>Overall Performance</h2>
            <div className="performance-score">85%</div>
            <div className="performance-status">On Track</div>
          </div>

          <div className="performance-metrics">
            <div className="metric-card">
              <h3>On-Time Delivery</h3>
              <div className="metric-value">92%</div>
              <div className="metric-status good">Good</div>
            </div>
            <div className="metric-card">
              <h3>Budget Utilization</h3>
              <div className="metric-value">78%</div>
              <div className="metric-status warning">Warning</div>
            </div>
            <div className="metric-card">
              <h3>Quality Score</h3>
              <div className="metric-value">88%</div>
              <div className="metric-status good">Good</div>
            </div>
          </div>
        </div>

        <div className="performance-section">
          <h2>
            <FaChartLine /> Performance Trends
          </h2>
          <p>Key performance indicators over time</p>
          <div className="chart-container">
            <div className="chart-y-axis">
              <div>100%</div>
              <div>90%</div>
              <div>80%</div>
              <div>70%</div>
              <div>60%</div>
              <div>50%</div>
            </div>
            <div className="chart-grid">
              {/* Budget Line */}
              <div className="chart-line budget">
                {[65, 70, 68, 72, 75, 78, 70].map((value, index) => (
                  <div
                    key={`budget-${index}`}
                    className="chart-point"
                    style={{
                      left: `${(index * 100) / 6}%`,
                      bottom: `${value}%`,
                    }}></div>
                ))}
              </div>

              {/* Quality Line */}
              <div className="chart-line quality">
                {[85, 82, 88, 85, 90, 88, 85].map((value, index) => (
                  <div
                    key={`quality-${index}`}
                    className="chart-point"
                    style={{
                      left: `${(index * 100) / 6}%`,
                      bottom: `${value}%`,
                    }}></div>
                ))}
              </div>

              {/* Delivery Line */}
              <div className="chart-line delivery">
                {[92, 90, 93, 95, 94, 92, 90].map((value, index) => (
                  <div
                    key={`delivery-${index}`}
                    className="chart-point"
                    style={{
                      left: `${(index * 100) / 6}%`,
                      bottom: `${value}%`,
                    }}></div>
                ))}
              </div>

              <div className="chart-x-axis">
                <div>Jun</div>
                <div>Feb</div>
                <div>Mar</div>
                <div>Apr</div>
                <div>May</div>
                <div>Jun</div>
                <div>Jul</div>
              </div>
            </div>
          </div>
        </div>

        <div className="performance-details">
          <div className="performance-summary">
            <h2>Performance Summary</h2>
            <p>Contract performance assessment and recommendations</p>

            <div className="summary-box critical">
              <div className="summary-header">
                <FaExclamationTriangle /> Critical Issues
              </div>
              <div className="summary-content">
                <h3>Budget & Quality below target</h3>
                <p>Immediate Action Required</p>
              </div>
            </div>

            <div className="summary-box recommendations">
              <div className="summary-header">
                <FaLightbulb /> Recommendations
              </div>
              <div className="summary-content">
                <h3>Process improvements identified</h3>
                <p>Review & Implement</p>
              </div>
            </div>

            <div className="summary-box achievements">
              <div className="summary-header">
                <FaTrophy /> Achivements
              </div>
              <div className="summary-content">
                <h3>Exceeding delivery targets</h3>
                <p>Maintain Performance</p>
              </div>
            </div>

            <div className="summary-box next-review">
              <div className="summary-header">
                <FaArrowRight /> Next Review
              </div>
              <div className="summary-content">
                <h3>Scheduled for Aug 15, 2025</h3>
                <p>30 days remaining</p>
              </div>
            </div>
          </div>

          <div className="kpi-details">
            <h2>Key Performance Indicators</h2>
            <p>Detailed breakdown of contract KPIs</p>

            <div className="kpi-list">
              <div className="kpi-item">
                <div className="kpi-text">
                  <h3>On-Time Delivery Rate</h3>
                  <p>Percentage of deliverables completed on schedule</p>
                </div>
                <div className="kpi-value">92%</div>
              </div>
              <div className="kpi-item">
                <div className="kpi-text">
                  <h3>Budget Utilization</h3>
                  <p>Percentage of approved budget consumed</p>
                </div>
                <div className="kpi-value">78%</div>
              </div>
              <div className="kpi-item">
                <div className="kpi-text">
                  <h3>Quality Assurance Score</h3>
                  <p>Average quality rating across all deliverables</p>
                </div>
                <div className="kpi-value">88%</div>
              </div>
              <div className="kpi-item">
                <div className="kpi-text">
                  <h3>Resource Utilization</h3>
                  <p>Efficiency of resource allocation and usage</p>
                </div>
                <div className="kpi-value">85%</div>
              </div>
              <div className="kpi-item">
                <div className="kpi-text">
                  <h3>Risk Mitigation Score</h3>
                  <p>Effectiveness of risk identification and mitigation</p>
                </div>
                <div className="kpi-value">90%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
