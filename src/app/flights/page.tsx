"use client";
import FlightHeader from "./flight-header";
import FlightPanel from "./flight-panel";
import { useSelector } from "react-redux";
import Shimmer from "./flight-panel-shimmer";

const page = () => {
  const selectedFrom = useSelector(
    (state: { flight: { selectedFrom: Location } }) => state.flight.selectedFrom
  );
  const selectedTo = useSelector(
    (state: { flight: { selectedTo: Location } }) => state.flight.selectedTo
  );
  const departureDate = useSelector(
    (state: { flight: { departureDate: string } }) => state.flight.departureDate
  );
  const returnDate = useSelector(
    (state: { flight: { returnDate: string } }) => state.flight.returnDate
  );

  return (
    <div>
      <FlightHeader />
      {selectedFrom && selectedTo && (departureDate || returnDate) ? (
        <FlightPanel />
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default page;
