export const studentToken = 'studentToken';
export const studentData = 'studentData';

export const getLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
};

export const setLocalStorage = (key, value, stringify = false) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, stringify ? JSON.stringify(value) : value);
  }
};

export const removeLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};
