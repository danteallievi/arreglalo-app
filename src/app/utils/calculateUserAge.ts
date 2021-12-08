export const calculateUserAge = (yearOfBirth: Date) => {
  const today = new Date();
  const birthDate = new Date(yearOfBirth);
  const month = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
};
