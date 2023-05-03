export function isExternalLink(link: string) {
  return (
    !link.startsWith("/") &&
    !link.startsWith(globalThis?.window?.location.hostname)
  );
}
