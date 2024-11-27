import { getAffiliateHistories, getAffiliateStatistics } from "./affiliate";
import { getDepositHistories, getDepositStatistics } from "./deposit";
import {
  getProxyCities,
  getProxyCountries,
  getProxyIpRotations,
  getProxyLocations,
  getProxyServiceProviders,
} from "./location";
import {
  getActiveProxies,
  getInactiveProxies,
  getProxiesCounts,
  addProxy,
  fixProxy,
  editAuthProxy,
  editInfoProxy,
} from "./proxy";
import { getPricingPlans } from "./pricing";
import { getAllPackages } from "./shared/get-all-packages";
import { getPorts } from "./shared/get-ports";
import { getCostPlans } from "./shared/get-cost-plans";
import { updateUserProfile, getUserBalance, getUserDetails } from "./user";
export {
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
};
