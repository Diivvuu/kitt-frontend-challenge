import { StaticImageData } from "next/image";

export interface Flight {
  id: number;
  airlineLogo: StaticImageData;
  departure: {
    flightNumber: string;
    airportCode: string;
    cityCode: string;
    date: string;
    time: string;
    stops: number;
    duration: string;
  };
  return: {
    flightNumber: string;
    airportCode: string;
    cityCode: string;
    date: string;
    time: string;
    stops: number;
    duration: string;
  };
  priceRange: string;
  totalDays: number;
}
