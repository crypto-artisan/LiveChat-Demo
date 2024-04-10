import avatarImg2 from "../../../../assets/images/users/user-9.jpg";
import avatarImg3 from "../../../../assets/images/users/user-3.jpg";
import avatarImg4 from "../../../../assets/images/users/user-4.jpg";

interface CheckListItem {
  id: number;
  title: string;
  completed: boolean;
}

interface Comment {
  id: number;
  author: string;
  text: string;
  posted_on: string;
  author_avatar: string;
  replies?: Comment[];
}

interface AttachmentItem {
  id: number;
  filename: string;
  size: string;
}

export interface TaskItems {
  id?: number;
  title?: string;
  project_name?: string;
  assignee_avatar?: string;
  assigned_to?: string;
  due_date?: string;
  description?: string;
  checklists?: CheckListItem[];
  attachments?: AttachmentItem[];
  comments?: Comment[];
  completed?: boolean;
  stage?: string;
  subtasks?: string;
  priority?: string;
}

const Tasks: TaskItems[] = [
  {
    id: 1,
    title: "Draft the new contract document for sales team",
    project_name: "Examron Envirenment",
    assigned_to: "Arya Stark",
    assignee_avatar: avatarImg2,
    due_date: "Today 10am",
    completed: false,
    priority: "High",
    stage: "Todo",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: true },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: false,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: false,
      },
    ],
    description:
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB" },
      { id: 2, filename: "new-contarcts.docx", size: "1.3 MB" },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
  {
    id: 2,
    title: "iOS App home page",
    project_name: "Examron Envirenment",
    assigned_to: "James B",
    assignee_avatar: avatarImg3,
    due_date: "Today 4pm",
    completed: false,
    stage: "In-progress",
    priority: "High",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: false },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: false,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: false,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB" },
      { id: 2, filename: "new-contarcts.docx", size: "1.3 MB" },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
  {
    id: 3,
    title: "Write a release note",
    project_name: "Examron Envirenment",
    assigned_to: "Kevin C",
    assignee_avatar: avatarImg4,
    due_date: "Today 4pm",
    completed: false,
    stage: "In-progress",
    priority: "Medium",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: false },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: false,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: false,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB" },
      { id: 2, filename: "new-contarcts.docx", size: "1.3 MB" },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
];

export { Tasks };
