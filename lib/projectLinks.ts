export function hasPublicGithubUrl(url?: string) {
  if (!url) {
    return false;
  }

  const normalized = url.trim().toLowerCase();

  if (!normalized || normalized === "#") {
    return false;
  }

  return (
    normalized.startsWith("https://github.com/") &&
    !normalized.includes("your-username") &&
    !normalized.includes("placeholder") &&
    !normalized.includes("example")
  );
}
