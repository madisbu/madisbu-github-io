export function getProfileAge(today = new Date()): number {
  const birthdayHasPassed = today.getMonth() > 4 || (today.getMonth() === 4 && today.getDate() >= 1);
  return today.getFullYear() - 1989 - (birthdayHasPassed ? 0 : 1);
}
