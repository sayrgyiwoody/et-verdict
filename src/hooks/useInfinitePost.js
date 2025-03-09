import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../lib/apiClient";

async function fetchPaginatedPosts({ pageParam = 1 }) {
    const response = await apiClient.get("", {
        params: { _page: pageParam, _limit: 10 },
    });

    return {
        data: response.data,
        nextPage: response.data.length === 10 ? pageParam + 1 : undefined,
    };
}

export function useInfinitePost() {
    return useInfiniteQuery({
        queryKey: ["posts"],
        queryFn: fetchPaginatedPosts,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });
}