import router from "@/router";
import { City, Recommendation, User } from "@/store/types/types";
import { testCities, testRecommendations, testUsers } from "@/views/testdata";
import { useStore } from "vuex";

function getUserByDId(userDId: string): User | undefined {
  return testUsers.find((user: User) => user.dId === userDId);
}

function getUserByUsername(userName: string): User | undefined {
  return testUsers.find((user: User) => user.userName === userName);
}

function getFriends(user: User | undefined): User[] {
  const friends = new Array<User>();
  if (user) {
    user.friends.forEach((userId) => {
      const friend = getUserByDId(userId);
      if (friend) {
        friends.push(friend);
      }
    });
  }
  return friends;
}

function getCitiyByDId(cityDId: string): City | undefined {
  return testCities.find((city: City) => city.dId === cityDId);
}

function getCitiyByNameAndUserDId(
  name: string,
  userDId: string
): City | undefined {
  return testCities.find(
    (city: City) => city.name === name && city.userDId === userDId
  );
}

function getCitiesPlannedForUserDId(userDId: string): Array<City> {
  return testCities.filter(
    (city: City) => city.userDId === userDId && !city.visited
  );
}

function getCitiesVisitedForUserDId(userDId: string): Array<City> {
  return testCities.filter(
    (city: City) => city.userDId === userDId && city.visited
  );
}

function createCity(city: City): boolean {
  if (getCitiyByNameAndUserDId(city.name, city.userDId)) {
    return false;
  }
  testCities.push(city);
  return true;
}

function getRecommendationByDId(
  recommendationDId: string
): Recommendation | undefined {
  return testRecommendations.find(
    (recommendation: Recommendation) => recommendation.dId === recommendationDId
  );
}

function getRecommendationsForUserDIdInCityDId(
  userDId: string,
  cityDId: string | string[]
): Array<Recommendation> {
  if (typeof cityDId !== "string") {
    cityDId = cityDId[0];
  }
  return testRecommendations.filter(
    (recommendation: Recommendation) =>
      recommendation.toUserDId === userDId && recommendation.cityDId === cityDId
  );
}

function createRecommendation(recommendation: Recommendation): boolean {
  testRecommendations.push(recommendation);
  return true;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function allowOrRedirectToHome() {
  const store = useStore();
  const actualUser = store.getters.getLoggedUser;
  if (!actualUser) {
    router.push({
      name: "Home",
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function allowOrRedirectToProfile() {
  const store = useStore();
  const actualUser = store.getters.getLoggedUser;
  if (actualUser) {
    router.push({
      name: "UserPublicProfile",
      params: { userdid: actualUser.dId },
    });
  }
}

export {
  getUserByDId,
  getFriends,
  getUserByUsername,
  allowOrRedirectToHome,
  allowOrRedirectToProfile,
  getRecommendationsForUserDIdInCityDId,
  getCitiesPlannedForUserDId,
  getCitiesVisitedForUserDId,
  getCitiyByDId,
  getRecommendationByDId,
  getCitiyByNameAndUserDId,
  createCity,
  createRecommendation,
};
