export function useImageGetter() {
  const getImageUrl = (name) => {
    return new URL(name, import.meta.url).href;
  };

  return {
    getImageUrl,
  };
}
