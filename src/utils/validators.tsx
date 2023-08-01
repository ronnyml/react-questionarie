export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
  return phoneNumberRegex.test(phoneNumber);
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
