// Simple client-side gate. Not real auth — credentials hardcoded by request.
// WARNING: this is visible in client bundle. Treat /admindev as a soft gate only.
const ADMIN_EMAIL = "prototipospremium@gmail.com";
const ADMIN_PASS = "Amo172526";
const AUTH_KEY = "msj:admin_auth";

export function loginAdmin(email: string, password: string): boolean {
  if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASS) {
    sessionStorage.setItem(AUTH_KEY, "1");
    return true;
  }
  return false;
}
export function logoutAdmin() {
  sessionStorage.removeItem(AUTH_KEY);
}
export function isAdminAuthed(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(AUTH_KEY) === "1";
}
