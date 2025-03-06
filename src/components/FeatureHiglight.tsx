const ListRates = () => {
  const data = [
    {
      icon: "/assets/icon/house-2.svg",
      value: "382M",
      label: "Kos Available"
    },
    {
      icon: "/assets/icon/profile-2user.svg",
      value: "9/10",
      label: "People Happy"
    },
    {
      icon: "/assets/icon/security-user.svg",
      value: "100%",
      label: "High Security"
    },
    {
      icon: "/assets/icon/global.svg",
      value: "183",
      label: "Countries"
    }
  ];

  return (
    <div className="container mx-auto mt-11">
      <div className="py-7 rounded-2xl relative z-10 bg-black_text mx-9 px-12 flex items-center justify-between">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row items-center px-7 py-1 gap-3 ${
              index !== data.length - 1 ? "border-r-2 border-color_border" : ""
            }`}
          >
            <span className="bg-tomato px-5 py-5 rounded-full">
              <img src={item.icon} alt={item.label} />
            </span>
            <div className="flex flex-col text-white items-center justify-center">
              <h1 className="font-bold text-lg">{item.value}</h1>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListRates;
