import { MaxWidthWrapper } from "../layout-box/max-width-wrapper";
import InstagramIcon from "./instagram-icon";
import LinkedinIcon from "./linkedin-icon";
import YoutubeIcon from "./youtube-icon";

const words = `At Altero Labs, our mission is to drive innovation and provide the tools and knowledge needed for success in the fast-paced tech world.`;

export const Footer = () => {
  return (
    <footer className="bg-primary text-txtInverted">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center sm:justify-start gap-8">
            <svg
      xmlns="http://www.w3.org/2000/svg"
      width="153"
      height="34"
      fill="none"
      viewBox="0 0 153 34"
    >
      <path
        fill="#FAFAFA"
        d="M51.787 9.769h4.243l6.117 17.613h-3.503l-1.381-4.292h-6.981l-1.184 4.292h-3.43L51.788 9.77zm-.889 10.928h5.699l-2.812-8.757h-.469l-2.418 8.757zM64.707 9.473h2.96v17.91h-2.96V9.472zm12.984 17.91c-.542.098-1.554.172-2.442.172-2.27 0-3.552-1.135-3.552-3.503v-7.549h-1.702V14.21h1.702v-2.861h2.96v2.861h3.034v2.294h-3.034v6.982c0 1.282.37 1.702 1.653 1.702h1.381v2.195zm13.853-6.193h-9.176c.123 3.109 1.578 4.219 3.601 4.219 2.072 0 2.763-.642 3.01-1.9h2.59c-.296 2.517-2.343 4.17-5.65 4.17-3.872 0-6.536-2.542-6.536-6.883 0-4.342 2.713-6.883 6.364-6.883 4.095 0 6.044 2.64 5.797 7.277zm-5.723-5.23c-1.8 0-3.034.913-3.355 3.356h6.365c-.05-2.32-1.184-3.355-3.01-3.355zm8.833-1.75h2.787l.1 3.477h.122c.592-2.417 1.925-3.65 3.701-3.65.271 0 .567.024.839.123v2.787h-1.555c-1.924 0-3.034 1.037-3.034 3.849v6.586h-2.96V14.21zm9.084 6.586c0-4.391 2.886-6.883 6.611-6.883 3.701 0 6.612 2.492 6.612 6.883 0 4.39-2.911 6.882-6.612 6.882-3.725 0-6.611-2.491-6.611-6.882zm3.108 0c0 3.28 1.259 4.539 3.503 4.539 2.221 0 3.503-1.184 3.503-4.54 0-3.28-1.282-4.538-3.503-4.538-2.244 0-3.503 1.258-3.503 4.539zm12.213 3.231h3.404v3.355h-3.404v-3.355zm16.94 3.355h-2.763c-.198-.666-.346-1.677-.346-2.763h-.197c-.543 1.776-1.949 3.06-4.169 3.06-2.048 0-3.848-1.284-3.848-3.553 0-2.17 1.726-3.898 5.057-4.317l2.96-.37v-.69c0-1.802-.74-2.591-2.664-2.591-1.727 0-2.393.592-2.492 1.825h-2.615c.099-2.787 2.245-4.07 5.378-4.07 3.922 0 5.304 1.752 5.304 4.934v4.86c0 1.628.148 2.787.395 3.675zm-8.412-3.65c0 1.257.715 1.825 2.047 1.825 1.727 0 3.108-.987 3.108-3.479v-.986l-2.615.271c-1.825.222-2.54 1.012-2.54 2.368zm11.898-14.037h3.059v2.59h-3.059v-2.59zm.049 4.514h2.961v13.173h-2.961V14.21z"
      ></path>
      <g fill="#FAFAFA" clipPath="url(#clip0_92_11368)">
        <path d="M25.306 23.008c.291.277.292.73 0 1.008l-3.114 2.974c-.29.278-.865.505-1.276.505h-4.011c-.412 0-.507-.224-.212-.496l5.962-5.502a.793.793 0 011.067.007l1.584 1.505zM28.914 12.306a.689.689 0 010 1.007l-6.375 6.059-1.058 1.006-3.717 3.534-1.058 1.006-2.181 2.073a.779.779 0 01-1.059 0l-4.154-3.95-1.049-.996a.682.682 0 01.012-.996l2.18-2.073 1.059-1.006 3.716-3.534 1.059-1.006.124-.118 1.059-1.006 4.155-3.95 1.048-.996a.762.762 0 011.037 0l1.048.996 4.155 3.95h-.001zM38.115 21.05a.683.683 0 01.011.996l-1.048.997-4.155 3.949a.779.779 0 01-1.058 0l-3.755-3.57-1.059-1.006-2.143-2.037a.689.689 0 010-1.006l4.154-3.95 1.049-.996a.771.771 0 011.048.01l6.957 6.614-.001-.001z"></path>
      </g>
      <defs>
        <clipPath id="clip0_92_11368">
          <path
            fill="#fff"
            d="M0 0H30.281V20.336H0z"
            transform="translate(8.053 7.158)"
          ></path>
        </clipPath>
      </defs>
    </svg>

              <div className="flex flex-col gap-3">
                <p className="font-bold">Phone Number</p>
                <a href="wa.me/6289670255927" className="hover:underline">
                  (+62) 896-7025-5927
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold">E-mail</p>
                <a href="mailto:info@alterolab.com" className="hover:underline">
                  info@alterolab.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-sm gap-10 text-left col-span-2">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Bali Office</p>
              <div>
                Pertokoan Nakula Plaza B8, Jl. Nakula, Desa/Kelurahan Legian,
                Kec. Kuta, Kab. Badung, Indonesia
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Singapore Office</p>
              <div>
                5F, 9 Straits View, Marina One West Tower #05-07 Singapore
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2">
            <div className="text-left">
              <p className="text-lg font-medium">Company</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="transition hover:text-txtInverted/75" href="#">
                    Services
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-txtInverted/75" href="#">
                    About
                  </a>
                </li>

                <li>
                  <a className=" transition hover:text-txtInverted/75" href="#">
                    Portofolio
                  </a>
                </li>
                <li>
                  <a className=" transition hover:text-txtInverted/75" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <p className="text-lg font-medium">Resources</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="transition hover:text-txtInverted/75" href="#">
                    Altero Academy
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-txtInverted/75" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">
                © 2024 Altero. All rights reserved.
              </span>
            </p>

            <ul className="flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a href="#" rel="noreferrer" target="_blank">
                  <span className="sr-only">Linkedin</span>
                  <LinkedinIcon />
                </a>
              </li>

              <li>
                <a href="#" rel="noreferrer" target="_blank">
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon />
                </a>
              </li>

              <li>
                <a href="#" rel="noreferrer" target="_blank">
                  <span className="sr-only">YouTube</span>
                  <YoutubeIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
