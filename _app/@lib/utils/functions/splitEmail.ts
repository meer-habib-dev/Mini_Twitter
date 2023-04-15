export function splitEmail(email: string) {
  const atIndex = email.indexOf('@');
  const after = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  return [after, domain];
}
