const Navbar = () => {
  return (
    <div className="container mx-auto px-8 py-7 text-white ">
      <nav className="bg-[#141414] z-50 py-5 px-2 rounded-2xl flex flex-row items-center justify-between relative">
        <span className="flex  items-center justify-center gap-x-2 px-4">
          <img src="./assets/icon/logo-vector.svg" alt="" />
          <h1 className="text-white text-2xl font-bold">Nidejia</h1>
        </span>
        <div className="hidden md:block w-3/4">
          <div className="flex items-center justify-between">
            <ul className="flex items-center flex-row ml-20  gap-x-6 font-semibold">
              <li>Featured</li>
              <li>Categories</li>
              <li>Testimonials</li>
              <li>About</li>
            </ul>
            <div className="flex gap-2 font-medium px-4">
              <button className="cursor-pointer bg-gray-800 outline-none py-3 px-5 rounded-full">
                Sign In
              </button>
              <button className="cursor-pointer text-black outline-none bg-tomato py-3 px-5 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
