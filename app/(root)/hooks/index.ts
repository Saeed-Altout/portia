// Send contact message
import { useSendContactMessageMutation } from "./contact-us/use-send-contact-message-mutation";
import { useSendContactMessage } from "./contact-us/use-send-contact-message";

// Get faqs
import { useGetAllFaqsQuery } from "./faqs/get-all-faqs-query";
import { useGetFaqsQuery } from "./faqs/get-faqs-query";

// Error
import { useHandleResponse } from "./error/use-handle-response";

import { useGetFeaturesOffersQuery } from "./offers/get-features-offers-query";
import { useGetOffersQuery } from "./offers/get-offers-query";
import { useGetReviewsQuery } from "./reviews/get-reviews-query";

import { useGetPackagesQuery } from "./proxies/get-packages-query";
import { useGetCitiesQuery } from "./proxies/get-cities-query";
import { useGetServiceProviderQuery } from "./proxies/get-service-providers-query";
import { useGetIpRotationsQuery } from "./proxies/get-ip-rotations-query";
import { useGetAllProxiesQuery } from "./proxies/get-proxies-query";
import { useGetCountriesQuery } from "./proxies/get-countries-query";

export {
  useSendContactMessageMutation,
  useSendContactMessage,
  useGetAllFaqsQuery,
  useGetFeaturesOffersQuery,
  useGetFaqsQuery,
  useHandleResponse,
  useGetOffersQuery,
  useGetReviewsQuery,
  useGetPackagesQuery,
  useGetCitiesQuery,
  useGetCountriesQuery,
  useGetIpRotationsQuery,
  useGetAllProxiesQuery,
  useGetServiceProviderQuery,
};
