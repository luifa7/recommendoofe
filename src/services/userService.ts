import { CreateUser, FriendRequest, User } from "@/store/types/types";
import axios, { AxiosResponse } from "axios";
import { useUserStore } from "@/store/userStore";
import router from "@/router";

const API_URL = import.meta.env.VITE_APP_API_URL;

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

export async function getUserByUsername(
  username: string
): Promise<Array<User>> {
  {
    const users = await axios
      .get(`${API_URL}/users?username=${username}`)
      .then((response) => response.data as Array<User>)
      .catch((error) => {
        console.log(error);
      });
    if (!users) {
      return [];
    }
    return users;
  }
}

export async function getFriendsDIdsByUserDId(
  userDId: string
): Promise<string[]> {
  {
    const friendDIds = await axios
      .get(`${API_URL}/users/${userDId}/friends`)
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

export async function getSentFriendRequestsDIdsByUserDId(
  userDId: string
): Promise<string[]> {
  {
    const friendDIds = await axios
      .get(`${API_URL}/users/${userDId}/friends/sent`)
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

export async function getReceivedFriendRequestsDIdsByUserDId(
  userDId: string
): Promise<string[]> {
  {
    const queryUrl = `${API_URL}/users/${userDId}/friends/received`;
    const friendDIds = await axios
      .get(queryUrl)
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

export async function postFriendRequest(
  userDId: string,
  friendRequest: FriendRequest
) {
  {
    const response = await axios
      .post(`${API_URL}/users/${userDId}/friends`, friendRequest)
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

export async function acceptFriendRequest(userDId: string, friendDId: string) {
  {
    const response = await axios
      .put(`${API_URL}/users/${userDId}/friends/${friendDId}/accept`)
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

export async function deleteFriendRequest(userDId: string, friendDId: string) {
  {
    const response = await axios
      .delete(`${API_URL}/users/${userDId}/friends/${friendDId}`)
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

export async function isFriendRequestPending(
  user1DId: string,
  user2DId: string
): Promise<boolean> {
  {
    const isPending = await axios
      .get(`${API_URL}/users/${user1DId}/friends/${user2DId}/ispending`)
      .then((response) => response.data as boolean)
      .catch((error) => {
        console.log(error);
      });
    if (!isPending) {
      return false;
    }
    return isPending;
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

export async function getSentFriendRequestsByUserDId(
  userDId: string
): Promise<Array<User>> {
  {
    const friendsDIds = await getSentFriendRequestsDIdsByUserDId(userDId);
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

export async function getReceivedFriendRequestsByUserDId(
  userDId: string
): Promise<Array<User>> {
  {
    const friendsDIds = await getReceivedFriendRequestsDIdsByUserDId(userDId);
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

export async function getAllUsers(): Promise<undefined | User> {
  {
    const user = await axios
      .get(`${API_URL}/users`)
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

export async function createUser(user: CreateUser) {
  const response = await axios
    .post(`${API_URL}/users`, user)
    .then((response) => response as AxiosResponse)
    .catch(function (error) {
      console.log(error);
    });
  if (!response) {
    return undefined;
  }
  return response;
}

export async function deleteUser() {
  {
    const userStore = useUserStore();
    const response = await axios
      .delete(`${API_URL}/users/${userStore.loggedInUser?.dId}`)
      .then((response) => response as AxiosResponse)
      .catch(function (error) {
        console.log(error);
      });
    if (!response) {
      return undefined;
    }
    userStore.logoutUser();
    router.push({
      name: "LogoutUser",
    });
  }
}
