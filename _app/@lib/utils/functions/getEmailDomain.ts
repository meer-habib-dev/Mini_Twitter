export function getEmailDomain(email: string): string {
  const atIndex = email?.indexOf('@');
  if (atIndex === -1) {
    return '@notFound';
  }
  const domain = email?.substring(atIndex);
  return domain?.length <= 15 ? domain : domain?.substring(0, 15);
}
