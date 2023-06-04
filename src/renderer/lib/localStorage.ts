export const saveToLocalStorage = (key: string, data: any) => {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = <T>(key: string): T | null => {
  if (typeof window === 'undefined') return null;

  const data = window.localStorage.getItem(key);

  if (!data) return null;

  return JSON.parse(data) as T;
};
