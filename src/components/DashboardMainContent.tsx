import React from "react";
import {
  FiClock,
  FiUser,
  FiHeart,
  FiActivity as FiPhysio,
  FiChevronRight,
} from "react-icons/fi";
import { FaTooth, FaStethoscope, FaEye } from "react-icons/fa";
import "./DashboardMainContent.css";
import { healthStatusData } from "../data/healthData";
import { appointments } from "../data/appointments";

// SimpleAppointmentCard Component
interface AppointmentCardProps {
  title: string;
  time: string;
  doctor: string;
  department?: string;
  onMoreDetails?: () => void;
}

const getDepartmentIcon = (department?: string) => {
  switch (department?.toLowerCase()) {
    case "dentist":
      return <FaTooth className="department-icon" />;
    case "physiotherapy":
      return <FiPhysio className="department-icon" />;
    case "cardiology":
      return <FiHeart className="department-icon" />;
    case "ophthalmology":
      return <FaEye className="department-icon" />;
    case "general":
      return <FaStethoscope className="department-icon" />;
    default:
      return <FiUser className="department-icon" />;
  }
};

const SimpleAppointmentCard: React.FC<AppointmentCardProps> = ({
  title,
  time,
  doctor,
  department = "general",
  onMoreDetails,
}) => (
  <div className="appointment-card">
    <div className="appointment-card-content">
      <div className="appointment-main">
        <div className="appointment-details">
          <h3>
            {getDepartmentIcon(department)}
            {title}
          </h3>
          <p>{doctor}</p>
        </div>
        <div className="appointment-time">
          <FiClock className="time-icon" />
          <span>{time}</span>
        </div>
      </div>
      <button className="more-details-btn" onClick={onMoreDetails}>
        More Details
        <FiChevronRight />
      </button>
    </div>
  </div>
);

