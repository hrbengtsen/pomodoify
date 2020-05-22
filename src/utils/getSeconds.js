export function getSeconds(timeLeft) {
  return ("0" + (timeLeft % 60)).slice(-2);
}