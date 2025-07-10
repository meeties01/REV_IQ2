import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaFileContract,
  FaUsers,
  FaPaperclip,
  FaSearch,
  FaHome,
  FaArrowRight,
  FaPlus,
  FaEye,
  FaPencilAlt,
  FaFilePdf,
  FaFileExcel,
  FaFileWord,
  FaTimes,
  FaComment,
  FaClock,
  FaCheck,
  FaBell,
  FaExclamationTriangle,
  FaInfoCircle,
  FaCloudUploadAlt,
  FaSyncAlt,
} from 'react-icons/fa';
import './Creation.css';

const Creation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard'); // ✅ Navigates to root route
  };

  // Update progress
  const updateProgress = (step: number) => {
    setCurrentStep(step);
  };

  // Initialize progress
  useEffect(() => {
    updateProgress(1);
  }, []);

  return (
    <div className="creation-container">
      {/* Header */}
      <header className="header">
        <h1>
          <FaFileContract /> Contract Creation
        </h1>
        {/* ✅ Updated Home Button */}
        <button
          className="home-button"
          onClick={goToDashboard}
          title="Return to Dashboard">
          <FaHome />
        </button>
      </header>

      <div className="container">
        {/* Progress Steps */}
        <div className="progress-container">
          <div className="progress-steps">
            <div
              className={`step ${currentStep >= 1 ? 'active' : ''}`}
              id="step-1">
              <span>1</span>
              <p>Creation</p>
            </div>
            <div
              className={`step ${currentStep >= 2 ? 'active' : ''}`}
              id="step-2">
              <span>2</span>
              <p>Assignment</p>
            </div>
            <div
              className={`step ${currentStep >= 3 ? 'active' : ''}`}
              id="step-3">
              <span>3</span>
              <p>Attachments</p>
            </div>
            <div
              className={`step ${currentStep >= 4 ? 'active' : ''}`}
              id="step-4">
              <span>4</span>
              <p>Review</p>
            </div>
            <div
              className="progress-bar"
              id="progress-bar"
              style={{ width: `${(currentStep - 1) * 33.33}%` }}></div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="cards-container">
          {/* Card 1: Contract Creation */}
          <div className="card card-creation">
            <div className="card-header">
              <FaFileContract />
              <h2>Contract Creation</h2>
            </div>
            <div className="card-content">
              <div className="form-group">
                <label htmlFor="contract-title">Contract Title</label>
                <input
                  type="text"
                  id="contract-title"
                  className="form-control"
                  placeholder="Legal"
                  defaultValue="Legal"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject-name">Subject Name</label>
                <input
                  type="text"
                  id="subject-name"
                  className="form-control"
                  placeholder="Legal"
                  defaultValue="Legal"
                />
              </div>

              <div className="form-group">
                <label>Date Range</label>
                <div className="date-range">
                  <div>
                    <input
                      type="date"
                      id="start-date"
                      className="form-control"
                      defaultValue="2031-01-15"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="end-date"
                      className="form-control"
                      placeholder="2031"
                      defaultValue="2031"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contract-type">Contract Type</label>
                <select id="contract-type" className="form-control">
                  <option value="start-act-2031">Start Act 2031</option>
                  <option value="nda">Non-Disclosure Agreement</option>
                  <option value="service">Service Agreement</option>
                </select>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary"
                id="continue-btn"
                onClick={() => updateProgress(currentStep + 1)}>
                <FaArrowRight /> Continue Setup
              </button>
            </div>
          </div>

          {/* Card 2: Stakeholder Assignment */}
          <div className="card card-assignment">
            <div className="card-header">
              <FaUsers />
              <h2>Stakeholder Assignment</h2>
            </div>
            <div className="card-content">
              <button
                className="btn btn-secondary"
                id="add-stakeholder"
                onClick={() =>
                  alert('Add stakeholder functionality would open here')
                }>
                <FaPlus /> Add Stakeholder
              </button>

              <div className="stakeholder">
                <div className="icon legal">L</div>
                <div className="stakeholder-details">
                  <strong>Legal</strong>
                  <p>View Only</p>
                </div>
                <div className="actions">
                  <button>
                    <FaEye />
                  </button>
                </div>
              </div>

              <div className="stakeholder">
                <div className="icon finance">F</div>
                <div className="stakeholder-details">
                  <strong>Finance</strong>
                  <p>View Only</p>
                </div>
                <div className="actions">
                  <button>
                    <FaEye />
                  </button>
                </div>
              </div>

              <div className="stakeholder">
                <div className="icon business-owner">B</div>
                <div className="stakeholder-details">
                  <strong>Business Owner</strong>
                  <p>Edit Access</p>
                </div>
                <div className="actions">
                  <button>
                    <FaPencilAlt />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary"
                id="assign-btn"
                onClick={() => updateProgress(currentStep + 1)}>
                <FaCheck /> Assign Stakeholders
              </button>
            </div>
          </div>

          {/* Card 3: Attachments */}
          <div className="card card-attachments">
            <div className="card-header">
              <FaPaperclip />
              <h2>Attachments</h2>
            </div>
            <div className="card-content">
              <div className="dropzone" id="dropzone">
                <FaCloudUploadAlt />
                <p>Drag files here or click to upload</p>
              </div>

              <div className="uploaded-files">
                <div className="file">
                  <div className="file-icon pdf">
                    <FaFilePdf />
                  </div>
                  <div className="file-name">contract.pdf</div>
                  <div className="file-remove">
                    <FaTimes />
                  </div>
                </div>
                <div className="file">
                  <div className="file-icon xlsx">
                    <FaFileExcel />
                  </div>
                  <div className="file-name">financials.xlsx</div>
                  <div className="file-remove">
                    <FaTimes />
                  </div>
                </div>
                <div className="file">
                  <div className="file-icon docx">
                    <FaFileWord />
                  </div>
                  <div className="file-name">terms.docx</div>
                  <div className="file-remove">
                    <FaTimes />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary"
                id="submit-review-btn"
                onClick={() => updateProgress(currentStep + 1)}>
                <FaPaperclip /> Submit for Review
              </button>
            </div>
          </div>

          {/* Card 4: Legal Review */}
          <div className="card card-review">
            <div className="card-header">
              <FaSearch />
              <h2>Legal Review</h2>
            </div>
            <div className="card-content">
              <div className="review-content">
                <p>Draft Contract</p>
                <textarea></textarea>
              </div>

              <button className="comment-btn">
                <FaComment /> Add a comment...
              </button>

              <div className="status-container">
                <span className="status-badge yellow">Under Review</span>
                <span className="status-badge gray">Pending</span>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-secondary"
                id="awaiting-review-btn"
                onClick={() => setModalOpen(true)}>
                <FaClock /> Awaiting Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Contract Under Review */}
      {modalOpen && (
        <div className="modal" id="reviewModal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Contract Under Review</h2>
            </div>

            <div className="modal-body">
              {/* Review Progress */}
              <div className="review-progress">
                <h3>Review Progress</h3>
                <div className="progress-item">
                  <div className="status-icon green">
                    <FaCheck />
                  </div>
                  <div className="progress-details">
                    <p>Contract Submitted</p>
                    <small>Completed on May 28, 2025</small>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="status-icon orange">
                    <FaSyncAlt className="fa-spin" />
                  </div>
                  <div className="progress-details">
                    <p>Legal Review</p>
                    <small>In Progress - Started May 29, 2025</small>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="status-icon gray">
                    <FaClock />
                  </div>
                  <div className="progress-details">
                    <p>Stakeholder Approval</p>
                    <small>Pending</small>
                  </div>
                </div>
              </div>

              {/* Current Reviewers in 2x2 Grid */}
              <div className="current-reviewers">
                <h3>Current Reviewers</h3>
                <div className="reviewer-grid">
                  {/* Reviewer 1: Jane Smith */}
                  <div className="reviewer-card">
                    <div
                      className="reviewer-avatar"
                      style={{ backgroundColor: '#f59e0b' }}>
                      JS
                    </div>
                    <div className="reviewer-name">Jane Smith</div>
                    <div className="reviewer-role">Legal Counsel</div>
                    <div className="status-tag yellow">REVIEWING</div>
                  </div>

                  {/* Reviewer 2: Alex Chen */}
                  <div className="reviewer-card">
                    <div
                      className="reviewer-avatar"
                      style={{ backgroundColor: '#10b981' }}>
                      AC
                    </div>
                    <div className="reviewer-name">Alex Chen</div>
                    <div className="reviewer-role">Department Head</div>
                    <div className="status-tag gray">QUEUED</div>
                  </div>
                </div>
              </div>

              {/* Estimated Review Time */}
              <div className="estimated-time">
                <FaClock />
                <div>
                  <p>Estimated Review Time: 2-3 Business Days</p>
                  <small>Expected completion by June 2, 2025</small>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                id="reminder-btn"
                onClick={() =>
                  alert('Reminder notification sent to reviewers!')
                }>
                <FaBell /> Reminder
              </button>
              <button
                className="btn btn-danger"
                id="urgent-btn"
                onClick={() =>
                  alert(
                    'Contract marked as urgent! Reviewers have been notified.'
                  )
                }>
                <FaExclamationTriangle /> Urgent
              </button>
              <button
                className="btn btn-secondary"
                id="details-btn"
                onClick={() =>
                  alert('Detailed review information would be displayed here')
                }>
                <FaInfoCircle /> Details
              </button>
              <button
                className="btn btn-secondary"
                id="cancel-review-btn"
                onClick={() => setModalOpen(false)}>
                <FaCheck /> Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Creation;
