import React from "react";
import { Flight } from "./interfaces";
import Image from "next/image";
import emirates from "@/icons/emirates.png";
import lufthansa from "@/icons/lufthansa.png";
// import plusOneIcon from "@/icons/plus-one-icon.png"; // Import your +1 icon here

interface FlightCardProps {
  flight: Flight;
}

const parseDuration = (duration: string) => {
  const parts = duration.split("h");

  // Handle hours
  const hours = parts[0] ? parseInt(parts[0], 10) : 0;

  // Handle minutes
  const minutes = parts[1] ? parseInt(parts[1], 10) : 0;

  return { hours, minutes };
};

const calculateEndTime = (departureTime: string, duration: string) => {
  const [time, modifier] = departureTime.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours < 12) {
    hours += 12; // Convert PM hour to 24-hour format
  } else if (modifier === "AM" && hours === 12) {
    hours = 0; // Midnight case
  }

  const { hours: durationHours, minutes: durationMinutes } =
    parseDuration(duration);

  // Calculate total time in minutes
  const totalMinutes =
    hours * 60 + minutes + (durationHours * 60 + durationMinutes);

  // Convert back to hours and minutes
  const endHours = Math.floor(totalMinutes / 60);
  const endMinutes = totalMinutes % 60;

  // Determine if end time is on the next day
  const isNextDay = endHours >= 24;

  // Format back to 12-hour format
  const endModifier = endHours % 24 >= 12 ? "PM" : "AM";
  const formattedEndHours = endHours % 12 === 0 ? 12 : endHours % 12; // 12-hour format

  return {
    formattedTime: `${formattedEndHours}:${String(endMinutes).padStart(
      2,
      "0"
    )} ${endModifier}`,
    isNextDay,
  };
};

const FlightsCard = ({ flight }: FlightCardProps) => {
  const { formattedTime: endDepartureTime, isNextDay: isNextDayDeparture } =
    calculateEndTime(flight.departure.time, flight.departure.duration);

  const { formattedTime: endReturnTime, isNextDay: isNextDayReturn } =
    calculateEndTime(flight.return.time, flight.return.duration);

  return (
    <div className="flex flex-col gap-y-4 items-start justify-center border-2 p-2 rounded-lg">
      <div className="flex items-start">
        <Image
          src={flight.airlineLogo}
          height={50}
          width={50}
          alt="flight logo"
        />
        <div className="flex flex-col justify-start items-start gap-1 ml-4">
          <div className="flex items-center text-[#787B80] text-sm">
            {flight.airlineLogo === emirates ? (
              <p>Emirates</p>
            ) : flight.airlineLogo === lufthansa ? (
              <p>Lufthansa</p>
            ) : (
              <p>Other airline</p>
            )}
            • {flight.departure.flightNumber}
          </div>
          <div className="text-[#001F1D] flex items-center text-lg">
            <span>{flight.departure.time}</span> -{" "}
            <span>{endDepartureTime}</span>
            {isNextDayDeparture && +1}
          </div>
        </div>
      </div>
      <div className="flex items-start">
        <Image
          src={flight.airlineLogo} // Ensure return flight logo is provided
          height={50}
          width={50}
          alt="flight logo"
        />
        <div className="flex flex-col justify-start items-start gap-1 ml-4">
          <div className="flex items-center text-[#787B80]">
            {flight.airlineLogo === emirates ? (
              <p>Emirates</p>
            ) : flight.airlineLogo === lufthansa ? (
              <p>Lufthansa</p>
            ) : (
              <p>Other airline</p>
            )}
            • {flight.return.flightNumber}
          </div>
          <div className="text-[#001F1D] flex items-center text-lg">
            <span>{flight.return.time}</span> - <span>{endReturnTime}</span>
            {isNextDayReturn && +1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsCard;
