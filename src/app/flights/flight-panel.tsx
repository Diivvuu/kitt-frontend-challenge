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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightPanel;
