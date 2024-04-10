import user1 from "../../../assets/images/users/user-1.jpg";
import user2 from "../../../assets/images/users/user-2.jpg";
import user3 from "../../../assets/images/users/user-3.jpg";
import user4 from "../../../assets/images/users/user-4.jpg";
import user5 from "../../../assets/images/users/user-5.jpg";
import user6 from "../../../assets/images/users/user-6.jpg";
import user7 from "../../../assets/images/users/user-7.jpg";
import user8 from "../../../assets/images/users/user-8.jpg";
import user9 from "../../../assets/images/users/user-9.jpg";
import user10 from "../../../assets/images/users/user-10.jpg";

export interface ProjectsList {
  id?: number;
  title?: string;
  companyName?: string;
  state?: string;
  shortDesc?: string;
  totalTasks?: number;
  totalComments?: number;
  teamMembers?: {
    image: string;
    name: string;
  }[];
  progress?: number;
  taskCompleted: number;
}

const projects: ProjectsList[] = [
  {
    id: 1,
    title: "New Admin Design",
    companyName: "Orange Limited",
    state: "Finished",
    shortDesc:
      "With supporting text below as a natural lead-in to additional contenposuere erat a ante",
    totalTasks: 78,
    totalComments: 214,
    teamMembers: [
      {
        image: user1,
        name: "Mat Helme",
      },
      {
        image: user2,
        name: "Michael Zenaty",
      },
      {
        image: user3,
        name: "James Anderson",
      },
      {
        image: user4,
        name: "Mat Helme",
      },
      {
        image: user5,
        name: "Username",
      },
    ],
    taskCompleted: 28,
    progress: 34,
  },
  {
    id: 2,
    title: "App Design and Development",
    companyName: "Moondust Softwares",
    state: "Ongoing",
    shortDesc:
      "A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
    totalTasks: 85,
    totalComments: 103,
    teamMembers: [
      {
        image: user6,
        name: "Mat Helme",
      },
      {
        image: user7,
        name: "Michael Zenaty",
      },
      {
        image: user8,
        name: "James Anderson",
      },
    ],
    taskCompleted: 55,
    progress: 80,
  },
  {
    id: 3,
    title: "Landing page Design",
    companyName: "Rose Technologies",
    state: "Finished",
    shortDesc:
      "You need to be sure there isn't anything embarrassing hidden in the middle of text",
    totalTasks: 42,
    totalComments: 65,
    teamMembers: [
      {
        image: user9,
        name: "Mat Helme",
      },
      {
        image: user10,
        name: "Michael Zenaty",
      },
      {
        image: user1,
        name: "James Anderson",
      },
      {
        image: user3,
        name: "Mat Helme",
      },
    ],
    taskCompleted: 21,
    progress: 50,
  },
  {
    id: 4,
    title: "Custom Software Development",
    companyName: "Apple Navigations",
    state: "Ongoing",
    shortDesc:
      "You need to be sure there isn't anything embarrassing hidden in the middle of text",
    totalTasks: 95,
    totalComments: 83,
    teamMembers: [
      {
        image: user5,
        name: "Mat Helme",
      },
      {
        image: user8,
        name: "Michael Zenaty",
      },
      {
        image: user9,
        name: "James Anderson",
      },
    ],
    taskCompleted: 70,
    progress: 68,
  },
  {
    id: 5,
    title: "Website Redesign",
    companyName: "Enigma Navigations",
    state: "Ongoing",
    shortDesc:
      "There are many variations of passages of Lorem Ipsum available natural lead-in to additional",
    totalTasks: 36,
    totalComments: 78,
    teamMembers: [
      {
        image: user3,
        name: "Mat Helme",
      },
      {
        image: user4,
        name: "Michael Zenaty",
      },
      {
        image: user5,
        name: "James Anderson",
      },
      {
        image: user1,
        name: "Mat Helme",
      },
    ],
    taskCompleted: 12,
    progress: 33,
  },
  {
    id: 6,
    title: "Multipurpose Landing Template",
    companyName: "Pride Softwares",
    state: "Finished",
    shortDesc:
      "With supporting text below as a natural lead-in to additional contenposuere erat a ante",
    totalTasks: 30,
    totalComments: 148,
    teamMembers: [
      {
        image: user6,
        name: "Mat Helme",
      },
      {
        image: user7,
        name: "Michael Zenaty",
      },
      {
        image: user8,
        name: "James Anderson",
      },
    ],
    taskCompleted: 28,
    progress: 95,
  },
];

export { projects };
