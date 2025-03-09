import React from 'react'

const PostCardSkeleton = () => {
    return (
        <div>
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate-pulse">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                    <div className="h-6 w-20 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4"></div>
                
                <div className="space-y-2.5 max-w-lg mb-4">
                    <div className="flex items-center w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <div className="flex items-center w-full max-w-[480px]">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    </div>
                    <div className="flex items-center w-full max-w-[400px]">
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="w-7 h-7 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                        <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    </div>
                    <div className="h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default PostCardSkeleton
