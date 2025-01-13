"use client";

import { useGetProxyLocationsQuery } from "@/services/locations/hooks";
import { formatTime } from "@/utils/formatters";
import React, { createContext, useContext, ReactNode } from "react";

interface LocationsContextType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  locations: any[];
}

const LocationsContext = createContext<LocationsContextType | undefined>(
  undefined
);

export const LocationsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const locations = useGetProxyLocationsQuery();

  const isLoading = locations.isLoading;
  const isError = locations.isError;
  const isSuccess = locations.isSuccess;

  const formattedLocations = isSuccess
    ? locations.data.data.map((location) => ({
        ...location,
        rotation_time: formatTime(location.rotation_time),
      }))
    : [];

  return (
    <LocationsContext.Provider
      value={{
        isLoading,
        isError,
        isSuccess,
        locations: formattedLocations,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(LocationsContext);
  if (!context) {
    throw new Error("useData must be used within a LocationsProvider");
  }
  return context;
};
