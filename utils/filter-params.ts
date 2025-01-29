export const filterParams = (
  params: Record<string, any>
): Record<string, any> => {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );
};
