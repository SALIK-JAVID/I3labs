/** Shared contact-form schema so the client and the API route validate identically. */
export type ContactInput = {
  name: string;
  email: string;
  phone?: string;
  institution: string;
  interest: string;
  message: string;
};

export const interests = ["New STEM Lab", "Lab Augmentation", "3IPP Program", "Curriculum Only", "Teacher Training", "Other"];

export function validateContact(data: Partial<ContactInput>) {
  const errors: Partial<Record<keyof ContactInput, string>> = {};
  if (!data.name || data.name.trim().length < 2) errors.name = "Please tell us your name.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address.";
  if (data.phone && !/^[+\d][\d\s-]{6,}$/.test(data.phone)) errors.phone = "Enter a valid phone number.";
  if (!data.institution || data.institution.trim().length < 2) errors.institution = "Which institution are you from?";
  if (!data.interest || !interests.includes(data.interest)) errors.interest = "Pick what you're interested in.";
  if (!data.message || data.message.trim().length < 10) errors.message = "A few more words, please (10+ characters).";
  return errors;
}
