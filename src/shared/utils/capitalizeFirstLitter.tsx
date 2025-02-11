export function capitalizeFirstLetter(val: string) {
  const lowerCase = String(val).toLowerCase();
  return String(lowerCase).charAt(0).toUpperCase() + lowerCase.slice(1);
}
