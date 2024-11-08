import { useQuery } from "@tanstack/react-query";

import { getReviews } from "@/features/website/api/get-reviews";

export const useGetReviews = (
  { per_page }: { per_page: number } = { per_page: 5 }
) => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews({ per_page }),
  });
};
