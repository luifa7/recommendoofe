import { User } from "@/store/types/types";
import axios from "axios";

export const API_URL = "http://localhost:5003";

export async function getUserByDId(userDId: string): Promise<undefined | User> {
  {
    const user = await axios
      .get(`${API_URL}/users/${userDId}`)
      .then((response) => response.data as User)
      .catch((error) => {
        console.log(error);
      });
    if (!user) {
      return undefined;
    }
    return user;
  }
}

export async function getFriendsDIdsByUserDId(
  userDId: string
): Promise<string[]> {
  {
    const friendDIds = await axios
      .get(`${API_URL}/friends/${userDId}`)
      .then((response) => response.data as Array<string>)
      .catch((error) => {
        console.log(error);
      });
    if (!friendDIds) {
      return [];
    }
    return friendDIds;
  }
}

export async function getFriendsByUserDId(
  userDId: string
): Promise<Array<User>> {
  {
    const friendsDIds = await getFriendsDIdsByUserDId(userDId);
    let friendsDIdsForQuery = friendsDIds.join();
    if (!friendsDIdsForQuery.includes(",")) {
      friendsDIdsForQuery += ",";
    }
    const friends = await axios
      .get(`${API_URL}/users/${friendsDIdsForQuery}`)
      .then((response) => response.data as Array<User>)
      .catch((error) => {
        console.log(error);
      });
    if (!friends) {
      return [];
    }
    return friends;
  }
}
