import header from "./header.png";
import doctor from "./doctor.png";
import doctor1 from "./doctor1.png";
import group_profiles from "./group_profiles.png";
import logo from "./logo.png";

// Images
const assets = {
  header,
  doctor,
  doctor1,
  group_profiles,
  logo,
};
export default assets;

// Dummy data for Dashboard

// Appointment cards
export const appointmentData = [
  {
    title: "Today's Appointments",
    value: 24,
  },
  {
    title: "Total Appointments",
    value: "13.0k",
  },
];

// Appointment activity chart
export const appointmentActivityData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Approved",
      data: [12, 19, 3, 5, 2, 3, 8],
      backgroundColor: "#34D399", // green
    },
    {
      label: "Scheduled",
      data: [5, 7, 2, 8, 4, 6, 3],
      backgroundColor: "#60A5FA", // blue
    },
  ],
  filter: "This Week",
};

// Available doctors dummy data
export const availableDoctorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    experience: "8 years",
    patients: 120,
    status: "Active",
    days: ["Mon", "Wed", "Fri"],
    slots: ["9:00 AM", "11:00 AM", "3:00 PM"],
    image: doctor,
  },
  {
    id: 2,
    name: "Dr. Sarah Smith",
    specialty: "Dentist",
    experience: "5 years",
    patients: 98,
    status: "Active",
    days: ["Tue", "Thu"],
    slots: ["10:00 AM", "1:00 PM"],
    image: doctor,
  },
  {
    id: 3,
    name: "Dr. Mark Carter",
    specialty: "Neurologist",
    experience: "10 years",
    patients: 210,
    status: "Unavailable",
    days: ["Mon", "Tue", "Fri"],
    slots: ["8:00 AM", "2:00 PM"],
    image: doctor,
  },

  // 🔽 Added Doctors Below for Scrollable UI
  {
    id: 4,
    name: "Dr. Emily Johnson",
    specialty: "Pediatrician",
    experience: "7 years",
    patients: 150,
    status: "Active",
    days: ["Mon", "Thu", "Fri"],
    slots: ["9:30 AM", "12:00 PM"],
    image: doctor,
  },
  {
    id: 5,
    name: "Dr. Michael Roberts",
    specialty: "Dermatologist",
    experience: "12 years",
    patients: 180,
    status: "Active",
    days: ["Wed", "Fri"],
    slots: ["10:00 AM", "4:00 PM"],
    image: doctor,
  },
  {
    id: 6,
    name: "Dr. Olivia Brown",
    specialty: "Gynecologist",
    experience: "9 years",
    patients: 160,
    status: "Active",
    days: ["Tue", "Thu"],
    slots: ["11:00 AM", "2:00 PM"],
    image: doctor,
  },
  {
    id: 7,
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    experience: "15 years",
    patients: 240,
    status: "Unavailable",
    days: ["Mon", "Tue"],
    slots: ["8:00 AM", "1:00 PM"],
    image: doctor,
  },
  {
    id: 8,
    name: "Dr. Sophia Martinez",
    specialty: "Psychologist",
    experience: "6 years",
    patients: 90,
    status: "Active",
    days: ["Wed", "Thu", "Fri"],
    slots: ["9:00 AM", "3:00 PM"],
    image: doctor,
  },
  {
    id: 9,
    name: "Dr. William Adams",
    specialty: "ENT Specialist",
    experience: "11 years",
    patients: 170,
    status: "Active",
    days: ["Tue", "Thu"],
    slots: ["12:00 PM", "4:00 PM"],
    image: doctor,
  },
  {
    id: 10,
    name: "Dr. Ava Thompson",
    specialty: "General Physician",
    experience: "4 years",
    patients: 75,
    status: "Active",
    days: ["Mon", "Wed"],
    slots: ["9:00 AM", "12:00 PM"],
    image: doctor,
  },
  {
    id: 11,
    name: "Dr. Daniel Lee",
    specialty: "Urologist",
    experience: "14 years",
    patients: 200,
    status: "Unavailable",
    days: ["Mon", "Fri"],
    slots: ["10:00 AM", "2:00 PM"],
    image: doctor,
  },
  {
    id: 12,
    name: "Dr. Grace Evans",
    specialty: "Oncologist",
    experience: "13 years",
    patients: 220,
    status: "Active",
    days: ["Tue", "Fri"],
    slots: ["11:30 AM", "3:00 PM"],
    image: doctor,
  },
];




export const upcomingEvents = [
  {
    id: 1,
    name: "Dr. Alisha Brown",
    task: "Malaria Test",
    time: "09:00 AM - 09:30 AM",
  },
  {
    id: 2,
    name: "Dr. Mohamed Khalid",
    task: "Consultation",
    time: "11:00 AM - 11:45 AM",
  },
  {
    id: 3,
    name: "Dr. Stella M.",
    task: "Blood Pressure Check",
    time: "02:00 PM - 02:30 PM",
  },

  {
    id: 4,
    name: "Dr. Stella M.",
    task: "Blood Pressure Check",
    time: "02:00 PM - 02:30 PM",
  },
];
