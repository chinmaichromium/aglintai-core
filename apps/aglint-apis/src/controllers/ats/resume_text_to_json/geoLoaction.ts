import axios from "axios";

// const GEO_LOCATION_API_KEY = process.env.GEO_LOCATION_API_KEY;
// if (!GEO_LOCATION_API_KEY) {
//   throw new Error("GEO_LOCATION_API_KEY environment variables are required.");
// }
export const getLocation = (address: string) => {
  return axios
    .get<GoogleLocationAPI>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDO-310g2JDNPmN3miVdhXl2gJtsBRYUrI`
    )
    .then(({data}) => {
      try {
        const result = data?.results[0];

        const city =
          result?.address_components.find((component: any) =>
            component.types.includes('locality')
          )?.long_name || null;
        const state =
          result?.address_components.find((component: any) =>
            component.types.includes('administrative_area_level_1')
          )?.long_name || null;
        const country =
          result?.address_components.find((component: any) =>
            component.types.includes('country')
          )?.long_name || null;

        // const city = cityObj ? cityObj.long_name : null;
        // const state = stateObj ? stateObj.long_name : null;
        // const country = countryObj ? countryObj.long_name : null;
        if (result?.geometry?.location.lng && result?.geometry?.location.lat)
          return {
            city,
            state,
            country,
            geolocation: `POINT(${result?.geometry?.location.lng} ${result?.geometry?.location.lat})`,
          };
        throw new Error('No location data');
      } catch (e) {
        throw new Error(`Error in getLocation: ${String(e)}`);
      }
    });
};
export type GoogleLocationAPI = {
  results: {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    partial_match: boolean;
    place_id: string;
    types: string[];
  }[];
  status: string;
};

type AddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

type Geometry = {
  bounds: Bounds;
  location: Location;
  location_type: string;
  viewport: Bounds;
};

type Bounds = {
  northeast: Location;
  southwest: Location;
};

type Location = {
  lat: number;
  lng: number;
};