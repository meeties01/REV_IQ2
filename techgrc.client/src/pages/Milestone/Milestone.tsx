// Milestone.tsx
import React from 'react';
import { FaCog, FaHome, FaSearch, FaFilter } from 'react-icons/fa';
import './Milestone.css';
import { useNavigate } from 'react-router-dom';

const Milestone: React.FC = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const goToAdministration = () => {
    navigate('/administration');
  };

  const goToPerformance = () => {
    navigate('/performance');
  };

  const handleTabClick = (tabName: string) => {
    // Implement navigation logic for tabs
    console.log(`Switching to ${tabName} tab`);
    // In a real app, you might use navigation like:
    // navigate(`/contract/${tabName.toLowerCase()}`);
  };

  return (
    <div className="milestone-container">
      <div className="milestone-navbar">
        <div>
          <h1>
            <FaCog /> Contract Administration
          </h1>
          <div className="milestone-contract-id">
            Contract ID: PET-2024-001 | Petroleum Lightream Services Agreement
          </div>
        </div>
        <button
          className="milestone-home-button"
          onClick={goToDashboard}
          title="Return to Dashboard">
          <FaHome />
        </button>
      </div>

      <div className="milestone-alert-box">
        <strong>1 Overdue Milestone:</strong> User Acceptance Testing is overdue
        by 5 days
      </div>

      {/* Tabs with consistent pattern */}
      <div className="milestone-tabs">
        <div className="milestone-tab" onClick={goToAdministration}>
          Obligations
        </div>
        <div
          className="milestone-tab milestone-active"
          onClick={() => handleTabClick('Milestones')}>
          Milestones
        </div>
        <div className="milestone-tab" onClick={goToPerformance}>
          Performance
        </div>
      </div>

      <div className="milestone-summary-cards">
        <div className="milestone-card">
          <h3>5</h3>
          <p>Total Milestones</p>
          <span>Active</span>
        </div>
        <div className="milestone-card overdue">
          <h3>1</h3>
          <p>Overdue</p>
          <span>Action Required</span>
        </div>
        <div className="milestone-card due">
          <h3>3</h3>
          <p>Due This Week</p>
          <span>Monitor</span>
        </div>
        <div className="milestone-card completion">
          <h3>20%</h3>
          <p>Completion Rate</p>
          <span>On Track</span>
        </div>
      </div>

      <div className="milestone-content">
        <div className="milestone-header">
          <h2>Contract Milestones</h2>
          <p>Track key project milestones and deliverables</p>
          <div className="milestone-controls">
            <div className="milestone-search">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search milestones..." />
            </div>
            <button className="milestone-filter-btn">
              <FaFilter /> Filter
            </button>
          </div>
        </div>

        <table className="milestone-table">
          <thead>
            <tr>
              <th>Milestone</th>
              <th>Responsible Party</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Progress</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Project Kickoff Meeting</strong>
                <br />
                <small>
                  Initial project planning and stakeholder alignment
                </small>
              </td>
              <td>Project Manager</td>
              <td>Jun 15, 2025</td>
              <td>
                <span className="milestone-status complete">Complete</span>
              </td>
              <td>
                <span className="milestone-priority high">High</span>
              </td>
              <td>
                <div className="milestone-progress-bar">
                  <div className="milestone-progress milestone-progress-100"></div>
                </div>
                <span>100%</span>
              </td>
              <td>$0</td>
              <td>
                <span className="milestone-action-btn edit">Edit</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Design Phase Completion</strong>
                <br />
                <small>Finalize all design documents and specifications</small>
              </td>
              <td>Design Team</td>
              <td>Jul 20, 2025</td>
              <td>
                <span className="milestone-status in-progress">
                  In Progress
                </span>
              </td>
              <td>
                <span className="milestone-priority high">High</span>
              </td>
              <td>
                <div className="milestone-progress-bar">
                  <div className="milestone-progress milestone-progress-75"></div>
                </div>
                <span>75%</span>
              </td>
              <td>$25,000</td>
              <td>
                <span className="milestone-action-btn edit">Edit</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Development Phase 1</strong>
                <br />
                <small>Complete core functionality development</small>
              </td>
              <td>Development Team</td>
              <td>Aug 30, 2025</td>
              <td>
                <span className="milestone-status pending">Pending</span>
              </td>
              <td>
                <span className="milestone-priority medium">Medium</span>
              </td>
              <td>
                <div className="milestone-progress-bar">
                  <div className="milestone-progress milestone-progress-0"></div>
                </div>
                <span>0%</span>
              </td>
              <td>$50,000</td>
              <td>
                <span className="milestone-action-btn edit">Edit</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>User Acceptance Testing</strong>
                <br />
                <small>End-user testing and feedback collection</small>
              </td>
              <td>QA Team</td>
              <td className="milestone-overdue">
                Oct 10, 2025
                <br />
                <small>Overdue by 5 days</small>
              </td>
              <td>
                <span className="milestone-status overdue">Overdue</span>
              </td>
              <td>
                <span className="milestone-priority medium">Medium</span>
              </td>
              <td>
                <div className="milestone-progress-bar">
                  <div className="milestone-progress milestone-progress-25"></div>
                </div>
                <span>25%</span>
              </td>
              <td>$8,000</td>
              <td>
                <span className="milestone-action-btn edit">Edit</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Milestone;
