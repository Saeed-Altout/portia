// Send contact message
import { useSendContactMessageMutation } from './contact-us/use-send-contact-message-mutation';
import { useSendContactMessage } from './contact-us/use-send-contact-message';

// Get faqs
import { useGetAllFaqsQuery } from './faqs/get-all-faqs-query';
import { useGetFaqsQuery } from './faqs/get-faqs-query';

// Error
import { useHandleResponse } from './error/use-handle-response';

export { useSendContactMessageMutation, useSendContactMessage, useGetAllFaqsQuery, useGetFaqsQuery, useHandleResponse };
