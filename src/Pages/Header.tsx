import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <div
      className="w-full relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/assets/header-img.png")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>
      <Navbar />
      <div className="py-7 mx-28 px-12 mt-24 flex flex-col gap-y-6 w-3/5 relative z-10 text-white items-start h-full">
        <h1 className="text-6xl font-bold">
          Find Glorious Living
          <br />
          And Loving Space
        </h1>
        <p>
          Dolor house comfortable si amet with cheap <br /> price that also
          lorem when you need grow.
        </p>
        <div className="flex flex-row rounded-full py-4 w-full ">
          <input
            type="text"
            className="bg-black_text px-6 rounded-l-full w-96 py-4 outline-none"
            placeholder="Search by city or country..."
          />
          <button className="bg-tomato px-6 py-4 text-lg rounded-r-full text-black font-medium">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
