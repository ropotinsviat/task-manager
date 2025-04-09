import { useSearchParams } from "react-router-dom";

export const useQueryParams = <T extends Record<string, string>>() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParams = (): Partial<T> => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params as Partial<T>;
  };

  const setParams = (newParams: Partial<T>) => {
    const updatedParams = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        updatedParams.set(key, value);
      } else {
        updatedParams.delete(key);
      }
    });
    setSearchParams(updatedParams);
  };

  return { getParams, setParams };
};
