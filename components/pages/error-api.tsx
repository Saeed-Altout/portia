export const ErrorApi = () => {
  return (
    <div className="pt-32 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4"
        >
          <circle cx="32" cy="32" r="32" fill="#F5F5FA" />
          <circle cx="32" cy="32" r="24" fill="#E9E9F2" />
          <path
            d="M32 44C38.6274 44 44 38.6274 44 32C44 25.3726 38.6274 20 32 20C25.3726 20 20 25.3726 20 32C20 38.6274 25.3726 44 32 44Z"
            fill="#B5B6F7"
          />
          <path
            d="M26 32C26 30.8954 26.8954 30 28 30C29.1046 30 30 30.8954 30 32C30 33.1046 29.1046 34 28 34C26.8954 34 26 33.1046 26 32Z"
            fill="#4B4B57"
          />
          <path
            d="M34 32C34 30.8954 34.8954 30 36 30C37.1046 30 38 30.8954 38 32C38 33.1046 37.1046 34 36 34C34.8954 34 34 33.1046 34 32Z"
            fill="#4B4B57"
          />
          <path
            d="M24 38C24 38 27 35 32 35C37 35 40 38 40 38"
            stroke="#4B4B57"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-lg text-muted-foreground">Something went wrong!!</p>
      </div>
    </div>
  );
};
