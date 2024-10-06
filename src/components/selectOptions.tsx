"use client";
import React, { useEffect, useState } from "react";
import locIcon from "@/icons/locIcon.png";
import Frame from "@/icons/Frame.png";
import Image from "next/image";
import { CalendarIcon, ChevronDown, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { airports } from "@/data/airports";
import {
  setDepartureDateAc,
  setFromAc,
  setReturnDateAc,
  setToAc,
} from "@/store/flightSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
interface Location {
  name: string | null;
  code: string | null;
  city: string | null;
  country: string | null;
}
interface SelectOptionsProps {
  selectedFromUser: Location;
  selectedToUser: Location;
  departureDateUser: Date | undefined;
  returnDateUser: Date | undefined;
  toggle: () => void;
}

//todo enable reverse airports, and search bug
const SelectOptions = ({
  selectedFromUser,
  selectedToUser,
  departureDateUser,
  returnDateUser,
  toggle,
}: SelectOptionsProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filteredAirports, setFilteredAirports] = useState(airports);
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    departureDateUser
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    returnDateUser
  );

  const [selectedFrom, setSelectedFrom] = useState<Location | undefined>(
    selectedFromUser
  );
  const [selectedTo, setSelectedTo] = useState<Location | undefined>(
    selectedToUser
  );
  const [error, setError] = useState<string | null>(null);
  const handleSearch = () => {
    setFilteredAirports(
      airports.filter(
        (airport) =>
          airport.name.toLowerCase().includes(search.toLowerCase()) ||
          airport.city.toLowerCase().includes(search.toLowerCase()) ||
          airport.code.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  useEffect(() => {
    if (search === "") {
      setFilteredAirports(airports);
    }
  }, [search]);

  const handleAirportSelect = (
    airport: { name: string; code: string; city: string; country: string },
    isDeparture: boolean
  ) => {
    if (isDeparture) {
      setSelectedFrom(airport);
    } else {
      setSelectedTo(airport);
    }
    setSearch("");
    setFilteredAirports(airports);
    if (error) {
      setError(null);
    }
  };

  const handleSubmit = () => {
    if (!departureDate && !returnDate) {
      setError("Please select departure date or return dates");
      return;
    }
    if (!selectedFrom || !selectedTo) {
      setError("Please select both departure and destination airports.");
      return;
    }
    if (selectedFrom === selectedTo) {
      setError("Please select different departure and destination airports.");
    }
    if (departureDate && returnDate && returnDate <= departureDate) {
      setError("Return date must be after departure date.");
      return;
    }
    dispatch(setFromAc(selectedFrom));
    dispatch(setToAc(selectedTo));
    dispatch(setDepartureDateAc(departureDate));
    dispatch(setReturnDateAc(returnDate));
    console.log(departureDate, returnDate, selectedFrom, selectedTo);
    toggle();
    router.push("/flights");
  };
  return (
    <div>
      <div className="mb-4">
        <div className="px-6 bg-[#F5F7FA] w-24 text-center text-sm py-2 rounded-md font-medium">
          Flights
        </div>
      </div>

      <div className="w-full mb-4 flex flex-col sm:flex-row items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center min-w-full sm:min-w-60 py-6 mb-4 sm:mb-0"
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <Image src={locIcon} alt="Location Icon" className="mr-2" />
                  <span className="text-xs text-[#484A4D] max-w-24 truncate">
                    {selectedFrom?.name || "Where from?"}
                  </span>
                </div>
                <ChevronDown className="ml-12 text-[#C9CACC]" />
              </div>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-80 p-2">
            <div>
              <Input
                placeholder="Search airport..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-2 relative"
              />
              <div className="absolute right-4 top-5" onClick={handleSearch}>
                <Search className="size-4" />
              </div>
            </div>
            <div className="max-h-80 overflow-y-scroll">
              {filteredAirports.length > 0 ? (
                filteredAirports.map((airport) => (
                  <DropdownMenuItem
                    key={airport.code}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleAirportSelect(airport, true)}
                  >
                    {airport.name} ({airport.code}) - {airport.city},{" "}
                    {airport.country}
                  </DropdownMenuItem>
                ))
              ) : (
                <div className="p-2 text-gray-500">No airports found</div>
              )}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="bg-[#F5F7FA] p-3 rounded-full mx-4 hidden sm:flex">
          <Image src={Frame} className="font-normal" alt="reverse icon" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center min-w-full sm:min-w-60 py-6 mb-4 sm:mb-0"
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <Image src={locIcon} alt="Location Icon" className="mr-2" />
                  <span className="text-xs text-[#484A4D] max-w-24 truncate">
                    {selectedTo?.name || "Where to?"}
                  </span>
                </div>
                <ChevronDown className="ml-12 text-[#C9CACC]" />
              </div>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-80 p-2">
            <div>
              <Input
                placeholder="Search airport..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-2 relative"
              />
              <div className="absolute right-4 top-5" onClick={handleSearch}>
                <Search className="size-4" />
              </div>
            </div>
            <div className="max-h-80 overflow-y-scroll">
              {filteredAirports.length > 0 ? (
                filteredAirports.map((airport) => (
                  <DropdownMenuItem
                    key={airport.code}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleAirportSelect(airport, false)}
                  >
                    {airport.name} ({airport.code}) - {airport.city},{" "}
                    {airport.country}
                  </DropdownMenuItem>
                ))
              ) : (
                <div className="p-2 text-gray-500">No airports found</div>
              )}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center ml-0 sm:ml-6 flex-col sm:flex-row">
          <div className="mr-4 mb-4 sm:mb-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full sm:w-[180px] justify-start text-left font-normal py-6",
                    !departureDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-[#484A4D]" />
                  {departureDate ? (
                    format(departureDate, "PPP")
                  ) : (
                    <span className="text-xs text-[#484A4D] ">Departure</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={departureDate}
                  onSelect={(date) => {
                    if (date) {
                      setDepartureDate(date);
                      setError(null);
                    } else {
                      setError("Please select a valid return date.");
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="mr-4 mb-4 sm:mb-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full sm:w-[180px] justify-start text-left font-normal py-6",
                    !returnDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-[#484A4D]" />
                  {returnDate ? (
                    format(returnDate, "PPP")
                  ) : (
                    <span className="text-xs text-[#484A4D] ">Return</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={(date) => {
                    if (date) {
                      setReturnDate(date);
                      setError(null);
                    } else {
                      setError("Please select a valid return date.");
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Button
          onClick={handleSubmit}
          className="bg-[#003E39] gap-2 mt-4 px-12 py-5"
        >
          <Search className="size-4" />
          <span className="text-sm font-normal">Search flights</span>
        </Button>
      </div>
      {error && <div className="text-red-400">{error}</div>}
    </div>
  );
};

export default SelectOptions;
