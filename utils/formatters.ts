interface FormattedItem {
  value: string;
  label: string;
}

/**
 * Function to format an array of strings into value-label pairs.
 * @param data - Array of strings to be formatted
 * @returns Array of formatted objects with value and label
 */
export const formatStringArray = (data: string[] = []): FormattedItem[] => {
  return data.map((item) => ({
    value: item,
    label: item,
  }));
};

/**
 * Function to format an array of objects into value-label pairs.
 * @param data - Array of objects to be formatted
 * @param valueKey - Key to extract the value (converted to string)
 * @param labelKey - Key to extract the label
 * @returns Array of formatted objects with value and label
 */
export const formatObjectArray = <T>(
  data: T[] = [],
  valueKey: keyof T,
  labelKey: keyof T
): FormattedItem[] => {
  return data.map((item) => ({
    value: item[valueKey]?.toString() || "",
    label: item[labelKey] as string,
  }));
};

/**
 * Function to format a time value in minutes into hours and minutes.
 * - If the time is 60 minutes or more, it returns hours and minutes.
 * - If the time is less than 60 minutes, it returns only minutes.
 *
 * @param minutes - Time in minutes to be formatted.
 * @returns Formatted time string.
 */
export const formatTime = (minutes: number): string => {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return remainingMinutes > 0
      ? `${hours} hour ${remainingMinutes} min`
      : `${hours} hour${hours > 1 ? "s" : ""}`;
  }

  return `${minutes} min`;
};
