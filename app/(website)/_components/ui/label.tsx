import * as React from "react";

interface LabelProps {
  label: string;
}

export const Label = ({ label }: LabelProps) => {
  return <span className="text-[#03055E] font-semibold text-sm">{label}</span>;
};
