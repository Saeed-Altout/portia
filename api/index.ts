import { login } from "./auth/login";
import { register } from "./auth/register";
import { logout } from "./auth/logout";
import { verificationCode } from "./auth/verification-code";
import { resendVerificationCode } from "./auth/resend-verification-code";
import { setNewPassword } from "./auth/set-new-password";
import { sendResetEmail } from "./auth/send-reset-email";
import { loginWithGoogle } from "./auth/login-with-google";
import { getAffiliateHistories } from "./dashboard/get-affiliate-histories";
import { getAffiliateStatistics } from "./dashboard/get-affiliate-statistics";
import { getDepositHistories } from "./dashboard/get-deposit-histories";
import { getDepositStatistics } from "./dashboard/get-deposit-statistics";
import { getProxyCities } from "./dashboard/get-proxy-cities";
import { getProxyCountries } from "./dashboard/get-proxy-countries";
import { getProxyIpRotations } from "./dashboard/get-proxy-ip-rotations";
import { getProxyLocations } from "./dashboard/get-proxy-locations";
import { getProxyServiceProviders } from "./dashboard/get-proxy-service-providers";

import {
  getActiveProxies,
  getInactiveProxies,
  getProxiesCounts,
  addProxy,
  fixProxy,
  editAuthProxy,
  editInfoProxy,
  getPricingPlans,
  getAllPackages,
  getCostPlans,
  getPorts,
  updateUserProfile,
  getUserBalance,
  getUserDetails,
  getTablesData,
  exportData,
  getOffersPackage,
  getPackageWithPlans,
  getProxyById,
} from "./dashboard";
import {
  getFaqs,
  getAllFaqs,
  getReviews,
  getFeaturesOffer,
  getOffers,
  sendContactMessage,
  getPlansOffer,
} from "./root";

export {
  login,
  register,
  loginWithGoogle,
  logout,
  sendResetEmail,
  setNewPassword,
  verificationCode,
  resendVerificationCode,
  getAffiliateHistories,
  getAffiliateStatistics,
  getDepositHistories,
  getDepositStatistics,
  getProxyCities,
  getProxyCountries,
  getProxyIpRotations,
  getProxyLocations,
  getProxyServiceProviders,
  getActiveProxies,
  getInactiveProxies,
  getProxiesCounts,
  getPlansOffer,
  addProxy,
  fixProxy,
  editAuthProxy,
  editInfoProxy,
  getPricingPlans,
  getAllPackages,
  getCostPlans,
  getPorts,
  getFaqs,
  getAllFaqs,
  getReviews,
  getFeaturesOffer,
  getOffers,
  sendContactMessage,
  updateUserProfile,
  getUserBalance,
  getUserDetails,
  getTablesData,
  exportData,
  getOffersPackage,
  getPackageWithPlans,
  getProxyById,
};
