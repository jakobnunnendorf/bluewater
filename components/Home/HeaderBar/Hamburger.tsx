"use client";

function Hamburger({
  dark = false,
  toggleOpen,
}: {
  dark: boolean;
  toggleOpen: () => void;
}) {
  return (
    <button className="lg:hidden" onClick={toggleOpen}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        className={`size-6 ${dark ? "stroke-white" : "stroke-black"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}

export default Hamburger;
