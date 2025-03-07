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
        <CardDeals />
      </div>
    </section>
  );
};

export default LatestDeals;
