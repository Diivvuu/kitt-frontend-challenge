import React from "react";
import { Flight } from "./interfaces";
import Image from "next/image";
import emirates from "@/icons/emirates.png";
import lufthansa from "@/icons/lufthansa.png";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short", // Tue
      day: "2-digit", // 08
      month: "short", // Oct
    };

    const parts = date.toLocaleDateString("en-US", options).split(", ");
    return `${parts[0]} ${parts[1]}`; // Manually join without a comma
  };

  const departureDate = new Date(flight.departure.date);

  if (isNextDayDeparture) {
    departureDate.setDate(departureDate.getDate() + 1); // Add one day
  }
  const returnDate = new Date(flight.return.date);

  if (isNextDayReturn) {
    returnDate.setDate(returnDate.getDate() + 1); // Add one day
  }

  // Format the date after potentially modifying it
  const ifNextDepartureDate = formatDate(departureDate);
  const ifNextReturnDate = formatDate(returnDate);
  return (
    <Sheet>
      <div className="flex items-stretch w-full mx-auto">
        <div className="flex flex-col justify-between border-2 py-3 px-6 rounded-l-lg flex-grow">
          {/* Departure Information */}
          <div className="flex flex-col mb-2">
            <div className="text-sm text-[#787B80] font-semibold">
              {formatDate(flight.departure.date)}
            </div>
            <div className="flex items-start mt-2 ml-4">
              <div className="min-w-[50px]">
                <Image
                  src={flight.airlineLogo}
                  height={50}
                  width={50}
                  alt="flight logo"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-1 ml-4 min-w-40">
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
                  {isNextDayDeparture && (
                    <div className="text-xs font-medium text-[#962828F9] absolute -right-11 top-0">
                      +1 day
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center ml-[17rem] min-w-40">
                <div className="text-[#787B80] text-sm font-medium">
                  <span>{flight.departure.airportCode}</span> -{" "}
                  <span>{flight.return.airportCode}</span>
                </div>
                <div className="text-xl">{flight.departure.duration}</div>
              </div>
              <div className="ml-16 ">
                <div className="flex flex-col justify-center items-start">
                  <div className="text-sm text-[#787B80] font-medium">
                    {flight?.departure?.stops !== undefined &&
                    flight?.departure?.stops !== 0
                      ? `${flight?.departure?.stopDuration ?? ""} in ${
                          flight?.departure?.stopCity ?? ""
                        } `
                      : "\u00A0"}
                  </div>
                  <div className="text-lg">
                    {flight.departure.stops !== 0
                      ? flight.departure.stops + " stop"
                      : "Non stop"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Return Information */}
          <div className="flex items-start mt-2 ml-4">
            <div className="min-w-[50px]">
              <Image
                src={flight.airlineLogo} // Ensure return flight logo is provided
                height={50}
                width={50}
                alt="flight logo"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-1 ml-4 min-w-40">
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
              <div className="text-[#001F1D] flex items-center text-lg relative">
                <span>{flight.return.time}</span> - <span>{endReturnTime}</span>
                {isNextDayReturn && (
                  <div className="text-xs font-medium text-[#962828F9] absolute -right-11 top-0">
                    +1 day
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ml-[17rem] min-w-40">
              <div className="text-[#787B80] text-sm font-medium">
                <span>{flight.return.airportCode}</span> -{" "}
                <span>{flight.departure.airportCode}</span>
              </div>
              <div className="text-xl">{flight.return.duration}</div>
            </div>
            <div className="ml-16">
              <div className="flex flex-col justify-center items-start">
                <div className="text-sm text-[#787B80] font-medium">
                  {flight?.return?.stops !== undefined &&
                  flight?.return?.stops !== 0
                    ? `${flight?.return?.stopDuration ?? ""} in ${
                        flight?.return?.stopCity ?? ""
                      } `
                    : "\u00A0"}
                </div>
                <div className="text-lg">
                  {flight.return.stops !== 0
                    ? flight.return.stops + " stop"
                    : "Non stop"}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-60  border-2 border-l-0 pt-20 pb-4 rounded-r-lg flex items-center justify-center min-h-full">
          <div className="flex flex-col justify-between items-start">
            <div className="text-xs">from</div>
            <div className="text-xl"> {flight.priceRange}</div>
            <div className="w-full  ">
              <SheetTrigger asChild>
                <Button
                  onClick={() => {}}
                  className="bg-[#003E39] gap-2 mt-4 px-20 py-5 "
                >
                  <span className="text-base font-normal">Select</span>
                </Button>
              </SheetTrigger>
            </div>
          </div>
        </div>
        <SheetContent className="min-w-6xl">
          <SheetHeader>
            <SheetClose>
              <div className="w-10 p-2 bg-[#e0e3e3] rounded-full">
                <ArrowLeft className="size-6" />
              </div>
            </SheetClose>
            <SheetTitle>
              <div className="my-6 text-xl font-semibold">Flight Details</div>
            </SheetTitle>
            <div className="w-full h-[1px] border-1  bg-[#E6E8EB] border-black" />

            <ol className="relative border-dashed border-s border-black  py-12">
              <div className="border-s border-black">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-black"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {formatDate(flight.departure.date)} •{" "}
                    {flight.departure.time}
                  </time>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {flight.departure.airportCode}•{flight.departure.cityCode}
                    </div>
                    <div className="flex items-center justify-center gap-x-2">
                      <Image alt="airline logo" src={flight.airlineLogo} />
                      <div className="text-xs text-[#484A4D] text-nowrap">
                        {flight.airlineLogo === emirates ? (
                          <p>
                            Emirates Airlines • {flight.departure.flightNumber}
                          </p>
                        ) : flight.airlineLogo === lufthansa ? (
                          <p>
                            Lufthansa Airlines • {flight.departure.flightNumber}
                          </p>
                        ) : (
                          <p>Other airline • {flight.departure.flightNumber}</p>
                        )}
                        Flight Time {flight.departure.duration}
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="border-s border-black">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-black"></div>
                  <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {isNextDayDeparture
                      ? ifNextDepartureDate
                      : formatDate(flight.departure.date)}{" "}
                    • {endDepartureTime}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {flight.return.airportCode}•{flight.return.cityCode}
                    </div>
                  </div>
                </li>
              </div>
              <div className="border-s border-black">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-black"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {formatDate(flight.return.date)} • {flight.return.time}
                  </time>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {flight.return.airportCode}•{flight.return.cityCode}
                    </div>
                    <div className="flex items-center justify-center gap-x-2">
                      <Image alt="airline logo" src={flight.airlineLogo} />
                      <div className="text-xs text-[#484A4D] text-nowrap">
                        {flight.airlineLogo === emirates ? (
                          <p>
                            Emirates Airlines • {flight.return.flightNumber}
                          </p>
                        ) : flight.airlineLogo === lufthansa ? (
                          <p>
                            Lufthansa Airlines • {flight.return.flightNumber}
                          </p>
                        ) : (
                          <p>Other airline • {flight.return.flightNumber}</p>
                        )}
                        Flight Time {flight.return.duration}
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="border-s border-black">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-black"></div>
                  <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {isNextDayReturn
                      ? ifNextReturnDate
                      : formatDate(flight.return.date)}{" "}
                    • {endReturnTime}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {flight.return.airportCode}•{flight.return.cityCode}
                    </div>
                  </div>
                </li>
              </div>
            </ol>
          </SheetHeader>
        </SheetContent>
      </div>
    </Sheet>
  );
};

export default FlightsCard;
