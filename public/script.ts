type CardDeals = {
  title: string;
  image: string;
  price: string;
  icon_area: string;
  icon_wifi: string;
  icon_person: string;
  icon_star: string;
  ukuran_area: number;
  max_person: number;
  max_wifi: number;
  rates: string;
};

type CategoriesType = {
  title: string;
  icon: string;
  value: string;
};

export const CategoriesCard: CategoriesType[] = [
  {
    title: "Star Hill",
    icon: "/assets/teleskop.svg",
    value: "18,394"
  },
  {
    title: "Apartment",
    icon: "/assets/buildings.svg",
    value: "18,394"
  }
];

export const Deals: CardDeals[] = [
  {
    title: "De Flecce",
    image: "/assets/card-1.png",
    price: "$47,298",
    icon_area: "/assets/icon/format-square.svg",
    icon_wifi: "/assets/icon/wifi.svg",
    icon_person: "/assets/icon/profile-user-white.svg",
    icon_star: "/assets/icon/Star.svg",
    ukuran_area: 529,
    max_person: 3,
    max_wifi: 10,
    rates: "4.5/5"
  },
  {
    title: "Party Every",
    image: "/assets/card-2.png",
    price: "$18,983",
    icon_area: "/assets/icon/format-square.svg",
    icon_wifi: "/assets/icon/wifi.svg",
    icon_person: "/assets/icon/profile-user-white.svg",
    icon_star: "/assets/icon/Star.svg",
    ukuran_area: 529,
    max_person: 3,
    max_wifi: 10,
    rates: "4.5/5"
  },
  {
    title: "Brown Hall",
    image: "/assets/card-3.png",
    price: "$84,209",
    icon_area: "/assets/icon/format-square.svg",
    icon_wifi: "/assets/icon/wifi.svg",
    icon_person: "/assets/icon/profile-user-white.svg",
    icon_star: "/assets/icon/Star.svg",
    ukuran_area: 529,
    max_person: 3,
    max_wifi: 10,
    rates: "4.5/5"
  },
  {
    title: "Mini Max",
    image: "/assets/card-4.png",
    price: "$14,221",
    icon_area: "/assets/icon/format-square.svg",
    icon_wifi: "/assets/icon/wifi.svg",
    icon_person: "/assets/icon/profile-user-white.svg",
    icon_star: "/assets/icon/Star.svg",
    ukuran_area: 529,
    max_person: 3,
    max_wifi: 10,
    rates: "4.5/5"
  }
];
