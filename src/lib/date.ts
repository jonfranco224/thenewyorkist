export const formatReadableDate = (dateString: string): string => {
  // Create a Date object from the input string
  const date = new Date(dateString);

  // Validate if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string format. Expected 'YYYY-MM-DD'.");
  }

  // Define options for formatting
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Use Intl.DateTimeFormat to format the date
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const areDatesOneDayApart = (date1: number, date2: number): boolean => {
  // Get the difference in time (milliseconds) between the two dates
  const diffInMilliseconds = Math.abs(date1 - date2);

  // Convert the difference to days
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  // Check if the difference in days is larger than 1
  return diffInDays >= 1;
};
