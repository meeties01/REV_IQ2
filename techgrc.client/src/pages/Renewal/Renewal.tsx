import React, { useState } from 'react';
import {
  FaCog,
  FaHome,
  FaFileContract,
  FaCopy,
  FaBell,
  FaPlus,
  FaFileImport,
  FaFileExport,
  FaSignature,
  FaTimes,
  FaCloudUploadAlt,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Renewal.css';

const Renewal: React.FC = () => {
  const navigate = useNavigate();
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showNewContractModal, setShowNewContractModal] = useState(false);

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const handleApproveClick = () => {
    setShowApprovalModal(true);
  };

  const closeApprovalModal = () => {
    setShowApprovalModal(false);
  };

  return (
    <div className="renewal-container">
      <div className="renewal-navbar">
        <div>
          <h1>
            <FaCog /> Contract Renewal
          </h1>
        </div>
        <button
          className="renewal-home-button"
          onClick={goToDashboard}
          title="Return to Dashboard">
          <FaHome />
        </button>
      </div>

      <div className="renewal-content">
        <div className="tools-grid">
          {/* Contract Review Workflow */}
          <div className="renewal-card">
            <div className="card-header">
              <div className="card-icon">
                <FaFileContract />
              </div>
              <h2>Contract Review Workflow</h2>
            </div>
            <p className="card-description">
              Route contracts for internal review and approvals
            </p>
            <ul className="card-features">
              <li>Assign legal and finance teams</li>
              <li>Structured approval workflow</li>
              <li>Real-time status tracking</li>
            </ul>
            <div className="card-footer">
              <button className="action-button">Start Review</button>
              <div className="status-badge">3 Active</div>
            </div>
          </div>

          {/* Contract Duplication */}
          <div className="renewal-card">
            <div className="card-header">
              <div className="card-icon">
                <FaCopy />
              </div>
              <h2>Contract Duplication</h2>
            </div>
            <p className="card-description">
              Copy existing contracts to save time
            </p>
            <ul className="card-features">
              <li>Create renewal drafts quickly</li>
              <li>Modify terms and metadata</li>
              <li>Version tracking and audit trail</li>
            </ul>
            <div className="card-footer">
              <button className="action-button">Duplicate</button>
              <div className="status-badge">15 Templates</div>
            </div>
          </div>

          {/* Automated Reminders */}
          <div className="renewal-card">
            <div className="card-header">
              <div className="card-icon">
                <FaBell />
              </div>
              <h2>Automated Reminders</h2>
            </div>
            <p className="card-description">Never miss a contract expiration</p>
            <ul className="card-features">
              <li>
                <input type="checkbox" checked readOnly />
                Reminders at 30, 15, and 5 days
              </li>
              <li>
                <input type="checkbox" checked readOnly />
                Dashboard highlights expiring contracts
              </li>
              <li>
                <input type="checkbox" checked readOnly />
                Filter by expiration date
              </li>
            </ul>
            <div className="card-footer">
              <button className="action-button">View Alerts</button>
              <div className="status-badge">2 Upcoming</div>
            </div>
          </div>
        </div>

        {/* Contract Dashboard Section */}
        <div className="dashboard-section">
          <h2 className="dashboard-title">Contract Dashboard</h2>

          <div className="dashboard-layout">
            <div className="contract-table-container">
              <div className="dashboard-filters">
                <span className="filter active">All (24)</span>
                <span className="filter">Active (18)</span>
                <span className="filter">Expiring (6)</span>
                <span className="filter">Review (3)</span>
              </div>

              <div className="contract-table">
                <div className="table-header">
                  <div>Contract Name</div>
                  <div>Client</div>
                  <div>Status</div>
                  <div>Expiry Date</div>
                  <div>Value</div>
                  <div>Actions</div>
                </div>

                <div className="table-row">
                  <div>Software License Agreement</div>
                  <div>TechCorp Inc.</div>
                  <div>
                    <span className="status-badge expiring">Expiring</span>
                  </div>
                  <div>2025-07-15</div>
                  <div>$45,000</div>
                  <div className="action-buttons">
                    <button className="table-btn review-btn">Review</button>
                    <button className="table-btn return-btn">Return</button>
                  </div>
                </div>

                <div className="table-row">
                  <div>Service Level Agreement</div>
                  <div>Cloud Services Ltd.</div>
                  <div>
                    <span className="status-badge active">Active</span>
                  </div>
                  <div>2025-12-31</div>
                  <div>$120,000</div>
                  <div className="action-buttons">
                    <button className="table-btn view-btn">View</button>
                    <button className="table-btn edit-btn">Edit</button>
                  </div>
                </div>

                <div className="table-row">
                  <div>Vendor Agreement</div>
                  <div>Supply Chain Partners</div>
                  <div>
                    <span className="status-badge review">Review</span>
                  </div>
                  <div>2028-03-15</div>
                  <div>$75,000</div>
                  <div className="action-buttons">
                    <button
                      className="table-btn approve-btn"
                      onClick={handleApproveClick}>
                      Approve
                    </button>
                    <button className="table-btn request-btn">Request</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Summary Section - Moved Below */}
          <div className="dashboard-summary-container">
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-value">24</div>
                <div className="summary-label">Total Contracts</div>
              </div>

              <div className="summary-card">
                <div className="summary-value">18</div>
                <div className="summary-label">Active</div>
              </div>

              <div className="summary-card">
                <div className="summary-value">6</div>
                <div className="summary-label">Expiring Soon</div>
              </div>

              <div className="summary-card">
                <div className="summary-value">3</div>
                <div className="summary-label">Under Review</div>
              </div>

              <div className="summary-card total-value">
                <div className="summary-value">$2.4M</div>
                <div className="summary-label">Total Contract Value</div>
              </div>
            </div>

            <div className="dashboard-actions">
              <button
                className="new-contract-btn"
                onClick={() => setShowNewContractModal(true)}>
                <FaPlus /> New Contract
              </button>
              <div className="import-export-buttons">
                <button className="import-export-btn">
                  <FaFileImport /> Import
                </button>
                <button className="import-export-btn">
                  <FaFileExport /> Export
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Approval Modal */}
        {showApprovalModal && (
          <div className="modal-backdrop">
            <div className="approval-modal">
              <button className="close-modal" onClick={closeApprovalModal}>
                <FaTimes />
              </button>

              <h2 className="modal-title">Contract Approval</h2>

              <div className="contract-details">
                <h3>Contract Details:</h3>

                <div className="details-row">
                  <div className="client-detail">
                    <span className="detail-label">Client:</span>
                    <span className="detail-value">Supply Chain Partners</span>
                  </div>

                  <div className="value-detail">
                    <span className="detail-label">Value:</span>
                    <span className="detail-value">$75,000</span>
                  </div>
                </div>
              </div>

              <div className="approval-actions">
                <h3>Approval Action:</h3>

                <div className="action-options">
                  <label className="action-option">
                    <input
                      type="radio"
                      name="approvalAction"
                      value="approve"
                      defaultChecked
                    />
                    <span className="checkmark"></span>
                    Approve Contract
                  </label>

                  <label className="action-option">
                    <input
                      type="radio"
                      name="approvalAction"
                      value="conditions"
                    />
                    <span className="checkmark"></span>
                    Approve with Conditions
                  </label>

                  <label className="action-option">
                    <input
                      type="radio"
                      name="approvalAction"
                      value="modifications"
                    />
                    <span className="checkmark"></span>
                    Request Modifications
                  </label>
                </div>
              </div>

              <div className="comments-section">
                <h3>Comments (Optional):</h3>
                <textarea
                  placeholder="Add any additional notes or conditions..."
                  className="comments-textarea"></textarea>
              </div>

              <div className="modal-buttons">
                <button
                  className="modal-btn confirm-btn"
                  onClick={closeApprovalModal}>
                  Confirm
                </button>
                <button
                  className="modal-btn cancel-btn"
                  onClick={closeApprovalModal}>
                  Cancel
                </button>
                <button className="modal-btn sign-btn">
                  <FaSignature /> Digital Sign
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Create New Contract Modal */}
        {showNewContractModal && (
          <div className="modal-backdrop">
            <div className="new-contract-modal">
              <h2 className="modal-title">Create New Contract</h2>
              <p className="modal-subtitle">
                Fill in the details below to create a new contract
              </p>

              <div className="divider"></div>

              <div className="contract-form">
                <div className="form-section">
                  <h3 className="section-title">Contract Information</h3>

                  <div className="form-group">
                    <label>Contract Name *</label>
                    <input
                      type="text"
                      placeholder="Enter contract name"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Contract Type *</label>
                    <select className="form-input">
                      <option value="">Select contract type</option>
                      <option value="service">Service Agreement</option>
                      <option value="license">License Agreement</option>
                      <option value="vendor">Vendor Agreement</option>
                      <option value="nda">NDA</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Client Name *</label>
                      <input
                        type="text"
                        placeholder="Enter client name"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label>Contract Value *</label>
                      <div className="value-input">
                        <span className="currency">$</span>
                        <input
                          type="number"
                          placeholder="0.00"
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Start Date *</label>
                      <input
                        type="text"
                        placeholder="MM/DD/YYYY"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label>End Date *</label>
                      <input
                        type="text"
                        placeholder="MM/DD/YYYY"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Additional Notes</label>
                    <textarea
                      placeholder="Add any special terms, conditions, or notes about this contract..."
                      className="form-textarea"></textarea>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="section-title">Contract Options</h3>

                  <div className="form-group">
                    <label>Use Template</label>
                    <select className="form-input">
                      <option value="">Select from existing templates</option>
                      <option value="template1">
                        Standard Service Agreement
                      </option>
                      <option value="template2">
                        Vendor Contract Template
                      </option>
                      <option value="template3">NDA Template</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Upload Document</label>
                    <div className="file-upload">
                      <div className="upload-area">
                        <FaCloudUploadAlt className="upload-icon" />
                        <p>Drop files here or click to browse</p>
                        <input type="file" className="file-input" />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Priority Level</label>
                    <div className="priority-options">
                      <label className="priority-option">
                        <input
                          type="radio"
                          name="priority"
                          value="standard"
                          defaultChecked
                        />
                        <span className="priority-checkmark"></span>
                        Standard
                      </label>

                      <label className="priority-option">
                        <input type="radio" name="priority" value="high" />
                        <span className="priority-checkmark"></span>
                        High
                      </label>

                      <label className="priority-option">
                        <input type="radio" name="priority" value="urgent" />
                        <span className="priority-checkmark"></span>
                        Urgent
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="checkbox-options">
                      <label className="checkbox-option">
                        <input type="checkbox" />
                        <span className="checkbox-checkmark"></span>
                        Enable auto-renewal notifications
                      </label>

                      <label className="checkbox-option">
                        <input type="checkbox" />
                        <span className="checkbox-checkmark"></span>
                        Require legal team approval
                      </label>

                      <label className="checkbox-option">
                        <input type="checkbox" />
                        <span className="checkbox-checkmark"></span>
                        Enable electronic signature
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="form-actions">
                <button
                  className="form-btn cancel-btn"
                  onClick={() => setShowNewContractModal(false)}>
                  Cancel
                </button>
                <button className="form-btn draft-btn">Save as Draft</button>
                <button
                  className="form-btn continue-btn"
                  onClick={() => setShowNewContractModal(false)}>
                  Continue
                </button>
                <button className="form-btn template-btn">Use Template</button>
                <button className="form-btn import-btn">Import Doc</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Renewal;
