import { CategoriesCard } from "../../public/script";

const Categories = () => {
  return (
    <section className="flex mt-32 flex-col bg-black_text px-44 py-10 text-white">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Categories</h1>
          <p className="text-base text-paragraph">We provide everything</p>
        </div>
        <button className="bg-tomato py-3 px-5 text-black rounded-full font-semibold">
          Explore All
        </button>
      </div>
      <div className="mt-7 grid grid-cols-4 gap-10">
        {CategoriesCard.map((data, index) => {
          return (
            <div
              key={index}
              className="flex px-6 py-3 rounded-2xl items-center gap-3 bg-black_card"
            >
              <img src={data.icon} alt="" />
              <div>
                <h3 className="text-lg font-bold">{data.title}</h3>
                <p>{data.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
