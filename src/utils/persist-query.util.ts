import { QueryClient } from "@tanstack/react-query";
import { encryptData, decryptData } from "./crypto.util";

const REACT_QUERY_CACHE_KEY: string = "REACT_QUERY_CACHE";

/**
 * Persist React Query data to localStorage
 * @param {QueryClient} queryClient - The React QueryClient instance
 * @param {string} storageKey - The key to use in localStorage
 */
export const persistQueryClientToLocalStorage = (queryClient: QueryClient, storageKey = REACT_QUERY_CACHE_KEY) => {
  const saveCacheToLocalStorage = () => {
    const cacheData = queryClient.getQueryCache().getAll();
    const serializedCache = JSON.stringify(
      cacheData.map(({ queryKey, state }) => ({
        queryKey,
        state,
      }))
    );

    // Encrypt the serialized cache data
    const encryptedCache = encryptData(serializedCache);
    localStorage.setItem(storageKey, encryptedCache);
  };

  queryClient.getQueryCache().subscribe(saveCacheToLocalStorage);
};

/**
 * Rehydrate React Query data from localStorage
 * @param {QueryClient} queryClient - The React QueryClient instance
 * @param {string} storageKey - The key to use in localStorage
 */
export const rehydrateQueryClientFromLocalStorage = (queryClient: QueryClient, storageKey = REACT_QUERY_CACHE_KEY) => {
  const encryptedCache = localStorage.getItem(storageKey);

  try {
    const decryptedCache = decryptData(encryptedCache!);
    const deserializedCache = JSON.parse(decryptedCache);

    deserializedCache.forEach(({ queryKey, state }: any) => {
      queryClient.setQueryData(queryKey, state.data);
      queryClient.getQueryCache().find(queryKey)?.setState(state);
    });
  } catch (error) {}
};
