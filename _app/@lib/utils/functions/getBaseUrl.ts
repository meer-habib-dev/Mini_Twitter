export const getBaseUrl = () => {
  let baseUrl = 'https://missingdata.pythonanywhere.com';

  // Check if the app is running in debug mode
  if (__DEV__) {
    baseUrl = 'https://missingdata.pythonanywhere.com';
  } else {
    baseUrl = 'https://missingdata.pythonanywhere.com';
  }

  return baseUrl;
};
