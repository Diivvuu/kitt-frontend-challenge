"use client";
import { useEffect, useState } from "react";

import { airports } from "@/data/airports";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setFromAc,
  setToAc,
  setDepartureDateAc,
  setReturnDateAc,
} from "@/store/flightSlice";
import SelectOptions from "@/components/selectOptions";

//todo : check search bug
interface Location {
  name: string | null;
  code: string | null;
  city: string | null;
  country: string | null;
}

export default function Home() {
  const router = useRouter();

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
  return (
    <div className="min-h-screen w-full flex flex-col mt-16">
      <div>
        <div className="text-center text-4xl my-8">Good afternoon, Brian</div>
      </div>
      <div
        className="mx-auto max-w-full border-2 rounded-lg flex flex-col px-4 sm:px-10 py-12 relative"
        style={{
          boxShadow: `
        0px 1px 11px 3px #0000000F,
        0px 19px 19.4px 0px #00000005,
        0px -6px 22.6px 0px #FFFFFF
      `,
        }}
      >
        <SelectOptions
          selectedFromUser={selectedFrom}
          selectedToUser={selectedTo}
          departureDateUser={departureDateObj}
          returnDateUser={returnDateObj}
          toggle={() => {}}
        />
      </div>
    </div>
  );
}
