const loadedUrl = new URL(window.location.href);
function getFromLoadedUrlState(property, defaultValue = "") {
  if ("URLSearchParams" in window) {
    return loadedUrl.searchParams.get(property) || defaultValue;
  }
  return defaultValue;
}

export default getFromLoadedUrlState;
