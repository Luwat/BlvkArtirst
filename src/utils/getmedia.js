export const getMediaFiles = async () => {
    const response = await fetch('/media-files.json'); // Fetches a generated JSON file with all media
    const files = await response.json();
    return files;
  };
  