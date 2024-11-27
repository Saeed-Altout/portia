export type Role = "guest" | "user" | "admin" | "all";

export const routeMiddleware = (role: Role, isAuthenticated: boolean, router: any) => {
  if (role === "guest" && isAuthenticated) {
    router.push("/dashboard");
  } else if (role === "user" && !isAuthenticated) {
    router.push("/auth/login");
  } else if (role === "admin" && !isAuthenticated) {
    router.push("/auth/login");
  } else if (role === "all") {
    return;
  }
};
