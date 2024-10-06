"use client";
import SelectOptions from "@/components/selectOptions";

//todo : check search bug
interface Location {
  name: string | null;
  code: string | null;
  city: string | null;
  country: string | null;
}

export default function Home() {
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
          selectedFromUser={undefined}
          selectedToUser={undefined}
          departureDateUser={undefined}
          returnDateUser={undefined}
          toggle={() => {}}
        />
      </div>
    </div>
  );
}
