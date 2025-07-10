import React, { useState, useEffect } from 'react';
import {
  FaSearch,
  FaHome,
  FaUsers,
  FaChevronDown,
  FaCalendarDay,
  FaClock,
  FaPlus,
  FaListUl,
  FaUser,
  FaEdit,
  FaTrashAlt,
  FaTimes,
  FaFileAlt,
  FaUserEdit,
} from 'react-icons/fa';
import './Review.css';
import { useNavigate } from 'react-router-dom';

interface Assignment {
  stakeholder: string;
  role: string;
  deadline: string;
  status: string;
  statusClass: string;
}

const Review: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState({
    stakeholder: '',
    role: '',
    deadlineDate: '',
    deadlineTime: '',
    sendEmail: false,
    sendReminder: false,
  });
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard'); // ✅ Navigates to root route
  };

  useEffect(() => {
    // Initialize with mock data
    const mockAssignments: Assignment[] = [
      {
        stakeholder: 'Sarah Johnson',
        role: 'Legal Review',
        deadline: 'May 20, 2025',
        status: 'Pending',
        statusClass: 'status-pending',
      },
      {
        stakeholder: 'Technical Team',
        role: 'Technical Review',
        deadline: 'May 18, 2025',
        status: 'In Progress',
        statusClass: 'status-in-progress',
      },
      {
        stakeholder: 'Michael Chen',
        role: 'Financial Review',
        deadline: 'May 22, 2025',
        status: 'Pending',
        statusClass: 'status-pending',
      },
      {
        stakeholder: 'Compliance Dept',
        role: 'Compliance Review',
        deadline: 'May 19, 2025',
        status: 'Complete',
        statusClass: 'status-complete',
      },
    ];
    setAssignments(mockAssignments);

    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split('T')[0];
    setFormData((prev) => ({
      ...prev,
      deadlineDate: formattedDate,
      deadlineTime: '10:00',
    }));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { stakeholder, role, deadlineDate, deadlineTime } = formData;

    if (!stakeholder || !role || !deadlineDate || !deadlineTime) {
      alert('Please fill in all required fields');
      return;
    }

    const formattedDate = new Date(deadlineDate).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    const formattedTime = new Date(
      `2000-01-01T${deadlineTime}`
    ).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const newAssignment: Assignment = {
      stakeholder,
      role,
      deadline: `${formattedDate} at ${formattedTime}`,
      status: 'Pending',
      statusClass: 'status-pending',
    };

    setAssignments((prev) => [...prev, newAssignment]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);

    // Reset form
    setFormData({
      stakeholder: '',
      role: '',
      deadlineDate: new Date(new Date().setDate(new Date().getDate() + 1))
        .toISOString()
        .split('T')[0],
      deadlineTime: '10:00',
      sendEmail: false,
      sendReminder: false,
    });
  };

  return (
    <div className="review-container">
      <div className="review-content">
        {/* Header */}
        <header className="header">
          <h1 className="header-title">
            <FaSearch className="header-icon" /> Contract Review
          </h1>
          <button
            className="home-button"
            onClick={goToDashboard}
            title="Return to Dashboard">
            <FaHome />
          </button>
        </header>

        {/* Main Content */}
        <div className="main-content">
          {/* Notification Bar */}
          <div className={`notification ${showNotification ? '' : 'hidden'}`}>
            <div className="notification-content">
              <div>
                <span className="notification-message">
                  Assignment successfully created
                </span>
                <span className="notification-detail">
                  Notification sent to stakeholders
                </span>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="notification-close">
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Contract Details */}
          <div className="card">
            <h2 className="card-title">
              <FaFileAlt className="card-icon" />
              Contract Review Assignment
            </h2>
            <div className="contract-details">
              <h3 className="contract-title">
                Software License Agreement - Acme Corp
              </h3>
              <div className="contract-info-row">
                <div className="contract-info-item">
                  <span className="contract-info-label">Contract #:</span>
                  <span className="contract-info-value">SLA-2025-042</span>
                </div>
                <div className="contract-info-divider"></div>
                <div className="contract-info-item">
                  <span className="contract-info-label">Created:</span>
                  <span className="contract-info-value">May 12, 2025</span>
                </div>
                <div className="contract-info-divider"></div>
                <div className="contract-info-item">
                  <span className="contract-info-label">Status:</span>
                  <span className="status-pending">Pending Review</span>
                </div>
                <div className="contract-info-divider"></div>
                <div className="contract-info-item">
                  <span className="contract-info-label">Value:</span>
                  <span className="contract-info-value">$75,000</span>
                </div>
              </div>
            </div>

            {/* Review Assignments Form */}
            <h3 className="card-title">
              <FaUserEdit className="card-icon" />
              Review Assignments
            </h3>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-row">
                <div className="form-col">
                  <label htmlFor="stakeholders" className="form-label">
                    Assign Stakeholders or groups...
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="stakeholders"
                      name="stakeholder"
                      value={formData.stakeholder}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter name or group"
                    />
                    <FaUsers className="input-icon" />
                  </div>
                </div>
                <div className="form-col">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <div className="relative">
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="form-input form-select">
                      <option value="">Select a role</option>
                      <option value="Legal Review">Legal Review</option>
                      <option value="Technical Review">Technical Review</option>
                      <option value="Financial Review">Financial Review</option>
                      <option value="Compliance Review">
                        Compliance Review
                      </option>
                    </select>
                    <FaChevronDown className="select-icon" />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-col">
                  <label htmlFor="deadlineDate" className="form-label">
                    Deadline Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="deadlineDate"
                      name="deadlineDate"
                      value={formData.deadlineDate}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                    <FaCalendarDay className="input-icon" />
                  </div>
                </div>
                <div className="form-col">
                  <label htmlFor="deadlineTime" className="form-label">
                    Deadline Time
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      id="deadlineTime"
                      name="deadlineTime"
                      value={formData.deadlineTime}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                    <FaClock className="input-icon" />
                  </div>
                </div>
              </div>
              <div className="form-checkbox-group">
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="sendEmail"
                    name="sendEmail"
                    checked={formData.sendEmail}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <label htmlFor="sendEmail" className="checkbox-label">
                    Send email notification
                  </label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="sendReminder"
                    name="sendReminder"
                    checked={formData.sendReminder}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <label htmlFor="sendReminder" className="checkbox-label">
                    Send reminder before deadline
                  </label>
                </div>
              </div>
              <div className="form-submit">
                <button type="submit" className="form-button">
                  <FaPlus className="button-icon" /> Assign
                </button>
              </div>
            </form>
          </div>

          {/* Current Assignments Table */}
          <div className="card">
            <div className="assignments-header">
              <h3 className="card-title">
                <FaListUl className="card-icon" />
                Current Assignments
              </h3>
              <div className="assignments-count">
                <FaUser className="count-icon" /> {assignments.length} assigned
              </div>
            </div>
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr className="table-header">
                    <th className="table-header-cell">Stakeholder</th>
                    <th className="table-header-cell">Role</th>
                    <th className="table-header-cell">Deadline</th>
                    <th className="table-header-cell">Status</th>
                    <th className="table-header-cell">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((assignment, index) => (
                    <tr key={index} className="table-row">
                      <td className="table-cell">
                        <div className="user-cell">
                          <div className="user-avatar"></div>
                          {assignment.stakeholder}
                        </div>
                      </td>
                      <td className="table-cell">{assignment.role}</td>
                      <td className="table-cell deadline-cell">
                        {assignment.deadline}
                      </td>
                      <td className="table-cell">
                        <span className={`status ${assignment.statusClass}`}>
                          {assignment.status}
                        </span>
                      </td>
                      <td className="table-cell actions-cell">
                        <button className="action-button">
                          <FaEdit />
                        </button>
                        <button className="action-button">
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
