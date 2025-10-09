import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';

const Error = () => {

      const error = useRouteError();
  let errorMessage = 'An unexpected error occurred.';
  let errorTitle = 'Oops! Something went wrong.';

  if (isRouteErrorResponse(error)) {
    errorTitle = `${error.statusText}`;
    errorMessage = error.data || 'The page you requested does not exist.';
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }
    return (
        <div>
                <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="text-center bg-white p-10 rounded-xl shadow-2xl max-w-lg">
        <h1 className="text-6xl font-extrabold text-indigo-600 mb-4">{errorTitle?<img src="/error-404.png" alt="" />:<img src="/App-Error.png" alt="" />}</h1>
        <p className="text-2xl font-medium text-gray-700 mb-6">
          {errorMessage}
        </p>
        <p className="text-gray-500 mb-8">
          Sorry, an error has occurred. You can return to the homepage below.
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
        >
          Go Home
        </button>
      </div>
    </div>
        </div>
    );
};

export default Error;