export function getMinutes(timeLeft) {
  if (timeLeft === 3600) {
    return "60";
  }
  return ("0" + Math.floor((timeLeft % 3600) / 60)).slice(-2);
}