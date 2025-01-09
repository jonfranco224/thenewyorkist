export function formatReadableDate(dateString: string): string {
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
}
