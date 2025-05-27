export interface HealthStatus {
  id: string;
  name: string;
  status: "healthy" | "warning" | "critical";
  date: string;
  progress: number;
}

export const healthStatusData: HealthStatus[] = [
  {
    id: "lungs",
    name: "Lungs",
    status: "warning",
    date: "2024-03-15",
    progress: 80,
  },
  {
    id: "teeth",
    name: "Teeth",
    status: "healthy",
    date: "2024-03-10",
    progress: 60,
  },
  {
    id: "bone",
    name: "Bone",
    status: "healthy",
    date: "2024-03-12",
    progress: 90,
  },
  {
    id: "heart",
    name: "Heart",
    status: "healthy",
    date: "2024-03-14",
    progress: 100,
  },
];
