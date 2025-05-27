export interface Appointment {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  doctor: string;
}

export const appointments: Appointment[] = [
  {
    id: "1",
    title: "Health Checkup",
    type: "General",
    date: "2024-03-21",
    time: "09:00",
    doctor: "Dr. Smith",
  },
  {
    id: "2",
    title: "Dentist Appointment",
    type: "Dental",
    date: "2024-03-21",
    time: "11:00",
    doctor: "Dr. Johnson",
  },
  {
    id: "3",
    title: "Physiotherapy",
    type: "Physical",
    date: "2024-03-21",
    time: "13:00",
    doctor: "Dr. Williams",
  },
  {
    id: "4",
    title: "Ophthalmologist",
    type: "Eye",
    date: "2024-03-23",
    time: "15:00",
    doctor: "Dr. Brown",
  },
];
