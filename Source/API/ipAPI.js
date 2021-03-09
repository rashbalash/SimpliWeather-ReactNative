export const getCountryCode = () => {
  return fetch(`https://ipapi.co/json`)
    .then((response) => response.json())
    .then((data) => {
      return {
        countryCode: data.country_code,
      };
    });
};
