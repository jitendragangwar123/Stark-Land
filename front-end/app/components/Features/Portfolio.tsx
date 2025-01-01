import UpRightArrowIcon from "@/app/svg/UpRightArrowIcon";

const Attestations = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 feature">
      <div className="px-2 md:px-8">
        <h2 className="flex font-serif items-center gap-2 text-2xl font-semibold">
          <span>Portfolio</span>
          <span>
            <UpRightArrowIcon />
          </span>
        </h2>
        <p className="text-lg font-serif opacity-75">
          Welcome to our platform, where you can effortlessly manage and track your real estate investments.
          Simply tap the portfolio icon on the top bar to access the current value of your holdings.
          Our intuitive interface allows you to monitor the appreciation of your properties in real time,
          providing you with valuable insights into your investment performance.
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 feat-img-left" aria-hidden>
        <div className="relative col-start-1 row-start-1 w-90 rounded-[8px] shadow-lg overflow-hidden">
          <img
            src="/property.png"
            alt="portfolio"
            className="w-full h-full object-cover dark-img"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>

    </div>
  );
};

export default Attestations;
