import { Recommendation } from "@/store/types/types";
import axios from "axios";

export const API_URL = "http://localhost:5003";

export async function getRecommendationByDId(
  recommendationDId: string
): Promise<undefined | Recommendation> {
  {
    const recommendation = await axios
      .get(`${API_URL}/recommendations/${recommendationDId}`)
      .then((response) => response.data as Recommendation)
      .catch((error) => {
        console.log(error);
      });
    if (!recommendation) {
      return undefined;
    }
    return recommendation;
  }
}

export async function getRecommendationsByCityDId(
  cityDId: string
): Promise<Array<Recommendation>> {
  {
    const recommendations = await axios
      .get(`${API_URL}/cities/${cityDId}/recommendations`)
      .then((response) => response.data as Array<Recommendation>)
      .catch((error) => {
        console.log(error);
      });
    if (!recommendations) {
      return [];
    }
    return recommendations;
  }
}
