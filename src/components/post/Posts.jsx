import React, { useEffect, useMemo, useState } from 'react'
import { useInfinitePost } from '../../hooks/useInfinitePost';
import { useInView } from 'react-intersection-observer';
import PostCard from './PostCard';
import PostCardSkeleton from './PostCardSkeleton';
import { CircleArrowUp, Search, CircleX } from 'lucide-react';
import { useDebounce } from '../../hooks/useDebounce';
import Loader from '../layout/Loader';

const Posts = () => {


    const [searchQuery, setSearchQuery] = useState("");

    const debouncedSearch = useDebounce(searchQuery, 300);

    const { data: posts, isLoading: isPostLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfinitePost();

    const { ref, inView } = useInView();

    const allPosts = useMemo(() => posts?.pages.flatMap((page) => page.data) || [], [posts])

    // Filter posts using the debounced query
    const filteredPosts = useMemo(() => {
        return allPosts.filter((post) =>
            post.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
    }, [debouncedSearch, allPosts]);

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    const [showScrollButton, setShowScrollButton] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.7) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Discover Posts</h1>
                <p className="text-muted-foreground mb-6">Find interesting stories and insights</p>

                <div className="relative w-full max-w-lg mx-auto">
                    <div className="relative w-full">
                        <div className="absolute top-0 translate-y-2 left-2"><Search /></div>
                        <input type="text"
                            placeholder="Search posts as you type..."
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white dark:bg-transparent px-10 py-3 text-sm border rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-background border-border border-gray-400 placeholder:text-muted-foreground" />
                    </div>

                </div>
            </div>
            <div className='relative'>
                {isPostLoading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <PostCardSkeleton key={index} />
                        ))}
                    </div>
                )}

                

                {error ? (
                    <div className="text-red-500 flex gap-2"><CircleX /> Error fetching posts</div>
                ) : filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredPosts.map((post, index) => (
                            <PostCard
                                innerRef={filteredPosts.length === index + 1 ? ref : undefined}
                                key={post.id}
                                post={post}
                            />
                        ))}
                    </div>
                ) : !isPostLoading ? (  // Only show if loading is done & no error
                    <p className="text-gray-500">No posts yet.</p>
                ) : null}

                {
                    isFetchingNextPage &&
                    <p className='mt-3 flex items-center justify-center gap-2 w-full animate-pulse'><Loader /> Loading posts</p>
                }
                
                {showScrollButton && (
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="cursor-pointer fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                        aria-label="Scroll to top"
                    >
                        <CircleArrowUp />
                    </button>
                )}
            </div>
        </>

    )
}

export default Posts
