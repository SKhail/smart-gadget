export default function Example() {
  return (
    <div className="relative overflow-hidden bg-white my-20">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-baloo-900 sm:text-6xl">
              Your favorite gadget!
            </h1>
            <p className="mt-4 text-xl text-baloo-500">
              Step into the future with our newest gadget, your ultimate
              companion in navigating the unpredictable landscape of modern
              life, providing you with unparalleled protection and peace of mind
              every step of the way.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/smartgadget-7af95.appspot.com/o/P2-Banner-pix%2Fearbud.jpg?alt=media&token=f256b557-88b0-42d8-bc9a-7ddccdef05f9"
                          alt="earbud"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/smartgadget-7af95.appspot.com/o/P2-Banner-pix%2FAsusLaptop.png?alt=media&token=fefd4e94-f659-4aae-b3d1-f13e8e71c488"
                          alt="Asus Laptop"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/smartgadget-7af95.appspot.com/o/P2-Banner-pix%2Fone%2B.png?alt=media&token=9f5ab6c4-884a-4035-9a83-4ffb93bb3776"
                          alt="one+ phone"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/smartgadget-7af95.appspot.com/o/P2-Banner-pix%2FPixel8.png?alt=media&token=f05f50de-1d49-4d9f-996d-7b116b7b637b"
                          alt="pixel8"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/smartgadget-7af95.appspot.com/o/P2-Banner-pix%2Fplaystation.jpg?alt=media&token=efa87d1b-45c9-4512-8d82-6e585ed2b453"
                          alt="playstation"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/smartgadget-7af95.appspot.com/o/P2-Banner-pix%2FsamPhone.jpg?alt=media&token=0b904e35-0f9e-4c1d-80a6-b8f88b308859"
                          alt="samsung phone"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/smartgadget-7af95.appspot.com/o/P2-Banner-pix%2Fspeaker.jpg?alt=media&token=3486635f-df2f-4081-a128-447b464a14d7"
                          alt="speaker"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-gradient-to-r from-blue-800 to-blue-500 rounded shadow-md hover:shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 px-8 py-3 text-center font-medium text-baloo "
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
