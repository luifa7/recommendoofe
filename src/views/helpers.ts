import { useRoute } from "vue-router";

export function getUserDIdFromRoute(): string {
  const route = useRoute();
  const userDId: string | string[] = route.params.userdid;
  if (typeof userDId !== "string") {
    return userDId[0];
  }
  return userDId;
}

export function getCityDIdFromRoute(): string {
  const route = useRoute();
  const cityDId: string | string[] = route.params.citydid;
  if (typeof cityDId !== "string") {
    return cityDId[0];
  }
  return cityDId;
}

export function getRecommendationDIdFromRoute(): string {
  const route = useRoute();
  const recommendationDId: string | string[] = route.params.recommendationdid;
  if (typeof recommendationDId !== "string") {
    return recommendationDId[0];
  }
  return recommendationDId;
}

export function getDateFromDatetime(dateOnDatetime: number): string {
  const dateAsDatetime = new Date(dateOnDatetime);
  const year = dateAsDatetime.getFullYear();
  const month = dateAsDatetime.getMonth();
  const day = dateAsDatetime.getDate();
  return `${day}/${month}/${year}`;
}
