import { CreateUser, FriendRequest, User } from "@/store/types/types";
import axios, { AxiosResponse } from "axios";

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

export async function getSentFriendRequestsDIdsByUserDId(
  userDId: string
): Promise<string[]> {
  {
    const friendDIds = await axios
      .get(`${API_URL}/friends/${userDId}?status=sent`)
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
    const queryUrl = `${API_URL}/friends/${userDId}?status=received`;
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

export async function postFriendRequest(friendRequest: FriendRequest) {
  {
    const response = await axios
      .post(`${API_URL}/friends`, friendRequest)
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

export async function acceptFriendRequest(friendRequest: FriendRequest) {
  {
    const response = await axios
      .put(`${API_URL}/friends`, friendRequest)
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

export async function deleteFriendRequest(friendRequest: FriendRequest) {
  {
    const response = await axios
      .delete(
        `${API_URL}/friends/${friendRequest.userDId}?friend=${friendRequest.friendDId}`
      )
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
      .get(`${API_URL}/friends/${user1DId}/ispending?userid=${user2DId}`)
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
