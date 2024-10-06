"use client";
import SelectOptions from "@/components/selectOptions";
import { Search } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useToggle } from "react-use";
import cross from "@/icons/cross.png";
import Image from "next/image";
interface Location {
  name: string | null;
  code: string | null;
  city: string | null;
  country: string | null;
}
const FlightHeader: React.FC = () => {
  const [on, toggle] = useToggle(false);

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

  const departureDateObj = departureDate ? new Date(departureDate) : undefined;
  const returnDateObj = returnDate ? new Date(returnDate) : undefined;
  const formattedDepartureDate = departureDateObj
    ? departureDateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : "-";

  const formattedReturnDate = returnDateObj
    ? returnDateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : "-";

  // Combine the departure and return date in range format
  const dateRange =
    formattedDepartureDate && formattedReturnDate
      ? `${formattedDepartureDate} - ${formattedReturnDate}`
      : "Dates not selected";

  const handleSelectOptionsClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div>
      <div onClick={toggle}>
        <div className="mx-auto lg:max-w-full border-2 rounded-lg flex flex-col px-4 sm:px-80 py-10">
          {on ? (
            <div onClick={handleSelectOptionsClick} className="">
              <SelectOptions
                selectedFromUser={selectedFrom}
                selectedToUser={selectedTo}
                departureDateUser={departureDateObj}
                returnDateUser={returnDateObj}
                toggle={toggle}
              />
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-center gap-x-4 rounded-full py-2 border-2 max-w-[60%]">
                  <div className="font-semibold text-[#001F1D] w-1/3 overflow-hidden flex  justify-center  items-center pl-3">
                    {selectedFrom?.code}
                    <span className="text-[#787B80] font-medium text-md ml-1 truncate whitespace-nowrap">
                      {selectedFrom?.name}
                    </span>
                    <span className="text-[#E6E8EB] px-1">|</span>
                  </div>
                  <div className="font-semibold text-[#001F1D] w-1/3 overflow-hidden flex justify-center items-center">
                    {selectedTo?.code}
                    <span className="text-[#787B80] font-medium text-md ml-1  truncate whitespace-nowrap">
                      {selectedTo?.name}
                    </span>
                    <span className="text-[#E6E8EB] px-1">|</span>
                  </div>
                  <div className="font-medium text-[#001F1D] max-w-4/12 overflow-hidden flex items-center">
                    <span className="font-semibold text-md ml-1  truncate whitespace-nowrap">
                      {dateRange}
                    </span>
                  </div>
                  <div className="max-w-1/12 overflow-hidden flex items-center">
                    <span className="bg-[#E5EBEB] p-2 rounded-full">
                      <Search className="size-5" />
                    </span>
                  </div>
                </div>
                <div className="p-2 rounded-full border-2">
                  <Image src={cross} alt="cross icon" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightHeader;
