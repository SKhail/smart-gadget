
import "../newsletter/style.css";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import {
  FaXTwitter,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
} from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { SiKlarna } from "react-icons/si";

import googleApp from "../../assets/images/google-play.svg";
import AppStore from "../../assets/images/apple-store.svg";
import Logo from "../../assets/Logos/white-logo.png";
import SubscribeButton from './subscribeButton';
import WhiteLogo from '../../assets/Logos/white-smart-gadgets-high-resolution-logo.png'



export default function Example() {
  return (
    <div className="relative isolate overflow-hidden footerStyle pb-12">
      <div className="grid grid-rows-3 grid-flow-col gap-4 mx-auto max-w-7xl px-6 lg:px-8"></div>
      {/*{/* the whole width */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* the whole length */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* the subscribe section */}
          <div className="max-w-xl lg:max-w-lg ">
            {/* logo */}
            <img
              src={WhiteLogo}
              alt="Logo"
              className="logo mb-5 mt-10"
              style={{ width: "130px", height: "30px" }}
            />

            <h2 className="text-3xl font-baloo font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg font-baloo leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore test1.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              {<SubscribeButton/>}
            </div>
            {/* section 2 our app */}
            <dt className="mt-12 font-baloo font-semibold text-white">About</dt>
            <a href="">
              {" "}
              <dd className="mt-1 leading-7 font-baloo  text-gray-400">Our project</dd>
            </a>

            <a href="#">
              <dd className="mt-0 leading-7 font-baloo text-gray-400">Careers</dd>{" "}
            </a>
            <a href="#">
              <dd className="mt-0 leading-7 font-baloo text-gray-400">Terms and conditions</dd>{" "}
            </a>
          </div>

          {/* the right section */}
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:pt-7">
            {/* section 1 weekly */}
            <div className="flex flex-col col-span-1 items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-9 w-9 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-baloo font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 font-baloo  text-gray-400">
                Non laboris consequat testt tstescupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
              {/* no spam */}
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 mt-8">
                <HandRaisedIcon
                  className="h-9 w-9 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-baloo font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 font-baloo text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>

            <div className="flex flex-col row-span-2 items-start">
              {/* folow us */}
              <div className="flex flex-col items-start">
                <dt className="mt-0 font-semibold font-baloo text-white">Follow us</dt>
                <div className="mt-3 leading-7 flex flex-row space-x-5 text-4xl ">
                  {/* social Icons */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-state-200 box-content px-2 py-2 h-42 w-42 rounded-lg shadow-lg shadow-white/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300"
                  >
                    <FaFacebook className=" text-white  hover:text-blue-600" />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-state-200 box-content px-2 py-2 rounded-lg shadow-lg shadow-white/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300"
                  >
                    <FaInstagram className=" text-white  hover:text-red-600" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-state-200 box-content px-2 py-2 rounded-lg shadow-lg shadow-white/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300"
                  >
                    <FaXTwitter className=" text-white  hover:text-blue-600" />
                  </a>

                  <a
                    href="https://whatsApp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-state-200 box-content px-2 py-2 rounded-lg shadow-lg shadow-white/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-30"
                  >
                    <FaWhatsapp className=" text-white  hover:text-green-600" />
                  </a>
                </div>
              </div>

              {/* downlowd our App */}
              <div className="flex flex-col items-start">
                <dt className="mt-20 font-semibold font-baloo text-white">
                  Download Our App
                </dt>
                <div className="">
                  <div className="flex flex-row space-x-1">
                    <a
                      href="https://play.google.com/store/games?hl=en&gl=US"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-state-200 box-content  py-2 rounded-lg cursor-point"
                    >
                      <img src={googleApp} alt="google play store" />
                    </a>
                    <a
                      href="https://www.apple.com/uk/app-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-state-200 box-content px-2 py-2 rounded-lg shadow-lg"
                    >
                      <img src={AppStore} alt="App store" />
                    </a>
                  </div>
                </div>
              </div>

              {/* section 4  payment*/}

              <div className="flex flex-col items-start">
                <dt className="mt-16 font-semibold font-baloo text-white">
                  Payment methods
                </dt>

                <dd className="mt-1 leading-7 font-baloo text-gray-400">
                  Payments 100% secured
                </dd>

                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <div className="flex flex-row space-x-3">
                    <RiVisaLine
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <FaCcMastercard
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <FaCcPaypal
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <FaApplePay
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <SiKlarna
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#003566] to-[#2a9d8f] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
