import emirates from "@/icons/emirates.png";
import lufthansa from "@/icons/lufthansa.png";
import { Flight } from "./interfaces";

const flightsData: Flight[] = [
  {
    id: 1,
    airlineLogo: emirates,
    departure: {
      flightNumber: "AI123",
      airportCode: "DEL",
      cityCode: "New Delhi",
      date: "2024-10-08",
      time: "10:00 AM",
      stops: 1,
      stopCity: "Dubai",
      stopDuration: "2h",
      duration: "6h 30m",
    },
    return: {
      flightNumber: "AI124",
      airportCode: "BOM",
      cityCode: "Mumbai",
      date: "2024-10-15",
      time: "4:00 PM",
      stops: 0,
      duration: "2h 00m",
    },
    priceRange: "AED 200 - AED 350",
    totalDays: 1,
  },
  {
    id: 2,
    airlineLogo: lufthansa,
    departure: {
      flightNumber: "EK201",
      airportCode: "DXB",
      cityCode: "Dubai",
      date: "2024-10-12",
      time: "8:00 AM",
      stops: 0,
      duration: "3h 00m",
    },
    return: {
      flightNumber: "EK202",
      airportCode: "LHR",
      cityCode: "London",
      date: "2024-10-19",
      time: "12:00 PM",
      stops: 0,
      duration: "7h 30m",
    },
    priceRange: "AED 500 - AED 700",
    totalDays: 1,
  },
  {
    id: 3,
    airlineLogo: lufthansa,
    departure: {
      flightNumber: "UA456",
      airportCode: "JFK",
      cityCode: "New York",
      date: "2024-10-20",
      time: "2:00 PM",
      stops: 0,
      duration: "12h 00m",
    },
    return: {
      flightNumber: "UA457",
      airportCode: "SIN",
      cityCode: "Singapore",
      date: "2024-10-27",
      time: "10:00 AM",
      stops: 1,
      stopCity: "Tokyo",
      stopDuration: "3h",
      duration: "14h 00m",
    },
    priceRange: "AED 800 - AED 1,200",
    totalDays: 2,
  },
  {
    id: 4,
    airlineLogo: emirates,
    departure: {
      flightNumber: "QF789",
      airportCode: "SYD",
      cityCode: "Sydney",
      date: "2024-11-01",
      time: "6:00 AM",
      stops: 1,
      stopCity: "Singapore",
      stopDuration: "4h",
      duration: "15h 00m",
    },
    return: {
      flightNumber: "QF790",
      airportCode: "PEK",
      cityCode: "Beijing",
      date: "2024-11-08",
      time: "3:00 PM",
      stops: 1,
      stopCity: "Dubai",
      stopDuration: "3h",
      duration: "16h 30m",
    },
    priceRange: "AED 1,000 - AED 1,500",
    totalDays: 2,
  },
  {
    id: 5,
    airlineLogo: lufthansa,
    departure: {
      flightNumber: "JL102",
      airportCode: "HND",
      cityCode: "Tokyo",
      date: "2024-11-05",
      time: "11:00 AM",
      stops: 0,
      duration: "5h 30m",
    },
    return: {
      flightNumber: "JL103",
      airportCode: "LAX",
      cityCode: "Los Angeles",
      date: "2024-11-12",
      time: "7:00 PM",
      stops: 0,
      duration: "10h 45m",
    },
    priceRange: "AED 900 - AED 1,100",
    totalDays: 1,
  },
  {
    id: 6,
    airlineLogo: emirates,
    departure: {
      flightNumber: "BA567",
      airportCode: "LHR",
      cityCode: "London",
      date: "2024-11-05",
      time: "7:30 AM",
      stops: 1,
      stopCity: "Paris",
      stopDuration: "1h 30m",
      duration: "9h 45m",
    },
    return: {
      flightNumber: "BA568",
      airportCode: "DXB",
      cityCode: "Dubai",
      date: "2024-11-12",
      time: "10:00 PM",
      stops: 1,
      stopCity: "Doha",
      stopDuration: "2h",
      duration: "8h 30m",
    },
    priceRange: "AED 600 - AED 950",
    totalDays: 1,
  },
  {
    id: 7,
    airlineLogo: emirates,
    departure: {
      flightNumber: "SQ245",
      airportCode: "SIN",
      cityCode: "Singapore",
      date: "2024-11-09",
      time: "3:00 AM",
      stops: 0,
      duration: "6h 45m",
    },
    return: {
      flightNumber: "SQ246",
      airportCode: "SYD",
      cityCode: "Sydney",
      date: "2024-11-16",
      time: "5:00 AM",
      stops: 0,
      stopCity: "Dubai",
      stopDuration: "2h",
      duration: "7h 10m",
    },
    priceRange: "AED 700 - AED 1,000",
    totalDays: 1,
  },
  {
    id: 8,
    airlineLogo: emirates,
    departure: {
      flightNumber: "AF789",
      airportCode: "DEL",
      cityCode: "New Delhi",
      date: "2024-10-23",
      time: "9:00 AM",
      stops: 1,
      stopCity: "Dubai",
      stopDuration: "2h",
      duration: "11h 00m",
    },
    return: {
      flightNumber: "AF790",
      airportCode: "BOM",
      cityCode: "Mumbai",
      date: "2024-10-30",
      time: "3:00 PM",
      stops: 0,
      duration: "2h 15m",
    },
    priceRange: "AED 400 - AED 750",
    totalDays: 2,
  },
  {
    id: 9,
    airlineLogo: lufthansa,
    departure: {
      flightNumber: "LH211",
      airportCode: "LAX",
      cityCode: "Los Angeles",
      date: "2024-10-12",
      time: "6:00 PM",
      stops: 1,
      stopCity: "Dubai",
      stopDuration: "2h",
      duration: "15h 30m",
    },
    return: {
      flightNumber: "LH212",
      airportCode: "HND",
      cityCode: "Tokyo",
      date: "2024-10-18",
      time: "9:30 AM",
      stops: 0,
      duration: "11h 45m",
    },
    priceRange: "AED 850 - AED 1,200",
    totalDays: 2,
  },
  {
    id: 10,
    airlineLogo: emirates,
    departure: {
      flightNumber: "TG745",
      airportCode: "PEK",
      cityCode: "Beijing",
      date: "2024-11-03",
      time: "7:00 AM",
      stops: 0,
      duration: "10h 30m",
    },
    return: {
      flightNumber: "TG746",
      airportCode: "SYD",
      cityCode: "Sydney",
      date: "2024-11-10",
      time: "11:00 AM",
      stops: 0,
      duration: "13h 15m",
    },
    priceRange: "AED 950 - AED 1,350",
    totalDays: 1,
  },
  {
    id: 11,
    airlineLogo: lufthansa,
    departure: {
      flightNumber: "QF102",
      airportCode: "SYD",
      cityCode: "Sydney",
      date: "2024-12-01",
      time: "5:00 AM",
      stops: 0,
      duration: "15h 45m",
    },
    return: {
      flightNumber: "QF103",
      airportCode: "JFK",
      cityCode: "New York",
      date: "2024-12-08",
      time: "4:00 PM",
      stops: 0,
      duration: "13h 00m",
    },
    priceRange: "AED 1,100 - AED 1,700",
    totalDays: 3,
  },
  {
    id: 12,
    airlineLogo: lufthansa,
    departure: {
      flightNumber: "AF345",
      airportCode: "LHR",
      cityCode: "London",
      date: "2024-11-17",
      time: "10:00 AM",
      stops: 0,
      duration: "11h 15m",
    },
    return: {
      flightNumber: "AF346",
      airportCode: "DXB",
      cityCode: "Dubai",
      date: "2024-11-24",
      time: "2:00 PM",
      stops: 0,
      duration: "7h 30m",
    },
    priceRange: "AED 650 - AED 900",
    totalDays: 2,
  },
  {
    id: 13,
    airlineLogo: emirates,
    departure: {
      flightNumber: "BA789",
      airportCode: "DEL",
      cityCode: "New Delhi",
      date: "2024-10-14",
      time: "9:00 AM",
      stops: 0,
      duration: "11h 45m",
    },
    return: {
      flightNumber: "BA790",
      airportCode: "BOM",
      cityCode: "Mumbai",
      date: "2024-10-21",
      time: "1:00 PM",
      stops: 1,
      stopCity: "Dubai",
      stopDuration: "2h",
      duration: "12h 30m",
    },
    priceRange: "AED 500 - AED 900",
    totalDays: 2,
  },
  {
    id: 14,
    airlineLogo: lufthansa,
    departure: {
      flightNumber: "UA567",
      airportCode: "JFK",
      cityCode: "New York",
      date: "2024-11-10",
      time: "4:00 PM",
      stops: 1,
      stopCity: "Dubai",
      stopDuration: "2h",
      duration: "11h 00m",
    },
    return: {
      flightNumber: "UA568",
      airportCode: "SIN",
      cityCode: "Singapore",
      date: "2024-11-17",
      time: "11:00 AM",
      stops: 0,
      duration: "18h 00m",
    },
    priceRange: "AED 1,100 - AED 1,500",
    totalDays: 3,
  },
  {
    id: 15,
    airlineLogo: lufthansa,
    departure: {
      flightNumber: "EK789",
      airportCode: "DXB",
      cityCode: "Dubai",
      date: "2024-12-10",
      time: "12:00 PM",
      stops: 0,
      duration: "8h 45m",
    },
    return: {
      flightNumber: "EK790",
      airportCode: "LHR",
      cityCode: "London",
      date: "2024-12-18",
      time: "6:00 PM",
      stops: 0,
      duration: "9h 00m",
    },
    priceRange: "AED 900 - AED 1,300",
    totalDays: 2,
  },
  {
    id: 16,
    airlineLogo: emirates,
    departure: {
      flightNumber: "JL567",
      airportCode: "HND",
      cityCode: "Tokyo",
      date: "2024-11-15",
      time: "8:00 AM",
      stops: 0,
      duration: "7h 00m",
    },
    return: {
      flightNumber: "JL568",
      airportCode: "LAX",
      cityCode: "Los Angeles",
      date: "2024-11-22",
      time: "4:00 PM",
      stops: 0,
      duration: "10h 30m",
    },
    priceRange: "AED 850 - AED 1,250",
    totalDays: 2,
  },
  {
    id: 17,
    airlineLogo: lufthansa,
    departure: {
      flightNumber: "BA201",
      airportCode: "LHR",
      cityCode: "London",
      date: "2024-11-25",
      time: "10:30 AM",
      stops: 0,
      duration: "11h 00m",
    },
    return: {
      flightNumber: "BA202",
      airportCode: "SYD",
      cityCode: "Sydney",
      date: "2024-12-02",
      time: "7:00 AM",
      stops: 0,
      duration: "22h 45m",
    },
    priceRange: "AED 1,200 - AED 1,600",
    totalDays: 3,
  },
  {
    id: 18,
    airlineLogo: lufthansa,
    departure: {
      flightNumber: "SQ212",
      airportCode: "SIN",
      cityCode: "Singapore",
      date: "2024-12-08",
      time: "1:00 PM",
      stops: 0,
      duration: "19h 00m",
    },
    return: {
      flightNumber: "SQ213",
      airportCode: "PEK",
      cityCode: "Beijing",
      date: "2024-12-15",
      time: "5:00 PM",
      stops: 0,
      duration: "12h 45m",
    },
    priceRange: "AED 900 - AED 1,200",
    totalDays: 3,
  },
  {
    id: 19,
    airlineLogo: emirates,
    departure: {
      flightNumber: "TG334",
      airportCode: "BKK",
      cityCode: "Bangkok",
      date: "2024-12-05",
      time: "11:00 AM",
      stops: 0,
      duration: "10h 00m",
    },
    return: {
      flightNumber: "TG335",
      airportCode: "JFK",
      cityCode: "New York",
      date: "2024-12-12",
      time: "1:00 PM",
      stops: 0,
      duration: "18h 30m",
    },
    priceRange: "AED 850 - AED 1,150",
    totalDays: 2,
  },
  {
    id: 20,
    airlineLogo: lufthansa,
    departure: {
      flightNumber: "CX908",
      airportCode: "HKG",
      cityCode: "Hong Kong",
      date: "2024-12-14",
      time: "9:00 AM",
      stops: 0,
      duration: "9h 30m",
    },
    return: {
      flightNumber: "CX909",
      airportCode: "DEL",
      cityCode: "New Delhi",
      date: "2024-12-21",
      time: "12:00 PM",
      stops: 0,
      duration: "10h 30m",
    },
    priceRange: "AED 950 - AED 1,250",
    totalDays: 2,
  },
];

export { flightsData };
