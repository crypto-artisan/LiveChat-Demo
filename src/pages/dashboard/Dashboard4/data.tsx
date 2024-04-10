import avatar1 from "../../../assets/images/users/user-1.jpg";
import avatar2 from "../../../assets/images/users/user-2.jpg";
import avatar3 from "../../../assets/images/users/user-3.jpg";
import avatar4 from "../../../assets/images/users/user-4.jpg";
import avatar5 from "../../../assets/images/users/user-5.jpg";
import avatar6 from "../../../assets/images/users/user-6.jpg";
import avatar7 from "../../../assets/images/users/user-7.jpg";
import avatar8 from "../../../assets/images/users/user-8.jpg";
import avatar9 from "../../../assets/images/users/user-9.jpg";
import avatar10 from "../../../assets/images/users/user-10.jpg";

interface TeamMembers {
  id?: number;
  image: string;
  name: string;
}

export interface ProjectDetailType {
  id: number;
  name: string;
  startDate: string;
  dueDate: string;
  teamMembers: TeamMembers[];
  status: string;
  clients: string;
}

const projectsDetails: ProjectDetailType[] = [
  {
    id: 1,
    name: "App design and development",
    startDate: "Jan 03, 2015",
    dueDate: "Oct 12, 2018",
    teamMembers: [
      {
        image: avatar1,
        name: "Mat Helme",
      },
      {
        image: avatar2,
        name: "Michael Zenaty",
      },
      {
        image: avatar3,
        name: "James Anderson",
      },
      {
        image: avatar5,
        name: "Username",
      },
    ],
    status: "Work in Progress",
    clients: "Halette Boivin",
  },
  {
    id: 2,
    name: "Coffee detail page - Main Page",
    startDate: "Sep 21, 2016",
    dueDate: "May 05, 2018",
    teamMembers: [
      {
        image: avatar3,
        name: "Mat Helme",
      },
      {
        image: avatar4,
        name: "Michael Zenaty",
      },
      {
        image: avatar5,
        name: "Username",
      },
    ],
    status: "Pending",
    clients: "Durandana Jolicoeur",
  },
  {
    id: 3,
    name: "Poster illustation design",
    startDate: "Mar 08, 2018",
    dueDate: "Sep 22, 2018",
    teamMembers: [
      {
        image: avatar2,
        name: "Mat Helme",
      },
      {
        image: avatar6,
        name: "Michael Zenaty",
      },
      {
        image: avatar7,
        name: "Username",
      },
    ],
    status: "Completed",
    clients: "Lucas Sabourin",
  },
  {
    id: 4,
    name: "Drinking bottle graphics",
    startDate: "Oct 10, 2017",
    dueDate: "May 07, 2018",
    teamMembers: [
      {
        image: avatar9,
        name: "Mat Helme",
      },
      {
        image: avatar10,
        name: "Michael Zenaty",
      },
      {
        image: avatar1,
        name: "Username",
      },
    ],
    status: "Work in Progress",
    clients: "Donatien Brunelle",
  },
  {
    id: 5,
    name: "Landing page design - Home",
    startDate: "Coming Soon",
    dueDate: "May 25, 2021",
    teamMembers: [
      {
        image: avatar5,
        name: "Mat Helme",
      },
      {
        image: avatar8,
        name: "Michael Zenaty",
      },
      {
        image: avatar2,
        name: "James Anderson",
      },
      {
        image: avatar7,
        name: "Username",
      },
    ],
    status: "Coming Soon",
    clients: "Karel Auberjo",
  },
];

export { projectsDetails };