// AnatomySection Component
const AnatomySection: React.FC = () => (
  <div className="anatomy-section">
    <div className="anatomy-illustration">
      <img src="/public/humanbody.webp" alt="Human Body" className="body-image" />
    </div>
    <div className="health-status-cards">
      {healthStatusData.map((status) => (
        <div key={status.id} className={`health-card ${status.status}`}>
          <h3>{status.name}</h3>
          <p>Date: {status.date}</p>
          <div className="health-progress-bar">
            <div
              className="health-progress"
              style={{
                width: `${status.progress}%`,
                backgroundColor:
                  status.status === "healthy"
                    ? "var(--success)"
                    : status.status === "warning"
                    ? "var(--warning)"
                    : "var(--error-red)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// CalendarView Component
const CalendarView: React.FC = () => (
  <div className="calendar-section">
    <div className="calendar-header">
      <h2>October 2021</h2>
    </div>
    <div className="calendar-grid">
      {/* Calendar days will be rendered here */}
      <div className="calendar-day has-appointment">
        <span className="day-name">Mon</span>
        <span className="day-number">15</span>
        <div className="appointment-times">
          <span className="appointment-time">09:00</span>
          <span className="appointment-time">14:30</span>
        </div>
      </div>
      <div className="calendar-day has-appointment">
        <span className="day-name">Wed</span>
        <span className="day-number">18</span>
        <div className="appointment-times">
          <span className="appointment-time">11:00</span>
          <span className="appointment-time">16:45</span>
        </div>
      </div>
      <div className="calendar-day has-appointment">
        <span className="day-name">Fri</span>
        <span className="day-number">20</span>
        <div className="appointment-times">
          <span className="appointment-time">13:00</span>
          <span className="appointment-time">15:30</span>
        </div>
      </div>
      <div className="calendar-day has-appointment">
        <span className="day-name">Mon</span>
        <span className="day-number">22</span>
        <div className="appointment-times">
          <span className="appointment-time">15:00</span>
          <span className="appointment-time">17:15</span>
        </div>
      </div>
      <div className="calendar-day has-appointment">
        <span className="day-name">Wed</span>
        <span className="day-number">18</span>
        <div className="appointment-times">
          <span className="appointment-time">11:00</span>
          <span className="appointment-time">16:45</span>
        </div>
      </div>
      <div className="calendar-day has-appointment">
        <span className="day-name">Fri</span>
        <span className="day-number">20</span>
        <div className="appointment-times">
          <span className="appointment-time">13:00</span>
          <span className="appointment-time">15:30</span>
        </div>
      </div>
    </div>
    <div className="appointment-cards">
      <SimpleAppointmentCard
        title="Dentist"
        time="09:00"
        doctor="Dr. Sarah Wilson"
        department="dentist"
        onMoreDetails={() => console.log("More details clicked for Dentist")}
      />
      <SimpleAppointmentCard
        title="Physiotherapy"
        time="11:00"
        doctor="Dr. Michael Brown"
        department="physiotherapy"
        onMoreDetails={() =>
          console.log("More details clicked for Physiotherapy")
        }
      />
    </div>
  </div>
);

interface UpcomingAppointment {
  day: string;
  title: string;
  time: string;
  emoji: string;
}

// UpcomingSchedule Component
const UpcomingSchedule: React.FC = () => {
  const upcomingAppointments: UpcomingAppointment[] = appointments.map(
    (appt: any) => ({
      day: appt.day,
      title: appt.title,
      time: appt.time,
      emoji: appt.emoji,
    })
  );

  const groupedAppointments = upcomingAppointments.reduce(
    (acc, appointment) => {
      (acc[appointment.day] = acc[appointment.day] || []).push(appointment);
      return acc;
    },
    {} as Record<string, UpcomingAppointment[]>
  );

  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      <div className="schedule-cards">
        {Object.entries(groupedAppointments).map(([day, dayAppointments]) => (
          <div key={day} className="schedule-day-group">
            <h3 className="schedule-day">On {day}</h3>
            <div className="day-appointments">
              {dayAppointments.map((appointment) => (
                <div
                  key={appointment.title + appointment.time}
                  className="schedule-card"
                >
                  <div className="schedule-details">
                    <div className="schedule-title">{appointment.title}</div>
                    <div className="schedule-time">{appointment.time}</div>
                  </div>
                  <div className="schedule-emoji">{appointment.emoji}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ActivityFeed Component
const activityData = [30, 60, 40, 80, 50, 90, 70]; // Example data for 7 days
const ActivityFeed: React.FC = () => {
  const max = Math.max(...activityData);
  const svgWidth = 350;
  const svgHeight = 160;
  const graphWidth = 315; // for 7 points, leave some padding
  const graphHeight = 130;
  const points = activityData
    .map((v, i) => {
      const x = (i / (activityData.length - 1)) * graphWidth;
      const y = svgHeight - 15 - (v / max) * graphHeight;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="activity-feed">
      <h2>Activity</h2>
      <p className="activity-summary">3 appointments on this week</p>
      <div className="activity-chart">
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        >
          <polyline
            fill="none"
            stroke="var(--primary-blue)"
            strokeWidth="3"
            points={points}
          />
          {activityData.map((v, i) => {
            const x = (i / (activityData.length - 1)) * graphWidth;
            const y = svgHeight - 15 - (v / max) * graphHeight;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="6"
                fill="var(--primary-blue)"
                stroke="#fff"
                strokeWidth="2"
              />
            );
          })}
        </svg>
        <div className="activity-days" style={{ width: graphWidth }}>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main DashboardMainContent Component
const DashboardMainContent: React.FC = () => {
  return (
    <main className="dashboard-content">
      <div className="dashboard-grid">
        <div className="dashboard-col anatomy-col">
          <AnatomySection />
        </div>
        <div className="dashboard-col calendar-col">
          <CalendarView />
        </div>
        <div className="dashboard-col schedule-col">
          <UpcomingSchedule />
        </div>
        <div className="dashboard-col activity-col">
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
