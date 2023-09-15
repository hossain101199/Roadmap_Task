/* eslint-disable react/prop-types */
const Pointer = ({ className, isLeft }) => {
  return (
    <>
      {isLeft ? (
        <svg
          width="72"
          height="24"
          viewBox="0 0 72 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect
            width="60"
            height="4"
            transform="matrix(-1 0 0 1 72 11)"
            fill="#2D364D"
          />
          <rect
            width="24"
            height="24"
            rx="12"
            transform="matrix(-1 0 0 1 24 0)"
            fill="#2D364D"
          />
          <rect
            width="6"
            height="6"
            rx="3"
            transform="matrix(-1 0 0 1 15 9)"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="72"
          height="24"
          viewBox="0 0 72 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect y="11" width="60" height="4" fill="#2D364D" />
          <rect x="48" width="24" height="24" rx="12" fill="#2D364D" />
          <rect x="57" y="9" width="6" height="6" rx="3" fill="white" />
        </svg>
      )}
    </>
  );
};

export default Pointer;
