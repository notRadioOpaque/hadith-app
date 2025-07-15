type ClassValue = string | undefined | null | boolean;

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
