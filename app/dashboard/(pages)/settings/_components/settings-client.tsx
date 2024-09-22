"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { SettingsForm } from "./settings-form";

export const SettingsClient = () => {
  return (
    <>
      <div className="flex justify-between items-start lg:items-center flex-col lg:flex-row gap-4">
        <div className="space-y-2">
          <h1 className="font-medium text-lg">Personal info</h1>
          <p className="text-sm text-gray-primary">
            Update your photo and personal details here.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button variant="outline">Cancel</Button>
          <Button variant="default">Update</Button>
        </div>
      </div>
      <SettingsForm />
    </>
  );
};
