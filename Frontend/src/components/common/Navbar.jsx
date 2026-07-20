import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  const openMenu = () => {
    lastFocusedElementRef.current = document.activeElement;
    setIsMenuOpen(true);

    // Move focus into menu after state update
    setTimeout(() => {
      menuRef.current?.focus();
    }, 0);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);

    // Restore focus after state update
    setTimeout(() => {
      lastFocusedElementRef.current?.focus();
    }, 0);
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <header>
      {/* topbar */}
      <div className="px-4 py-2.5 bg-neutral-100 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="text-slate-900 dark:text-slate-300 text-[13px] flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              <span className="font-semibold">Address:</span>
              SWF New York 185669
            </span>
            <span className="hidden sm:inline">|</span>
            <span>
              <span className="font-semibold">Contact:</span>
              1800333665
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              to="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 fill-slate-900 hover:fill-blue-700 dark:hover:fill-blue-400 dark:fill-slate-300 transition"
                aria-hidden="true"
                viewBox="0 0 155.139 155.139"
              >
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761z"
                  data-original="#010002"
                />
              </svg>
            </a>

            <a
              to="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 fill-slate-900 hover:fill-blue-700 dark:hover:fill-blue-400 dark:fill-slate-300 transition"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0"
                  data-original="#ffffff"
                />
              </svg>
            </a>

            <a
              to="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 fill-slate-900 hover:fill-blue-700 dark:hover:fill-blue-400 dark:fill-slate-300 transition"
                aria-hidden="true"
                viewBox="0 0 1226.37 1226.37"
              >
                <path
                  d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z"
                  data-original="#000000"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <nav
        className="flex py-2 px-4 md:px-8 bg-white border-b border-slate-300 dark:border-neutral-700 dark:bg-neutral-900 min-h-[68px] relative z-20"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 w-full">
          <a
            to="#"
            className="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <span className="sr-only">Your Company</span>
            <img
              src="https://readymadeui.com/logo-alt.svg"
              alt="readymadeui logo"
              className="h-9 w-auto"
            />
          </a>

          <div
            id="collapseMenu"
            ref={menuRef}
            tabIndex={-1}
            className={`${isMenuOpen ? "block" : "hidden"} lg:block max-lg:bg-white dark:max-lg:bg-neutral-900 max-lg:border-l max-lg:border-slate-300 dark:max-lg:border-neutral-700 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none`}
          >
            <div className="py-2 px-4 flex justify-between items-center border-b border-slate-300 sticky top-0 bg-white dark:border-neutral-700 dark:bg-neutral-900 lg:hidden max-lg:min-h-[68px]">
              <Link
                to="/"
                className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <span className="sr-only">Your Company</span>
                <img
                  src="https://readymadeui.com/logo-alt.svg"
                  alt="readymadeui logo dialog"
                  className="h-9 w-auto"
                />
              </Link>
              <button
                type="button"
                aria-controls="collapseMenu"
                onClick={closeMenu}
                id="toggleClose"
                className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <span className="sr-only">Close main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 fill-slate-900 dark:fill-slate-50"
                  aria-hidden="true"
                  viewBox="0 0 329.269 329"
                >
                  <path
                    d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-8 font-semibold text-sm text-slate-900 dark:text-slate-50 lg:flex-row max-lg:p-6">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Doctor
                </Link>
              </li>
              <li>
                <Link
                  to="/doctor"
                  className="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/appointmnet"
              className="py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              appointment
            </Link>

            <button
              type="button"
              aria-controls="collapseMenu"
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
              id="toggleOpen"
              onClick={openMenu}
              className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-7 fill-slate-900 dark:fill-slate-50"
                aria-hidden="true"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}