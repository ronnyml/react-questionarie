export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  const allowedCharsRegex = /^\+?[\d\s().-]+$/;
  const digitCount = phoneNumber.replace(/\D/g, "").length;
  return allowedCharsRegex.test(phoneNumber) && digitCount >= 7 && digitCount <= 15;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
