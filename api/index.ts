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
import { getWayPayment } from "./dashboard/get-way-payment";
import { deposit } from "./dashboard/deposit";
import { getPricingPlans } from "./dashboard/get-pricing-plans";
import { getPackageWithPlans } from "./dashboard/get-package-with-plans";
import { getOffersPackage } from "./dashboard/get-offers-package";
import { getUserBalance } from "./dashboard/get-user-balance";
import { getUserDetails } from "./dashboard/get-user-details";
import { getTablesData } from "./dashboard/get-tables-data";
import { updateUserProfile } from "./dashboard/update-user-profile";
import { exportData } from "./dashboard/export-data";
import { getAllPackages } from "./dashboard/get-all-packages";
import { getCostPlans } from "./dashboard/get-cost-plans";
import { getPorts } from "./dashboard/get-ports";
import { getActiveProxies } from "./dashboard/get-active-proxies";
import { getInactiveProxies } from "./dashboard/get-inactive-proxies";
import { getProxyById } from "./dashboard/get-proxy";
import { renewProxy } from "./dashboard/renew-proxy";
import { fixProxy } from "./dashboard/fix-proxy";
import { getProxiesCounts } from "./dashboard/get-proxies-counts";
import { addProxy } from "./dashboard/add-proxy";
import { editAuthProxy } from "./dashboard/edit-auth-proxy";
import { editInfoProxy } from "./dashboard/edit-info-proxy";
import { getAllFaqs } from "./root/get-all-faqs";
import { getFaqs } from "./root/get-faqs";
import { getDataMap } from "./root/get-data-map";
import { getFeaturesOffer } from "./root/get-features-offer";
import { getPlansOffer } from "./root/get-plans-offer";
import { getReviews } from "./root/get-reviews";
import { sendContactMessage } from "./root/send-contact-message";
import { getOffers } from "./root/get-offers";
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
  getWayPayment,
  deposit,
  updateUserProfile,
  renewProxy,
  getUserBalance,
  getUserDetails,
  getTablesData,
  exportData,
  getOffersPackage,
  getPackageWithPlans,
  getProxyById,
  getDataMap,
};
