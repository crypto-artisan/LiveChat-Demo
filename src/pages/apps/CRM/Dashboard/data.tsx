import avatar1 from "../../../../assets/images/users/user-1.jpg";
import avatar2 from "../../../../assets/images/users/user-2.jpg";
import avatar3 from "../../../../assets/images/users/user-3.jpg";
import avatar4 from "../../../../assets/images/users/user-4.jpg";
import avatar5 from "../../../../assets/images/users/user-5.jpg";
import avatar6 from "../../../../assets/images/users/user-6.jpg";

interface PerformanceDetailsItems {
  id: number;
  user: string;
  position: string;
  leads: number;
  deals: number;
  tasks: number;
}

interface RecentLeadsItems {
  id: number;
  name: string;
  avatar: string;
  email: string;
  status: string;
}

const performanceDetails: PerformanceDetailsItems[] = [
  {
    id: 1,
    user: "Jeremy Young",
    position: "Senior Sales Executive",
    leads: 187,
    deals: 154,
    tasks: 49,
  },
  {
    id: 2,
    user: "Thomas Krueger",
    position: "Senior Sales Executive",
    leads: 235,
    deals: 127,
    tasks: 83,
  },
  {
    id: 3,
    user: "Pete Burdine",
    position: "Senior Sales Executive",
    leads: 365,
    deals: 148,
    tasks: 62,
  },
  {
    id: 4,
    user: "Mary Nelson",
    position: "Senior Sales Executive",
    leads: 753,
    deals: 159,
    tasks: 258,
  },
  {
    id: 5,
    user: "Kevin Grove",
    position: "Senior Sales Executive",
    leads: 458,
    deals: 126,
    tasks: 73,
  },
];

const recentLeads: RecentLeadsItems[] = [
  {
    id: 1,
    name: "Risa Pearson",
    avatar: avatar2,
    email: "richard.john@mail.com",
    status: "Cold",
  },
  {
    id: 2,
    name: "Margaret D. Evans",
    avatar: avatar3,
    email: "margaret.evans@rhyta.com",
    status: "Lost",
  },
  {
    id: 3,
    name: "Bryan J. Luellen",
    avatar: avatar4,
    email: "bryuellen@dayrep.com",
    status: "Won",
  },
  {
    id: 4,
    name: "Kathryn S. Collier",
    avatar: avatar5,
    email: "collier@jourrapide.com",
    status: "Cold",
  },
  {
    id: 5,
    name: "Timothy Kauper",
    avatar: avatar1,
    email: "thykauper@rhyta.com",
    status: "Cold",
  },
  {
    id: 6,
    name: "Zara Raws",
    avatar: avatar6,
    email: "austin@dayrep.com",
    status: "Won",
  },
];

export { performanceDetails, recentLeads };
