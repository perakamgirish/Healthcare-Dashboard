import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardMainContent />;
      // Add other cases as needed
      default:
        return <DashboardMainContent />;
    }
  };

  return (
    <div className="app-container">
      <Header onMenuClick={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="main-layout">
        <Sidebar
          isOpen={isMenuOpen}
          onClose={closeMenu}
          onNavigate={handleNavigation}
          currentPage={currentPage}
        />
        <div
          className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
          onClick={closeMenu}
        />
        <div className="main-content-wrapper">{renderContent()}</div>
      </div>
    </div>
  );
}

export default App;
