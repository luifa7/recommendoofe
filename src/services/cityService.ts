import { City, CreateCity } from "@/store/types/types";
import axios, { AxiosResponse } from "axios";

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

export async function createCity(city: CreateCity) {
  const response = await axios
    .post(`${API_URL}/cities`, city)
    .then((response) => response as AxiosResponse)
    .catch(function (error) {
      console.log(error);
    });
  if (!response) {
    return undefined;
  }
  return response;
}

export async function deleteCity(cityDId: string) {
  {
    const response = await axios
      .delete(`${API_URL}/cities/${cityDId}`)
      .then((response) => response as AxiosResponse)
      .catch(function (error) {
        console.log(error);
      });
    if (!response) {
      return undefined;
    }
    return response;
  }
}
