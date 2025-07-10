import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaChartPie,
  FaFileContract,
  FaHandshake,
  FaSearch,
  FaChartBar,
  FaArrowUp,
  FaArrowDown,
  FaTasks,
  FaDownload,
  FaCog,
  FaSyncAlt,
} from 'react-icons/fa';
import './Dashboard.css';
import ChatBox from '../Chatbox/Chatbox';

const ContractManagementDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <h1>Contract Management Dashboard</h1>
      </div>

      <div className="dashboard">
        {/* Navigation Tabs */}
        <div className="nav-tabs">
          <div
            className="nav-tab active"
            onClick={() => navigate('/dashboard')}>
            <FaChartPie /> Overview
          </div>

          {/* ✅ Correct way to navigate using useNavigate */}
          <div className="nav-tab" onClick={() => navigate('/creation')}>
            <FaFileContract /> Creation
          </div>
          <div className="nav-tab" onClick={() => navigate('/negotiation')}>
            <FaHandshake /> Negotiation
          </div>
          <div className="nav-tab" onClick={() => navigate('/review')}>
            <FaSearch /> Review
          </div>
          <div className="nav-tab" onClick={() => navigate('/administration')}>
            <FaCog /> Administration
          </div>
          <div className="nav-tab" onClick={() => navigate('/renewal')}>
            <FaSyncAlt /> Renewal
          </div>
          <div className="nav-tab" onClick={() => navigate('/reporting')}>
            <FaChartBar /> Reporting
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="metrics-grid">
          <div className="metric-card">
            <h3>Total Contracts</h3>
            <div className="metric-value">1,247</div>
            <div className="metric-change">
              <FaArrowUp /> 12% from last month
            </div>
          </div>
          <div className="metric-card">
            <h3>Active Contracts</h3>
            <div className="metric-value">892</div>
            <div className="metric-change">
              <FaArrowUp /> 5% from last month
            </div>
          </div>
          <div className="metric-card">
            <h3>Funding Review</h3>
            <div className="metric-value">45</div>
            <div className="metric-change">
              <FaArrowUp /> 8% from last month
            </div>
          </div>
          <div className="metric-card">
            <h3>Expiring Soon</h3>
            <div className="metric-value">23</div>
            <div className="metric-change">
              <FaArrowUp /> 15% from last month
            </div>
          </div>
        </div>

        {/* Trends Section */}
        <div className="trends-card">
          <h2>Contract Value Trends</h2>
          <div className="trend-chart">
            <div className="trend-bar" style={{ height: '30%' }}>
              <div className="trend-label">Jan</div>
            </div>
            <div className="trend-bar" style={{ height: '50%' }}>
              <div className="trend-label">Feb</div>
            </div>
            <div className="trend-bar" style={{ height: '70%' }}>
              <div className="trend-label">Mar</div>
            </div>
            <div className="trend-bar" style={{ height: '90%' }}>
              <div className="trend-label">Apr</div>
            </div>
            <div className="trend-bar" style={{ height: '60%' }}>
              <div className="trend-label">May</div>
            </div>
            <div className="trend-bar" style={{ height: '80%' }}>
              <div className="trend-label">Jun</div>
            </div>
            <div className="trend-bar" style={{ height: '40%' }}>
              <div className="trend-label">Jul</div>
            </div>
            <div className="trend-bar" style={{ height: '20%' }}>
              <div className="trend-label">Aug</div>
            </div>
          </div>
        </div>

        {/* Recent Contracts Section */}
        <div className="recent-contracts">
          <h2>Recent Contracts</h2>
          <div className="contracts-container">
            <div className="contract-item">
              <h3>Software License Agreement</h3>
              <div className="contract-company">TechCorp Inc.</div>
              <div className="contract-details">
                <span className="contract-status status-active">Active</span>
                <span className="contract-value">$125,000</span>
              </div>
            </div>
            <div className="contract-item">
              <h3>Service Agreement</h3>
              <div className="contract-company">Global Services Ltd.</div>
              <div className="contract-details">
                <span className="contract-status status-pending">Pending</span>
                <span className="contract-value">$85,000</span>
              </div>
            </div>
            <div className="contract-item">
              <h3>Partnership Agreement</h3>
              <div className="contract-company">Innovation Hub</div>
              <div className="contract-details">
                <span className="contract-status status-review">Review</span>
                <span className="contract-value">$200,000</span>
              </div>
            </div>
            <div className="contract-item">
              <h3>Supply Contract</h3>
              <div className="contract-company">Marekar Co.</div>
              <div className="contract-details">
                <span className="contract-status status-active">Active</span>
                <span className="contract-value">$35,000</span>
              </div>
            </div>
            <div className="contract-item">
              <h3>Consulting Agreement</h3>
              <div className="contract-company">Strategy Partners LLC</div>
              <div className="contract-details">
                <span className="contract-status status-active">Active</span>
                <span className="contract-value">$75,000</span>
              </div>
            </div>
            <div className="contract-item">
              <h3>NDA Agreement</h3>
              <div className="contract-company">New Ventures Inc.</div>
              <div className="contract-details">
                <span className="contract-status status-pending">Pending</span>
                <span className="contract-value">$10,000</span>
              </div>
            </div>
            <div className="contract-item">
              <h3>Maintenance Contract</h3>
              <div className="contract-company">TechSupport Ltd.</div>
              <div className="contract-details">
                <span className="contract-status status-active">Active</span>
                <span className="contract-value">$45,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Lifecycle Workflow */}
        <div className="workflow-card">
          <h2>Contract Lifecycle Workflow</h2>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number step-1">1</div>
              <div className="step-title">Creation</div>
              <div className="step-description">Draft & Template</div>
            </div>
            <div className="workflow-step">
              <div className="step-connector"></div>
              <div className="step-number step-2">2</div>
              <div className="step-title">Negotiation</div>
              <div className="step-description">Terms & Conditions</div>
            </div>
            <div className="workflow-step">
              <div className="step-connector"></div>
              <div className="step-number step-3">3</div>
              <div className="step-title">Review</div>
              <div className="step-description">Legal & Approval</div>
            </div>
            <div className="workflow-step">
              <div className="step-connector"></div>
              <div className="step-number step-4">4</div>
              <div className="step-title">Administration</div>
              <div className="step-description">Execute & Monitor</div>
            </div>
            <div className="workflow-step">
              <div className="step-connector"></div>
              <div className="step-number step-5">5</div>
              <div className="step-title">Renewal</div>
              <div className="step-description">Extend & Update</div>
            </div>
            <div className="workflow-step">
              <div className="step-connector"></div>
              <div className="step-number step-6">6</div>
              <div className="step-title">Reporting</div>
              <div className="step-description">Analytic & Insights</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-button new-contract">
              <FaFileContract /> New Contract
            </button>
            <button className="action-button generate-report">
              <FaChartBar /> Generate Report
            </button>
            <button className="action-button bulk-actions">
              <FaTasks /> Bulk Actions
            </button>
            <button className="action-button export-data">
              <FaDownload /> Export Data
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-label">Total Contract Value</div>
              <div className="stat-value">$2.4M</div>
              <div className="stat-change positive">
                <FaArrowUp /> +18.8% YoY
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Average Duration</div>
              <div className="stat-value">18 months</div>
              <div className="stat-change positive">
                <FaArrowUp /> +2 months
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Success Rate</div>
              <div className="stat-value">94%</div>
              <div className="stat-change positive">
                <FaArrowUp /> +3%
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Renewal Rate</div>
              <div className="stat-value">87%</div>
              <div className="stat-change positive">
                <FaArrowUp /> +5%
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Processing Time</div>
              <div className="stat-value">12 days</div>
              <div className="stat-change negative">
                <FaArrowDown /> -2 days
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Risk Score</div>
              <div className="stat-value">Low</div>
              <div className="stat-change positive">
                <FaArrowUp /> Stable
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatBox />
    </div>
  );
};

export default ContractManagementDashboard;
