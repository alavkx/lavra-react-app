import React from "react";

interface ErrorFallbackProps {
  error?: Error;
  resetErrorBoundary: () => void;
}
export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error?.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);
