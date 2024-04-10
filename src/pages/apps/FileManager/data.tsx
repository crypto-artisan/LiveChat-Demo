import Avatar1 from "../../../assets/images/users/user-1.jpg";
import Avatar2 from "../../../assets/images/users/user-2.jpg";
import Avatar3 from "../../../assets/images/users/user-3.jpg";
import Avatar4 from "../../../assets/images/users/user-4.jpg";
import Avatar5 from "../../../assets/images/users/user-5.jpg";
import Avatar6 from "../../../assets/images/users/user-6.jpg";
import Avatar7 from "../../../assets/images/users/user-7.jpg";
import Avatar8 from "../../../assets/images/users/user-8.jpg";
import Avatar9 from "../../../assets/images/users/user-9.jpg";
import Avatar10 from "../../../assets/images/users/user-10.jpg";

export interface QuickAccessFileTypes {
  icon: string;
  name: string;
  size: string;
}

export interface RecentFileTypes {
  name: string;
  icon: string;
  modifiedDate: string;
  modifiedBy: string;
  size: string;
  owner: string;
  members: {
    image: string;
    name: string;
  }[];
}

const quickAccessFiles: QuickAccessFileTypes[] = [
  {
    icon: "mdi mdi-folder-zip font-18",
    name: "Ubold-sketch-design.zip",
    size: "2.3 MB",
  },
  {
    icon: "mdi mdi-folder font-18",
    name: "Compile Version",
    size: "87.2 MB",
  },
  {
    icon: "mdi mdi-folder-zip-outline font-18",
    name: "admin.zip",
    size: "45.1 MB",
  },
  {
    icon: "mdi mdi-file-pdf-outline font-18",
    name: "Docs PDF",
    size: "7.5 MB",
  },
  {
    icon: "mdi mdi-file-pdf-outline font-18",
    name: "License-details.pdf",
    size: "784 KB",
  },
  {
    icon: "mdi mdi-folder-account font-18",
    name: "Purchase Verification",
    size: "87.2 MB",
  },
  {
    icon: "mdi mdi-folder-account font-18",
    name: "UBold Integrations",
    size: "874 MB",
  },
];

const recentFiles: RecentFileTypes[] = [
  {
    name: "App Design & Development",
    icon: "folder",
    modifiedDate: "Jan 03, 2020",
    modifiedBy: "Andrew",
    size: "128 MB",
    owner: "Danielle Thompson",
    members: [
      {
        image: Avatar1,
        name: "Mat Helme",
      },
      {
        image: Avatar2,
        name: "Michael Zenaty",
      },
      {
        image: Avatar3,
        name: "James Anderson",
      },
      {
        image: Avatar5,
        name: "Username",
      },
    ],
  },
  {
    name: "Hyper-sketch-design.zip",
    icon: "file",
    modifiedDate: "Feb 13, 2020",
    modifiedBy: "Coderthemes",
    size: "521 MB",
    owner: "Coder Themes",
    members: [
      {
        image: Avatar4,
        name: "Mat Helme",
      },
      {
        image: Avatar1,
        name: "Michael Zenaty",
      },
      {
        image: Avatar6,
        name: "James Anderson",
      },
    ],
  },
  {
    name: "Annualreport.pdf",
    icon: "file-text",
    modifiedDate: "Dec 18, 2019",
    modifiedBy: "Alejandro",
    size: "7.2 MB",
    owner: "Gary Coley",
    members: [
      {
        image: Avatar9,
        name: "Mat Helme",
      },
      {
        image: Avatar7,
        name: "Michael Zenaty",
      },
      {
        image: Avatar3,
        name: "James Anderson",
      },
    ],
  },
  {
    name: "Wireframes",
    icon: "folder",
    modifiedDate: "Nov 25, 2019",
    modifiedBy: "Dunkle",
    size: "54.2 MB",
    owner: "Jasper Rigg",
    members: [
      {
        image: Avatar1,
        name: "Mat Helme",
      },
      {
        image: Avatar8,
        name: "Michael Zenaty",
      },
      {
        image: Avatar2,
        name: "James Anderson",
      },
      {
        image: Avatar5,
        name: "Username",
      },
    ],
  },
  {
    name: "Documentation.docs",
    icon: "file-text",
    modifiedDate: "Feb 9, 2020",
    modifiedBy: "Justin",
    size: "8.3 MB",
    owner: "Cooper Sharwood",
    members: [
      {
        image: Avatar3,
        name: "Mat Helme",
      },
      {
        image: Avatar10,
        name: "Michael Zenaty",
      },
    ],
  },
];

export { quickAccessFiles, recentFiles };
