import { useGetUserDetailsQuery } from "./user/get-user-details-query";

import { useUpdateUserProfile } from "./user/update-user-profile";
import { useUpdateUserProfileMutation } from "./user/update-user-profile-mutation";

import { useGetPricingPlansQuery } from "./pricing-plans/use-get-pricing-plans-query";

import { useGetAffiliateEarningsHistoriesQuery } from "./affiliate-earnings/get-affiliate-earnings-history-query";
import { useGetAffiliateEarningsStatisticsQuery } from "./affiliate-earnings/get-affiliate-earnings-statistics-query";

export {
  useGetUserDetailsQuery,
  useGetPricingPlansQuery,
  useUpdateUserProfile,
  useUpdateUserProfileMutation,
  useGetAffiliateEarningsHistoriesQuery,
  useGetAffiliateEarningsStatisticsQuery,
};
