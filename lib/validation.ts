// Shared form validation — used by every lead-capture form on the site.
// Phone accepts international formats since clients now come from India, UAE, UK,
// USA, Singapore, Australia, Canada, Germany, Saudi Arabia, Qatar and South Africa,
// not just Indian 10-digit numbers.

export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  if (!trimmed || trimmed.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

/** Strip anything that isn't a digit, +, -, (, ), or space — used on phone field onChange so letters/symbols can't be typed at all, not just rejected after the fact. */
export function sanitizePhoneInput(value: string): string {
  return value.replace(/[^\d+\-() ]/g, "");
}

/** Strip everything except digits and a leading + — a display phone like "+91 9967470207" has a space that breaks tel: links on many phones; the href needs raw digits, the visible text can stay formatted. */
export function telHref(phone: string): string {
  return "tel:" + phone.replace(/[^\d+]/g, "");
}

export function isValidPhone(phone: string): boolean {
  const trimmed = phone.trim();
  if (!trimmed) return false;
  const digitsOnly = trimmed.replace(/[\s\-().]/g, "");
  return /^\+?\d{7,15}$/.test(digitsOnly);
}

export function isValidName(name: string): boolean {
  return name.trim().length >= 2;
}

export function isValidUrl(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) return false;
  try {
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    const u = new URL(withProtocol);
    return u.hostname.includes(".");
  } catch {
    return false;
  }
}

export function nameError(name: string, required = true): string | null {
  const trimmed = name.trim();
  if (!trimmed) return required ? "Name is required" : null;
  if (!isValidName(trimmed)) return "Enter your full name";
  return null;
}

export function emailError(email: string, required = true): string | null {
  const trimmed = email.trim();
  if (!trimmed) return required ? "Email is required" : null;
  if (!isValidEmail(trimmed)) return "Enter a valid email address (e.g. you@company.com)";
  return null;
}

export function phoneError(phone: string, required = true): string | null {
  const trimmed = phone.trim();
  if (!trimmed) return required ? "Phone number is required" : null;
  if (!isValidPhone(trimmed)) return "Enter a valid phone number, digits only (7–15 digits, + for country code)";
  return null;
}

export function urlError(url: string, required = true): string | null {
  const trimmed = url.trim();
  if (!trimmed) return required ? "Website URL is required" : null;
  if (!isValidUrl(trimmed)) return "Enter a valid website URL (e.g. yourwebsite.com)";
  return null;
}

export function requiredError(value: string, label: string): string | null {
  return value.trim() ? null : `${label} is required`;
}
