"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
