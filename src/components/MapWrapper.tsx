"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});

interface MapWrapperProps {
  ciudad: string;
  zona?: string | null;
}

export default function MapWrapper({ ciudad, zona }: MapWrapperProps) {
  return <DynamicMap ciudad={ciudad} zona={zona} />;
}
