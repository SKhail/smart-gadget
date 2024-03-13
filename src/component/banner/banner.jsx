import React from "react";
import { Carousel } from "@material-tailwind/react";
// import { PiFlagBanner } from "react-icons/pi";

function banner() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-50% object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-50% object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-50% object-cover"
      />
    </Carousel>
  );
}
export default banner;

// import { XMarkIcon } from "@heroicons/react/20/solid";

// export default function Example() {
//   return (
//     <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
//       <div
//         className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
//         aria-hidden="true"
//       >
//         <div
//           className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#0f4c5c] via-[#EEEEEE] to-[#76ABAE] opacity-100"
//           style={{
//             clipPath:
//               "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
//           }}
//         />
//       </div>
//       <div
//         className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
//         aria-hidden="true"
//       >
//         <div
//           className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#0f4c5c] via-[#EEEEEE] to-[#76ABAE] opacity-100"
//           style={{
//             clipPath:
//               "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
//           }}
//         />
//       </div>
//       <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
//         <p className="text-sm leading-6 text-gray-900">
//           <strong className="font-semibold">GeneriCon 2023</strong>
//           <svg
//             viewBox="0 0 2 2"
//             className="mx-2 inline h-0.5 w-0.5 fill-current"
//             aria-hidden="true"
//           >
//             <circle cx={1} cy={1} r={1} />
//           </svg>
//           Join us in Denver from June 7 – 9 to see what’s coming next.
//         </p>
//         <a
//           href="#"
//           className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
//         >
//           Register now <span aria-hidden="true">&rarr;</span>
//         </a>
//       </div>
//       <div className="flex flex-1 justify-end">
//         <button
//           type="button"
//           className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
//         >
//           <span className="sr-only">Dismiss</span>
//           <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
//         </button>
//       </div>
//     </div>
//   );
// }