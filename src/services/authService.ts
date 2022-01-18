import router from "@/router";
import { User } from "@/store/types/types";
import { useUserStore } from "@/store/userStore";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function allowOrRedirectToHome() {
  const userStore = useUserStore();
  const actualUser: User = userStore.loggedInUser;
  if (!actualUser) {
    router.push({
      name: "Home",
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function allowOrRedirectToProfile() {
  const userStore = useUserStore();
  const actualUser: User = userStore.loggedInUser;
  if (actualUser) {
    router.push({
      name: "UserPublicProfile",
      params: { userdid: actualUser.dId },
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function redirectToUserProfile(userDId: string) {
  router.push({
    name: "UserPublicProfile",
    params: { userdid: userDId },
  });
}
