console.log(navigator);
let APIKEY = apikey;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (error) => {
      console.log(error.message);
      const language = navigator.language;
      console.log(language);
      request(language);
    }
  );
} else {
  console.log("геолокація не підтримується");
}

async function request(locale, coords) {
  const localeConst = locale ? `locale=${locale}` : "";
  const coordsConst = coords ? `latlong=${coords}` : "";

  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?${
        localeConst || coordsConst
      }&apikey=${APIKEY}`
    );
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
