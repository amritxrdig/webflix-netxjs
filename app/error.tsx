"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center mt-8">
      <h2 className="text-red-500 text-2xl mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
