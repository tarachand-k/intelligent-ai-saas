import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const LandingFooter = () => {
  return (
    <footer className="py-10 px-5 md:pt-16 bg-[#192339]">
      <div className="flex flex-wrap mx-auto max-w-screen-xl">
        <div className="w-1/4 md:w-1/5 mb-10 flex-1">
          <Link href="/" className="flex items-center pl-3 mb-8">
            <div className="relative w-8 h-8 mr-4">
              <Image fill alt="Logo" src="/logo.png" />
            </div>
            <h3
              className={cn(
                "text-2xl font-bold text-white",
                montserrat.className
              )}
            >
              Intelligent
            </h3>
          </Link>
          <div className="text-white opacity-70 text-sm mt-4 md:pr-10">
            <p>
              Soluta voluptate et optio. Eos quasi impedit sapiente aliquid eius
              eligendi at. Necessitatibus magni et sed quod quas minima.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex justify-around">
            <div className="w-1/3 md:px-10 mb-10">
              <h5 className="text-white">Company</h5>
              <ul className="list-none mt-5 text-sm">
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    Jobs
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    Contact
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    Media
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/3 md:px-10 mb-10">
              <h5 className="text-white">Product</h5>
              <ul className="list-none mt-5 text-sm">
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    Jobs
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    Contact
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    Media
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/3 md:px-10 mb-10">
              <h5 className="text-white">Support</h5>
              <ul className="list-none mt-5 text-sm">
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    Jobs
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    Contact
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white opacity-70 no-underline hover:underline"
                  >
                    Media
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <div className="flex w-full mx-auto relative">
            <input
              type="text"
              className="border-0 px-2 py-1 md:px-4 md:py-3 outline-none focus-visible:ring-0 focus-visible:ring-transparent rounded-md md:w-full rounded-e-none"
              placeholder="Email Address"
            />
            <Button className="inline-block w-fit md:h-12 rounded-s-none">
              Start
            </Button>
          </div>
          <div className="flex justify-start gap-8 mt-8">
            <a
              href="#"
              className="relative p-5 bg-[#6f5af6] rounded-md text-white hover:scale-105 transition-transform ease-in-out-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-twitter absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="relative p-5 bg-[#6f5af6] rounded-md text-white hover:scale-105 transition-transform ease-in-out-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-facebook absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="relative p-5 bg-[#6f5af6] rounded-md text-white hover:scale-105 transition-transform ease-in-out-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
