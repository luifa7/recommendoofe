import { useUserStore } from "@/store/userStore";
import { Notification } from "@/store/types/types";
import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export async function getAllNotificationsByUserDId(): Promise<
  Array<Notification>
> {
  {
    const userStore = useUserStore();
    const notifications = await axios
      .get(`${API_URL}/users/${userStore.loggedInUser?.dId}/notifications`)
      .then((response) => response.data as Array<Notification>)
      .catch((error) => {
        console.log(error);
      });
    if (!notifications) {
      return [];
    }
    return notifications;
  }
}

export async function getNewNotificationsByUserDId(): Promise<
  Array<Notification>
> {
  {
    const userStore = useUserStore();
    const notifications = await axios
      .get(
        `${API_URL}/users/${userStore.loggedInUser?.dId}/notifications/unread`
      )
      .then((response) => response.data as Array<Notification>)
      .catch((error) => {
        console.log(error);
      });
    if (!notifications) {
      return [];
    }
    return notifications;
  }
}

export async function getNewNotificationsCount(): Promise<number> {
  {
    const userStore = useUserStore();
    const notificationsCount = await axios
      .get(
        `${API_URL}/users/${userStore.loggedInUser?.dId}/notifications/count`
      )
      .then((response) => response.data as number)
      .catch((error) => {
        console.log(error);
      });
    if (!notificationsCount) {
      return 0;
    }
    return notificationsCount;
  }
}

export async function markAllNotificationsAsReadByUserDId() {
  {
    const userStore = useUserStore();
    const response = await axios
      .put(`${API_URL}/users/${userStore.loggedInUser?.dId}/notifications`)
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
