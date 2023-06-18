import { useQuery } from "@tanstack/react-query";
import queryDummyService from "Services/queryDummyService";

export const useFetchTodosHook = (
  enabled: Boolean,
  onSuccesshandler: Function,
  onErrorhandler: Function
) => {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: () => queryDummyService(),
    enabled,
    onSuccess: (data) => onSuccesshandler(data),
    onError: (data) => onErrorhandler(data),
  });

  return { ...query };
};
