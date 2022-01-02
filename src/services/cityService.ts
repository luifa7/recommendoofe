import { City } from "@/store/types/types";
import axios from "axios";

export const API_URL = "http://localhost:5003";

export async function getCityByDId(cityDId: string): Promise<undefined | City> {
  {
    const city = await axios
      .get(`${API_URL}/cities/${cityDId}`)
      .then((response) => response.data as City)
      .catch((error) => {
        console.log(error);
      });
    if (!city) {
      return undefined;
    }
    return city;
  }
}

export async function getCitiesByUserDId(
  userDId: string
): Promise<Array<City>> {
  {
    const cities = await axios
      .get(`${API_URL}/users/${userDId}/cities`)
      .then((response) => response.data as Array<City>)
      .catch((error) => {
        console.log(error);
      });
    if (!cities) {
      return [];
    }
    return cities;
  }
}
