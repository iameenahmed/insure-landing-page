import snappyProcessIcon from "/src/assets/icon-snappy-process.svg";
import affordablePricesIcon from "/src/assets/icon-affordable-prices.svg";
import peopleFirstIcon from "/src/assets/icon-people-first.svg";

interface Feature {
  id: number;
  icon: string;
  title: string;
  detail: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: snappyProcessIcon,
    title: "Snappy Process",
    detail:
      "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
  },
  {
    id: 2,
    icon: affordablePricesIcon,
    title: "Affordable Prices",
    detail:
      " We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    id: 3,
    icon: peopleFirstIcon,
    title: "People First",
    detail:
      "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
  },
];

export default features;
