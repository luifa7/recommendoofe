import router from "@/router";
import { useStore } from "vuex";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function allowOrRedirectToHome() {
  const store = useStore();
  const actualUser = store.getters.getLoggedUser;
  if (!actualUser) {
    router.push({
      name: "Home",
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function allowOrRedirectToProfile() {
  const store = useStore();
  const actualUser = store.getters.getLoggedUser;
  if (actualUser) {
    router.push({
      name: "UserPublicProfile",
      params: { userdid: actualUser.dId },
    });
  }
}
