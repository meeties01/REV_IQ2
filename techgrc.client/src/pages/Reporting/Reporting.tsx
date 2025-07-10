import React, { useState } from 'react';
import {
  FaCog,
  FaHome,
  FaChartLine,
  FaFileAlt,
  FaBell,
  FaSearch,
  FaFilter,
  FaFilePdf,
  FaFileExcel,
  FaChevronDown,
  FaEllipsisV,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Reporting.css';

const Reporting: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const handleGenerateReport = () => {
    // Report generation logic would go here
    console.log('Generating report...');
    setIsModalOpen(false);
  };

  return (
    <div className="reporting-container">
      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Generate Contract Report</h2>
              <button
                className="close-btn"
                onClick={() => setIsModalOpen(false)}>
                &times;
              </button>
            </div>

            <div className="report-details">
              <div className="detail-section">
                <h3>Report Type</h3>
                <ul>
                  <li>Active Contracts Summary</li>
                  <li>Contract Performance Analysis</li>
                  <li>Expiration & Renewal Report</li>
                  <li>Department Breakdown</li>
                </ul>
              </div>

              <div className="detail-section">
                <h3>Date Range</h3>
                <p>
                  <strong>From:</strong> 2024-01-01
                </p>
                <p>
                  <strong>To:</strong> 2025-07-04
                </p>
              </div>

              <div className="detail-section">
                <h3>Department Filter</h3>
                <p>Select departments (All selected)</p>
              </div>

              <div className="detail-section">
                <h3>Output Format</h3>
                <ul>
                  <li>PDF Report</li>
                  <li>Excel Spreadsheet</li>
                  <li>CSV Data</li>
                </ul>
              </div>

              <div className="detail-section">
                <h3>Include in Report</h3>
                <ul>
                  <li>Contract Values</li>
                  <li>Key Metrics</li>
                  <li>Vendor Details</li>
                  <li>Charts & Graphs</li>
                </ul>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="cancel-btn"
                onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button
                className="confirm-generate-btn"
                onClick={handleGenerateReport}>
                Generate Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Existing Content */}
      <div className="reporting-navbar">
        <div>
          <h1>
            <FaCog /> Contract Management System
          </h1>
          <div className="reporting-subtitle">Dashboard Overview</div>
        </div>
        <button
          className="reporting-home-button"
          onClick={goToDashboard}
          title="Return to Dashboard">
          <FaHome />
        </button>
      </div>

      <div className="report-dashboard-overview">
        <div className="report-overview-tabs">
          <div className="report-tab active">Active Contracts</div>
          <div className="report-tab">Expirations</div>
          <div className="report-tab">Performance</div>
          <div className="report-tab">Reports</div>
        </div>

        <div className="report-summary-section">
          <div className="report-summary-card">
            <div className="report-card-header">
              <FaChartLine className="report-card-icon" />
              <h3>Contract Summary</h3>
            </div>

            <div className="report-summary-grid">
              <div className="report-metric-card">
                <div className="report-metric-value">247</div>
                <div className="report-metric-title">
                  Total Active Contracts
                </div>
                <div className="report-metric-trend positive">
                  +12 this month
                </div>
              </div>

              <div className="report-metric-card">
                <div className="report-metric-value">$24.5M</div>
                <div className="report-metric-title">Total Contract Value</div>
                <div className="report-metric-trend">Average: $99.2K</div>
              </div>

              <div className="report-metric-card">
                <div className="report-metric-value">18</div>
                <div className="report-metric-title">Expiring in 30 Days</div>
                <div className="report-metric-trend warning">
                  Requires attention
                </div>
              </div>

              <div className="report-metric-card">
                <div className="report-metric-value">8</div>
                <div className="report-metric-title">Active Departments</div>
                <div className="report-metric-trend">
                  IT, HR, Finance, Legal...
                </div>
              </div>
            </div>
          </div>

          <div className="report-quick-actions">
            <div className="report-actions-header">
              <FaBell className="report-actions-icon" />
              <h3>Quick Actions</h3>
            </div>
            <ul className="report-action-list">
              <li className="report-action-item">
                <div className="report-action-badge">5</div>
                <span>contracts need renewal</span>
              </li>
              <li className="report-action-item">
                <div className="report-action-badge">3</div>
                <span>performance reviews due</span>
              </li>
              <li className="report-action-item">
                <div className="report-action-badge">12</div>
                <span>contracts auto-renewed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="report-recent-contracts">
        <div className="report-section-header">
          <h2>Recent Contracts</h2>
          <div className="report-controls">
            <div className="report-search-box">
              <FaSearch className="report-search-icon" />
              <input type="text" placeholder="Search contracts..." />
            </div>
            <div className="report-filter-dropdown">
              <FaFilter className="filter-icon" />
              <span>Filter by Department</span>
              <FaChevronDown className="dropdown-icon" />
            </div>
            <div className="report-date-range">
              <span>Date Range</span>
              <FaChevronDown className="dropdown-icon" />
            </div>
          </div>
        </div>

        <div className="report-contract-table">
          <div className="report-table-header">
            <div>Contract ID</div>
            <div>Vendor</div>
            <div>Value</div>
            <div>Department</div>
            <div>Start Date</div>
            <div>End Date</div>
            <div>Status</div>
            <div>Actions</div>
          </div>

          <div className="report-table-row">
            <div>CNT-2024-001</div>
            <div>TechCorp Solutions</div>
            <div>$125,000</div>
            <div>IT</div>
            <div>2024-01-15</div>
            <div>2025-01-14</div>
            <div>
              <span className="report-status-badge active">Active</span>
            </div>
            <div>
              <FaEllipsisV className="report-actions-icon" />
            </div>
          </div>

          <div className="report-table-row">
            <div>CNT-2024-002</div>
            <div>Global Services Inc</div>
            <div>$88,500</div>
            <div>Finance</div>
            <div>2024-03-01</div>
            <div>2025-07-15</div>
            <div>
              <span className="report-status-badge expiring">Expiring</span>
            </div>
            <div>
              <FaEllipsisV className="report-actions-icon" />
            </div>
          </div>

          <div className="report-table-row">
            <div>CNT-2024-003</div>
            <div>Alpha Consulting</div>
            <div>$234,750</div>
            <div>Legal</div>
            <div>2024-02-10</div>
            <div>2025-12-31</div>
            <div>
              <span className="report-status-badge active">Active</span>
            </div>
            <div>
              <FaEllipsisV className="report-actions-icon" />
            </div>
          </div>
        </div>

        <div className="report-table-footer">
          <div className="report-pagination">Showing 1-10 of 247 contracts</div>

          <div className="report-export-actions">
            <button
              className="report-export-btn"
              onClick={() => setIsModalOpen(true)}>
              <FaFileAlt /> Generate Report
            </button>
            <button className="report-export-btn">
              <FaFilePdf /> Export to PDF
            </button>
            <button className="report-export-btn">
              <FaFileExcel /> Export to Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;
