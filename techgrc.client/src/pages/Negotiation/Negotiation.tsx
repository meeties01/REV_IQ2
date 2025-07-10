import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Negotiation.css';
import { FaFileContract, FaHome } from 'react-icons/fa';

const Negotiation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard'); // ✅ Navigates to root route
  };

  return (
    <div className="content">
      <header className="header">
        <h1>
          <FaFileContract /> Contract Negotiation
        </h1>
        {/* ✅ Updated Home Button */}
        <button
          className="home-button"
          onClick={goToDashboard}
          title="Return to Dashboard">
          <FaHome />
        </button>
      </header>
      {/* Cards Container */}
      <div className="cards-container">
        {/* Card 1: Propose Edits */}
        <div className="card card-propose-edits">
          <div className="card-header">
            <i className="fas fa-edit"></i>
            <h2>Propose Edits</h2>
          </div>
          <div className="card-content">
            <div className="actions">
              <button type="button" className="btn-comment">
                Comments
              </button>
              <button type="button" className="btn-comparison">
                Comparison
              </button>
              <button type="button" className="btn-save">
                Save
              </button>
            </div>

            <div className="edit-section">
              <div className="edit-container">
                <div className="edit-item">
                  <span className="dot green"></span>
                  <label htmlFor="contract">Contract</label>
                </div>
              </div>
              <div className="edit-container">
                <div className="edit-item">
                  <span className="dot orange"></span>
                  <label htmlFor="clauses">Clauses</label>
                </div>
              </div>
              <div className="edit-container warning">
                <div className="edit-item">
                  <span className="dot yellow"></span>
                  <p>Need to clarify the definition</p>
                </div>
              </div>
              <div className="edit-container">
                <div className="edit-item">
                  <span className="dot gray"></span>
                  <label htmlFor="parties">Parties</label>
                </div>
              </div>
              <div className="edit-container">
                <div className="edit-item">
                  <span className="dot gray"></span>
                  <label htmlFor="ai">AI</label>
                </div>
              </div>
              <div className="edit-container">
                <div className="edit-item">
                  <span className="dot gray"></span>
                  <label htmlFor="clause">Clause</label>
                </div>
              </div>
            </div>

            <div className="status-legend">
              <span>Status Legend:</span>
              <div className="legend-items">
                <div className="status-item accepted">
                  <span className="dot green"></span> Accepted
                </div>
                <div className="status-item needs-review">
                  <span className="dot orange"></span> Review
                </div>
                <div className="status-item rejected">
                  <span className="dot red"></span> Rejected
                </div>
                <div className="status-item pending">
                  <span className="dot gray"></span> Pending
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Draft Contracts */}
        <div className="card card-draft-contracts">
          <div className="card-header">
            <i className="fas fa-file-alt"></i>
            <h2>Draft Contracts</h2>
          </div>
          <div className="card-content">
            <div className="dropzone">
              <i className="fas fa-folder-plus"></i>
              <p>+ Upload Document</p>
            </div>
            <div className="uploaded-files">
              <div className="file">
                <div className="icon docx"></div>
                <p>Contract_V2.docx</p>
              </div>
              <div className="file">
                <div className="icon pdf"></div>
                <p>Contract_Draft.pdf</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Negotiation Cycle */}
        <div className="card card-negotiation-cycle">
          <div className="card-header">
            <i className="fas fa-balance-scale"></i>
            <h2>Negotiation Cycle</h2>
          </div>
          <div className="card-content has-scrollable-sections">
            {/* Scrollable Sections */}
            <div className="scrollable-sections">
              {/* Negotiation Progress */}
              <div className="section progress">
                <p>Negotiation Progress</p>
                <div className="negotiation-progress-container">
                  <div className="negotiation-progress">
                    <div className="negotiation-item accepted">
                      <span className="dot green"></span>
                      <div className="name-container">
                        <p>Jane Smith</p>
                      </div>
                      <span className="status-badge green">Accepted</span>
                    </div>
                    <div className="negotiation-item needs-review">
                      <span className="dot orange"></span>
                      <div className="name-container">
                        <p>John Doe</p>
                      </div>
                      <span className="status-badge orange">
                        Needs Clarification
                      </span>
                    </div>
                    <div className="negotiation-item rejected">
                      <span className="dot red"></span>
                      <div className="name-container">
                        <p>Acme Corp.</p>
                      </div>
                      <span className="status-badge red">Rejected</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pending Review */}
              <div className="section pending">
                <p>Pending Review</p>
                <div className="pending-review-container">
                  <div className="negotiation-item pending">
                    <span className="dot gray"></span>
                    <div className="name-container">
                      <p>Jane Smith</p>
                    </div>
                  </div>
                  <div className="negotiation-item needs-review">
                    <span className="dot orange"></span>
                    <div className="name-container">
                      <p>John Doe</p>
                    </div>
                    <span className="status-badge orange">
                      Needs Clarification
                    </span>
                  </div>
                  <div className="negotiation-item pending">
                    <span className="dot gray"></span>
                    <div className="name-container">
                      <p>Acme Corp.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Finalize Button */}
            <div className="finalize-wrapper">
              <button
                type="button"
                className="btn-finalize"
                onClick={showModal}>
                Finalize
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal show">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h2>Contract Finalized Successfully!</h2>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <p>Your contract negotiation has been completed and finalized.</p>
              <p>
                All parties will receive notification and contract documents.
              </p>

              {/* Contract Details */}
              <div className="contract-details">
                <h3>Contract Summary</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <strong>Contract ID</strong>
                    <span>CNS-2025-001</span>
                  </div>
                  <div className="detail-item">
                    <strong>Parties</strong>
                    <span>Jane Smith, John Doe, Acme Corp.</span>
                  </div>
                  <div className="detail-item">
                    <strong>Status</strong>
                    <span className="status-badge green">Finalized</span>
                  </div>
                  <div className="detail-item">
                    <strong>Finalized Date</strong>
                    <span>May 29, 2025 at 2:45 PM</span>
                  </div>
                  <div className="detail-item">
                    <strong>Contract Type</strong>
                    <span>Service Agreement</span>
                  </div>
                  <div className="detail-item">
                    <strong>Effective Date</strong>
                    <span>June 1, 2025</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <button type="button" className="btn-secondary">
                  <i className="fas fa-download"></i> Download
                </button>
                <button type="button" className="btn-secondary">
                  <i className="fas fa-eye"></i> Details
                </button>
                <button type="button" className="btn-secondary">
                  <i className="fas fa-envelope"></i> Notification
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={closeModal}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Negotiation;
