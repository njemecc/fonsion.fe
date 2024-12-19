export const Header = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mt-20">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4  md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://res.cloudinary.com/traveltripperweb/image/upload/c_fit,f_auto,h_1200,q_auto,w_1200/v1650651157/kksbbh3d9s1ocfnvqvlw.jpg"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-appBrown uppercase rounded-full bg-teal-accent-400">
            Fonsion
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-appNavy sm:text-4xl sm:leading-none">
            Where Everything you
            <br className="hidden md:block" />
            can imagine{" "}
            <span className="inline-block text-deep-purple-accent-400">
              is real
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            From her iconic Art Deco style to her ingenious American
            construction, the “Grand Old Lady” has been a striking component of
            the New York skyline, towering above all others since her 1930
            inception. Today, The <b className="text-appBrown">Fonsion</b>{" "}
            continues to enchant visitors, offering an upscale stay in a
            historical icon. Our wide array of Art Deco-inspired rooms and
            suites is accented by personal touches and city views, beckoning you
            to Midtown Manhattan to add your name to our list of luminary
            guests.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
