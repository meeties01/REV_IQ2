import React from 'react';
import { FaCog, FaHome } from 'react-icons/fa';
import './Administration.css';
import { useNavigate } from 'react-router-dom';

const Administration: React.FC = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const goToMilestone = () => {
    navigate('/milestone');
  };

  const goToPerformance = () => {
    navigate('/performance');
  };

  return (
    <div className="admin-administration-container">
      <div className="admin-navbar">
        <div>
          <h1>
            <FaCog /> Contract Administration
          </h1>
          <div className="admin-contract-id">
            Contract ID: PET-2024-001 | Petronas Upstream Services Agreement
          </div>
        </div>
        <button
          className="admin-home-button"
          onClick={goToDashboard}
          title="Return to Dashboard">
          <FaHome />
        </button>
      </div>

      <div className="admin-alert-box">
        <strong>3 Upcoming Deadlines</strong>
        <br />
        Payment milestone due in 5 days | Environmental compliance report due in
        7 days
      </div>

      <div className="admin-tabs">
        <div className="admin-tab admin-active">Obligations</div>
        <div className="admin-tab" onClick={goToMilestone}>
          Milestones
        </div>
        <div className="admin-tab" onClick={goToPerformance}>
          Performance
        </div>
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <h2>Contract Obligations</h2>
          <button id="addObligationBtn">+ Add Obligation</button>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Obligation</th>
              <th>Responsible Party</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Progress</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="obligationsTableBody">
            <tr>
              <td>
                <strong>Environmental Compliance Report</strong>
                <br />
                <small>Submit quarterly environmental impact assessment</small>
              </td>
              <td>
                Petronas
                <br />
                <small>Environmental Dept.</small>
              </td>
              <td className="admin-due-date admin-warning">
                Jun 18, 2025
                <br />
                <small className="admin-warning-text">7 days remaining</small>
              </td>
              <td>
                <span className="admin-status admin-pending">Pending</span>
              </td>
              <td>
                <span className="admin-priority admin-high">High</span>
              </td>
              <td></td>
              <td>
                <span className="admin-action-btn admin-edit">Edit</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Payment Milestone - Phase 2</strong>
                <br />
                <small>Process payment for completed drilling operations</small>
              </td>
              <td>
                Contractor
                <br />
                <small>Finance Team</small>
              </td>
              <td className="admin-due-date admin-warning">
                Jun 16, 2025
                <br />
                <small className="admin-warning-text">5 days remaining</small>
              </td>
              <td>
                <span className="admin-status admin-in-progress">
                  In Progress
                </span>
              </td>
              <td>
                <span className="admin-priority admin-medium">Medium</span>
              </td>
              <td></td>
              <td>
                <span className="admin-action-btn admin-edit">Edit</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Safety Training Certification</strong>
                <br />
                <small>Complete HSE training for all site personnel</small>
              </td>
              <td>
                Both Parties
                <br />
                <small>HSE Department</small>
              </td>
              <td className="admin-due-date admin-safe">
                Jul 15, 2025
                <br />
                <small className="admin-safe-text">34 days remaining</small>
              </td>
              <td>
                <span className="admin-status admin-complete">Complete</span>
              </td>
              <td>
                <span className="admin-priority admin-low">Low</span>
              </td>
              <td></td>
              <td>
                <span className="admin-action-btn admin-view">View</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="admin-summary">
          <div className="admin-summary-card admin-total">
            <h3>24</h3>
            <p>Total Obligations</p>
          </div>
          <div className="admin-summary-card admin-overdue">
            <h3>2</h3>
            <p>Overdue</p>
          </div>
          <div className="admin-summary-card admin-due">
            <h3>5</h3>
            <p>Due This Week</p>
          </div>
          <div className="admin-summary-card admin-completed">
            <h3>18</h3>
            <p>Completed</p>
          </div>
          <div className="admin-summary-card admin-score">
            <h3>87%</h3>
            <p>Compliance Score</p>
          </div>
        </div>

        <div className="admin-legend">
          <strong>Legend:</strong>
          <br />
          <span className="admin-legend-overdue"> ● Overdue </span>
          <span className="admin-legend-due"> ● Due This Week </span>
          <span className="admin-legend-completed"> ● Completed </span>
          <span className="admin-legend-total"> ● Total Obligations </span>
          <span className="admin-legend-score"> ● Compliance Score </span>
        </div>
      </div>
    </div>
  );
};

export default Administration;
