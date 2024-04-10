import avatar3 from "../../../../assets/images/users/user-3.jpg";
import avatar4 from "../../../../assets/images/users/user-4.jpg";
import avatar6 from "../../../../assets/images/users/user-6.jpg";

import img1 from "../../../../assets/images/small/img-1.jpg";
import img2 from "../../../../assets/images/small/img-2.jpg";
import img3 from "../../../../assets/images/small/img-3.jpg";

export interface CommentsType {
  id: number;
  content: string;
  postedOn: string;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
  isLiked?: boolean;
  replies?: CommentsType[];
}

export interface PostTypes {
  id: number;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
  postedOn: string;
  content: string;
  isLiked: boolean;
  totalLikes?: string;
  totalComments?: string;
  comments?: CommentsType[];
  scope?: string;
  engagement: boolean;
}

const posts: PostTypes[] = [
  {
    id: 1,
    author: {
      id: 4,
      name: "Jeremy Tomlinson",
      avatar: avatar3,
    },
    postedOn: "about 2 minuts ago",
    content:
      "<p>Story based around the idea of time lapse, animation to post soon!</p>" +
      '<img src="' +
      img1 +
      '" alt="post-img" class="rounded me-1" height="60" />' +
      '<img src="' +
      img2 +
      '" alt="post-img" class="rounded me-1" height="60" />' +
      '<img src="' +
      img3 +
      '" alt="post-img" class="rounded me-1" height="60" />',
    isLiked: false,
    engagement: true,
  },
  {
    id: 2,
    author: {
      id: 1,
      name: "Thelma Fridley",
      avatar: avatar4,
    },
    postedOn: "about 1 hour ago",
    content:
      '<div class="font-16 text-center fst-italic text-dark"><i class="mdi mdi-format-quote-open font-20"></i> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</div>',
    totalLikes: "28",
    totalComments: "",
    isLiked: true,
    comments: [
      {
        id: 1,
        content: "Nice work, makes me think of The Money Pit.",
        postedOn: "3 hours ago",
        author: {
          id: 2,
          name: "Jeremy Tomlinson",
          avatar: avatar3,
        },
        isLiked: true,
        replies: [
          {
            id: 3,
            content:
              "i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.",
            postedOn: "5 hours ago",
            author: {
              id: 3,
              name: "Thelma Fridley",
              avatar: avatar4,
            },
          },
        ],
      },
    ],
    engagement: true,
  },
  {
    id: 3,
    author: {
      id: 4,
      name: "Martin Williamson",
      avatar: avatar6,
    },
    postedOn: "about 20 minuts ago",
    scope: "Public",
    content:
      "<p>The parallax is a little odd but O.o that house build is awesome!!</p>" +
      '<iframe src="https://player.vimeo.com/video/87993762" height="300" class="img-fluid border-0"></iframe>',
    isLiked: false,
    engagement: false,
  },
];

export { posts };
