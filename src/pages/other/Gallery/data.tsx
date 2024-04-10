import user1 from "../../../assets/images/users/user-2.jpg";
import user2 from "../../../assets/images/users/user-3.jpg";
import user3 from "../../../assets/images/users/user-4.jpg";
import user4 from "../../../assets/images/users/user-5.jpg";
import user5 from "../../../assets/images/users/user-6.jpg";
import user6 from "../../../assets/images/users/user-7.jpg";
import user8 from "../../../assets/images/users/user-9.jpg";
import user9 from "../../../assets/images/users/user-10.jpg";

import img1 from "../../../assets/images/small/img-1.jpg";
import img2 from "../../../assets/images/small/img-2.jpg";
import img3 from "../../../assets/images/small/img-3.jpg";
import img4 from "../../../assets/images/small/img-4.jpg";
import img5 from "../../../assets/images/small/img-5.jpg";
import img6 from "../../../assets/images/small/img-6.jpg";
import img7 from "../../../assets/images/small/img-7.jpg";

export interface ImageType {
  src: string;
  caption: string;
}

export interface GalleryItem {
  id?: number;
  image: ImageType;
  title?: string;
  userName?: string;
  avatar?: string;
  isLiked?: boolean;
  category?: string[];
}

const gallery: GalleryItem[] = [
  {
    id: 1,
    image: {
      src: img1,
      caption: "Screenshot-1",
    },
    title: "Man wearing black jacket",
    userName: "Justin Coke",
    avatar: user2,
    isLiked: false,
    category: ["web", "illustrator"],
  },
  {
    id: 2,
    image: {
      src: img2,
      caption: "Screenshot-2",
    },
    title: "Snow covered mountain",
    userName: "Toni Sanchez",
    avatar: user1,
    isLiked: false,
    category: ["web", "graphic", "photography"],
  },
  {
    id: 3,
    image: {
      src: img3,
      caption: "Screenshot-3",
    },
    title: "Woman sitting on rock",
    userName: "Maria Crowder",
    avatar: user4,
    isLiked: false,
    category: ["web", "illustrator", "photography"],
  },
  {
    id: 4,
    image: {
      src: img4,
      caption: "Screenshot-4",
    },
    title: "Smiling woman's face",
    userName: "Charles East",
    avatar: user5,
    isLiked: false,
    category: ["graphic", "illustrator"],
  },
  {
    id: 5,
    image: {
      src: img5,
      caption: "Screenshot-5",
    },
    title: "Brown tabby cat sitting on concrete",
    userName: "David Buchanan",
    avatar: user6,
    isLiked: false,
    category: ["web", "illustrator"],
  },
  {
    id: 6,
    image: {
      src: img6,
      caption: "Screenshot-6",
    },
    title: "Woman walking between brown",
    userName: "Lee Moore",
    avatar: user6,
    isLiked: false,
    category: ["graphic", "photography"],
  },
  {
    id: 7,
    image: {
      src: img7,
      caption: "Screenshot-7",
    },
    title: "Landscape photography of mountains",
    userName: "Julia Cruz",
    avatar: user8,
    isLiked: false,
    category: ["web", "illustrator"],
  },
  {
    id: 8,
    image: {
      src: img1,
      caption: "Screenshot-1",
    },
    title: "Man wearing black jacket",
    userName: "Craig Creek",
    avatar: user8,
    isLiked: false,
    category: ["web", "illustrator"],
  },
  {
    id: 9,
    image: {
      src: img2,
      caption: "Screenshot-2",
    },
    title: "Snow covered mountain",
    userName: "Gloria Pitt",
    avatar: user9,
    isLiked: false,
    category: ["graphic", "photography"],
  },
  {
    id: 10,
    image: {
      src: img3,
      caption: "Screenshot-3",
    },
    title: "Woman sitting on rock",
    userName: "Silas Seay",
    avatar: user3,
    isLiked: false,
    category: ["web", "illustrator"],
  },
  {
    id: 11,
    image: {
      src: img4,
      caption: "Screenshot-4",
    },
    title: "Smiling woman's face",
    userName: "Linda Ward",
    avatar: user4,
    isLiked: false,
    category: ["graphic", "illustrator"],
  },
  {
    id: 12,
    image: {
      src: img5,
      caption: "Screenshot-5",
    },
    title: "Brown tabby cat sitting on concrete",
    userName: "Becky Eley",
    avatar: user5,
    isLiked: false,
    category: ["web", "illustrator"],
  },
];

export { gallery };
