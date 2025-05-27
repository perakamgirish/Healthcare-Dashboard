export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
}

export const navigationItems: NavigationItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { id: "history", label: "History", icon: "history" },
  { id: "calendar", label: "Calendar", icon: "calendar" },
  { id: "appointments", label: "Appointments", icon: "appointment" },
  { id: "statistics", label: "Statistics", icon: "chart" },
  { id: "tests", label: "Tests", icon: "test" },
  { id: "chat", label: "Chat", icon: "chat" },
  { id: "support", label: "Support", icon: "support" },
  { id: "settings", label: "Settings", icon: "settings" },
];
