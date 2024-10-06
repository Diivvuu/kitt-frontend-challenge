"use client";

import { flightsData } from "@/app/flights/flights"; // Correct path to the flight data
import Image from "next/image";
import FlightsCard from "./flight-card";

const FlightPanel = () => {
  return (
    <div className="max-w-6xl mx-auto my-6">
      <div className="flex flex-col">
        <div className="text-[#787B80] font-medium text-lg">
          Showing 20 of 20 results
        </div>
        <div>
          <div className="flex flex-col gap-y-4">
            {flightsData.map((flight) => (
              <FlightsCard key={flight.id} flight={flight} />
              // <div key={flight.id} className="flight-card">
              //   <Image
              //     src={flight.airlineLogo}
              //     height={20}
              //     width={20}
              //     alt={`Logo of ${flight.departure.airportCode}`}
              //     className="airline-logo"
              //   />
              //   <div className="flight-info">
              //     <h3>{`Flight Number: ${flight.departure.flightNumber}`}</h3>
              //     <p>{`From: ${flight.departure.cityCode} (${flight.departure.airportCode})`}</p>
              //     <p>{`Departure: ${flight.departure.date}, ${flight.departure.time}`}</p>
              //     <p>{`Stops: ${flight.departure.stops}`}</p>
              //     <p>{`Duration: ${flight.departure.duration}`}</p>
              //     <p>{`Total Days: ${flight.totalDays}`}</p>
              //     <p>{`Price Range: ${flight.priceRange}`}</p>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightPanel;
