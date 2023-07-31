export const isValidPhoneNumber = (phoneNumber: string) => {
  return /^\d{10}$/.test(phoneNumber);
};
