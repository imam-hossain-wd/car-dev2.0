"use client"

import { Button } from "@/components/ui/button"
import { RocketIcon, ReloadIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary/5 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Something went wrong!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              We encountered an unexpected error. Our team has been notified and we're working to fix it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
              <Button
                onClick={() => reset()}
                className="gap-2 bg-primary hover:bg-primary/90"
              >
                <ReloadIcon className="h-4 w-4" />
                Try Again
              </Button>
              
              <Button
                onClick={() => router.push("/")}
                variant="outline"
                className="gap-2 border-primary text-primary hover:bg-primary/10"
              >
                <RocketIcon className="h-4 w-4" />
                Go Home
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-8 py-6 text-center">
          <p className="text-sm text-gray-500">
            Error code: {error.digest || "UNKNOWN_ERROR"}
          </p>
        </div>
      </div>
    </div>
  )
}