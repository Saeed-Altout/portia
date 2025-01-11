const NAME_PROJECT = "PORTIA";
const NAME_SECRET = "NEXT_CWS";

export const TOKEN_KEY = `${NAME_SECRET}_${NAME_PROJECT}_TOKEN`;
export const EMAIL_KEY = `${NAME_SECRET}_${NAME_PROJECT}_EMAIL`;
export const USER_KEY = `${NAME_SECRET}_${NAME_PROJECT}_USER`;

export const ROUTES = {
  DASHBOARD_PROXIES: "/dashboard/proxies",
  DASHBOARD_DEPOSITS: "/dashboard/deposits",
  DASHBOARD_PLANS: "/dashboard/pricing-plans",
  DASHBOARD_AFFILIATE: "/dashboard/affiliate",
  DASHBOARD_HOME: "/dashboard",
};

export enum ModalType {
  LOGOUT = "logout",
  EDIT_INFO_PROXY = "edit-info-proxy",
  EDIT_AUTH_PROXY = "edit-auth-proxy",
  RENEW_PROXY = "renew-proxy",
  FIX_PROXY = "fix-proxy",
  ACTIVE_PROXY = "active-proxy",
  ADD_PROXY = "add-proxy",
  EXPORT_DATA = "export-data",
  NOTIFICATION = "notification",
  MANAGE_PROXY = "manage-proxy",
  ADD_FUNDS = "add-funds",
}
