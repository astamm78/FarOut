export const apiString = (date: Date): string => (
  date.toISOString().split('T')[0]
)

export const displayString = (date: Date): string => {
  var options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString("en-US", options);
}