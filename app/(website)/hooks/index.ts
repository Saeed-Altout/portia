// Send contact message
import { useSendContactMessageMutation } from './contact-us/use-send-contact-message-mutation';
import { useSendContactMessage } from './contact-us/use-send-contact-message';

// Get faqs
import { useGetAllFaqsQuery } from './faqs/get-all-faqs-query';
import { useGetFaqsQuery } from './faqs/get-faqs-query';

// Error
import { useHandleResponse } from './error/use-handle-response';

import { useGetFeaturesOffersQuery } from './offers/get-features-offers-query';
import { useGetOffersQuery } from './offers/get-offers-query';
export {
	useSendContactMessageMutation,
	useSendContactMessage,
	useGetAllFaqsQuery,
	useGetFeaturesOffersQuery,
	useGetFaqsQuery,
	useHandleResponse,
	useGetOffersQuery,
};
