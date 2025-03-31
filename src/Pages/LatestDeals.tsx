import CardDeals from "../components/CardDeals";

const LatestDeals = () => {
  return (
    <section className="container mx-auto min-h-screen mt-28">
      <div className="flex py-5 flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-3xl font-bold">Our Latest Deals</h1>
          <p className="text-paragraph text-base">
            Explore the beauty of architecture and living love
          </p>
        </div>

        <div className="relative flex items-center w-full max-w-6xl">
          <a className="absolute cursor-pointer ml-[-25px] z-10 bg-black_text p-3 rounded-full flex items-center justify-center shadow-lg">
            <img src="/assets/icon/arrow-left.svg" alt="Left Arrow" />
          </a>

          <CardDeals />

          <a className="absolute cursor-pointer right-4 z-10 bg-black_text p-3 rounded-full flex items-center justify-center shadow-lg">
            <img src="/assets/icon/arrow-right.svg" alt="Right Arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestDeals;
