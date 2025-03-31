import { Deals } from "../../public/script.ts";

const CardDeals = () => {
  return (
    <section className="flex mt-10 flex-col md:flex-row gap-7 text-white">
      {Deals.map((data, index) => (
        <div
          key={index}
          className="w-64 rounded-2xl overflow-hidden shadow-lg "
        >
          <div className="relative ">
            <img
              className="w-full h-80 object-cover object-center brightness-75"
              src={data.image}
              alt={`Gambar + ${index + 1}`}
            />
            <div className="absolute bottom-0 left-0 right-0 px-4 h-24 bg-gradient-to-t via-[#050211]/100 from-[#050211]/100 to-transparent">
              <div className="flex justify-between">
                <div className="mb-1">
                  <h2 className="text-xl font-semibold">{data.title}</h2>
                  <p className="text-gray-300 text-sm font-semibold">
                    {data.price}
                    <span className="font-normal">/mo</span>
                  </p>
                </div>
                <span className="flex items-center gap-1">
                  <img src={data.icon_star} alt="" />
                  <p className="text-md font-medium">{data.rates}</p>
                </span>
              </div>
              {/* Bottom */}
              <div className="flex mt-3 mb-1 justify-between items-center">
                <span className="flex gap-1">
                  <img src={data.icon_area} alt="" />
                  <p className="text-sm">{data.ukuran_area}</p>
                </span>
                <span className="flex gap-1">
                  <img src={data.icon_person} alt="" />
                  <p className="text-sm">{data.max_person}</p>
                </span>
                <span className="flex gap-1">
                  <img src={data.icon_wifi} alt="" />
                  <p className="text-sm">{data.max_wifi}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardDeals;
