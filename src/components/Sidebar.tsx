import React from "react";
import {
  FiHome,
  FiClock,
  FiCalendar,
  FiCalendar as FiAppointments,
  FiBarChart2,
  FiActivity,
  FiMessageSquare,
  FiHelpCircle,
  FiSettings,
} from "react-icons/fi";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  onNavigate,
  currentPage,
}) => {
  const handleNavigation = (page: string) => {
    onNavigate(page);
    if (window.innerWidth <= 992) {
      onClose();
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2>General</h2>
      </div>
      <nav className="sidebar-nav">
        <ul className="main-nav">
          <li className={currentPage === "dashboard" ? "active" : ""}>
            <a
              href="#dashboard"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("dashboard");
              }}
            >
              <FiHome className="nav-icon" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className={currentPage === "history" ? "active" : ""}>
            <a
              href="#history"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("history");
              }}
            >
              <FiClock className="nav-icon" />
              <span>History</span>
            </a>
          </li>
          <li className={currentPage === "calendar" ? "active" : ""}>
            <a
              href="#calendar"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("calendar");
              }}
            >
              <FiCalendar className="nav-icon" />
              <span>Calendar</span>
            </a>
          </li>
          <li className={currentPage === "appointments" ? "active" : ""}>
            <a
              href="#appointments"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("appointments");
              }}
            >
              <FiAppointments className="nav-icon" />
              <span>Appointments</span>
            </a>
          </li>
          <li className={currentPage === "statistics" ? "active" : ""}>
            <a
              href="#statistics"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("statistics");
              }}
            >
              <FiBarChart2 className="nav-icon" />
              <span>Statistics</span>
            </a>
          </li>
          <li className={currentPage === "tests" ? "active" : ""}>
            <a
              href="#tests"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("tests");
              }}
            >
              <FiActivity className="nav-icon" />
              <span>Tests</span>
            </a>
          </li>
          <li className={currentPage === "chat" ? "active" : ""}>
            <a
              href="#chat"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("chat");
              }}
            >
              <FiMessageSquare className="nav-icon" />
              <span>Chat</span>
            </a>
          </li>
          <li className={currentPage === "support" ? "active" : ""}>
            <a
              href="#support"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("support");
              }}
            >
              <FiHelpCircle className="nav-icon" />
              <span>Support</span>
            </a>
          </li>
        </ul>
        <ul className="bottom-nav">
          <li className={currentPage === "settings" ? "active" : ""}>
            <a
              href="#settings"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("settings");
              }}
            >
              <FiSettings className="nav-icon" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
