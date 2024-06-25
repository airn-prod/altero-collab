import { MaxWidthWrapper } from "../max-width-wrapper";
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
                width="181"
                height="34"
                fill="none"
                viewBox="0 0 181 34"
              >
                <path
                  fill="#FAFAFA"
                  d="M51.42 9.193h4.176l6.022 17.416H58.17l-1.36-4.245H49.94l-1.166 4.244h-3.375L51.42 9.194zm-.874 10.805h5.609l-2.768-8.659h-.462L50.545 20zM64.136 8.9h2.914v17.708h-2.914V8.9zm12.78 17.708c-.534.098-1.53.171-2.404.171-2.233 0-3.496-1.122-3.496-3.463v-7.464h-1.675v-2.268h1.675v-2.83h2.914v2.83h2.986v2.268H73.93v6.903c0 1.268.364 1.683 1.626 1.683h1.36v2.17zm13.636-6.122h-9.033c.121 3.074 1.554 4.171 3.545 4.171 2.04 0 2.72-.634 2.962-1.878h2.55c-.292 2.488-2.307 4.122-5.56 4.122-3.813 0-6.435-2.512-6.435-6.805 0-4.293 2.671-6.805 6.265-6.805 4.03 0 5.948 2.61 5.706 7.195zm-5.634-5.17c-1.772 0-2.986.902-3.302 3.316h6.265c-.049-2.292-1.166-3.317-2.963-3.317zm8.694-1.732h2.743l.097 3.439h.122c.582-2.39 1.894-3.61 3.642-3.61.267 0 .558.024.825.122v2.756h-1.53c-1.893 0-2.986 1.024-2.986 3.805v6.512h-2.913V13.585zm8.941 6.512c0-4.342 2.841-6.805 6.508-6.805 3.642 0 6.507 2.463 6.507 6.805s-2.865 6.805-6.507 6.805c-3.667 0-6.508-2.463-6.508-6.805zm3.06 0c0 3.244 1.238 4.488 3.448 4.488 2.185 0 3.447-1.17 3.447-4.488 0-3.244-1.262-4.488-3.447-4.488-2.21 0-3.448 1.244-3.448 4.488zm13.185-10.903h3.108v14.83h8.595v2.585h-11.703V9.194zm25.111 17.416h-2.719c-.195-.66-.34-1.66-.34-2.732h-.195c-.534 1.756-1.918 3.024-4.103 3.024-2.015 0-3.788-1.268-3.788-3.512 0-2.147 1.7-3.854 4.978-4.269l2.913-.366v-.683c0-1.78-.728-2.56-2.622-2.56-1.7 0-2.355.585-2.452 1.804h-2.574c.097-2.756 2.21-4.024 5.293-4.024 3.861 0 5.22 1.732 5.22 4.878v4.805c0 1.61.146 2.756.389 3.634zm-8.28-3.61c0 1.244.704 1.805 2.016 1.805 1.699 0 3.059-.976 3.059-3.44v-.975l-2.574.268c-1.797.22-2.501 1-2.501 2.342zM147.389 8.9h2.914l-.024 8h.218c.728-2.268 2.404-3.61 4.419-3.61 2.72 0 5.293 2.318 5.293 6.806 0 4.488-2.671 6.805-5.269 6.805-1.991 0-3.715-1.097-4.492-3.317h-.194l-.121 3.024h-2.744V8.9zm6.313 15.684c2.234 0 3.448-1.268 3.448-4.488 0-3.22-1.214-4.464-3.448-4.464-1.821 0-3.448 1.318-3.448 4.415v.098c0 3.122 1.457 4.439 3.448 4.439zm8.384-1.585h2.501c.121 1.195.85 1.756 3.011 1.756 1.918 0 2.549-.561 2.549-1.61 0-.976-.777-1.39-3.035-1.927-2.792-.659-4.516-1.659-4.516-4.122 0-2.171 1.845-3.805 4.905-3.805 3.375 0 5.002 1.585 5.002 3.78h-2.526c-.048-1.097-.728-1.634-2.452-1.634-1.53 0-2.161.488-2.161 1.488 0 1.073.704 1.415 2.792 1.903 3.011.707 4.784 1.683 4.784 4.122 0 2.366-2.04 3.951-5.294 3.951-3.763 0-5.536-1.537-5.56-3.902z"
                ></path>
                <mask
                  id="mask0_506_2305"
                  style={{ maskType: "luminance" }}
                  width="31"
                  height="22"
                  x="6"
                  y="6"
                  maskUnits="userSpaceOnUse"
                >
                  <path
                    fill="#fff"
                    d="M36.789 6.652H6.622v20.696H36.79V6.652z"
                  ></path>
                </mask>
                <g fill="#FAFAFA" mask="url(#mask0_506_2305)">
                  <path d="M23.812 22.782c.29.282.29.744 0 1.026l-3.102 3.027c-.29.282-.862.513-1.272.513h-3.995c-.41 0-.506-.227-.211-.504l5.94-5.6a.778.778 0 011.062.008l1.578 1.531zM27.404 11.892c.29.281.29.742 0 1.024l-6.35 6.166-1.055 1.024-3.702 3.596-1.055 1.024-2.172 2.11a.764.764 0 01-1.055 0l-4.139-4.02-1.044-1.013a.705.705 0 01.011-1.014l2.173-2.11 1.054-1.024 3.703-3.596 1.054-1.024.124-.12 1.055-1.024 4.139-4.019 1.044-1.014a.748.748 0 011.033 0l1.044 1.014 4.14 4.019h-.002zM36.572 20.79c.29.281.294.737.01 1.013-.282.277-.753.733-1.043 1.014l-4.14 4.02a.764.764 0 01-1.054 0l-3.74-3.633-1.055-1.024-2.135-2.073a.712.712 0 010-1.024l4.139-4.019 1.044-1.014a.756.756 0 011.044.01l6.93 6.73z"></path>
                </g>
              </svg>

              <div className="flex flex-col gap-4">
                <p className="font-bold">Phone Number</p>
                <a href="wa.me/6289670255927" className="hover:underline">
                  (+62) 896-7025-5927
                </a>
              </div>
              <div className="flex flex-col gap-4">
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
                © 2024 AlteroLabs. All rights reserved.
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
