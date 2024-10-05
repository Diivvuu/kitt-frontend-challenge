"use client";
import SelectOptions from "@/components/selectOptions";
import React from "react";
import { useSelector } from "react-redux";
import { useToggle } from "react-use";
interface Location {
  name: string | null;
  code: string | null;
  city: string | null;
  country: string | null;
}
const Page: React.FC = () => {
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

  const [on, toggle] = useToggle(false);

  const handleSelectOptionsClick = (event: React.MouseEvent) => {
    // Stop event propagation to prevent toggling off
    event.stopPropagation();
  };

  return (
    <div>
      <div onClick={toggle}>
        <div className="mx-auto max-w-full border-2 rounded-lg flex flex-col px-[25rem] py-12 relative">
          {on ? (
            <div onClick={handleSelectOptionsClick}>
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
                <div className="flex items-center justify-center rounded-xl border-2 max-w-[80%]">
                  <div className="font-medium w-1/3 overflow-hidden flex items-center">
                    {selectedFrom?.code}
                    <span className="text-gray-500 font-semibold text-md ml-1 block truncate whitespace-nowrap">
                      {selectedFrom?.name}
                    </span>
                  </div>
                  <div className="font-medium w-1/3 overflow-hidden flex items-center">
                    {selectedTo?.code}
                    <span className="text-gray-500 font-semibold text-md ml-1 block truncate whitespace-nowrap">
                      {selectedTo?.name}
                    </span>
                  </div>
                  <div className="font-medium w-1/3 overflow-hidden flex items-center">
                    {/* Optional third div for more content */}
                    <span className="text-gray-500 font-semibold text-md ml-1 block truncate whitespace-nowrap">
                      {/* Placeholder for additional content */}
                    </span>
                  </div>
                </div>
                <div>cross</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
