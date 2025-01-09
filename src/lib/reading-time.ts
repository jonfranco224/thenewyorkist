export function estimateReadingTime(text: string): string {
  // Split the text into words
  const words = text.split(/\s+/).filter((word) => word.length > 0);

  // Calculate the total word count
  const wordCount = words.length;

  // Average reading speed: 200 words per minute
  const wordsPerMinute = 200;

  // Estimate reading time in minutes
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  // Return the estimated reading time as a human-readable string
  if (readingTimeMinutes === 1) {
    return "1 minute";
  } else {
    return `${readingTimeMinutes} minute`;
  }
}
