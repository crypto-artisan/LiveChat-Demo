export interface ItemType {
  label: string;
  icon?: string;
  isTitle?: boolean;
  level?: number;
  className?: string;
  children?: Array<ItemType>;
}

const sitemap1: ItemType = {
  label: "Ubold Pages",
  icon: "mdi mdi-adjust",
  isTitle: true,
  children: [
    {
      label: "Dashboards",
      icon: "fe-airplay",
      children: [
        {
          label: "Analytics",
        },
        {
          label: "Minimal",
        },
        {
          label: "eCommerce",
        },
      ],
    },
    {
      label: "Applications",
      icon: "fe-pocket ",
      children: [
        {
          label: "CRM",
          children: [
            {
              label: "Dashboard",
            },
            {
              label: "Contacts",
            },
            {
              label: "Opportunities",
            },
            {
              label: "Leads",
            },
            {
              label: "Customers",
            },
          ],
        },
        {
          label: "eCommerce",
          children: [
            {
              label: "Dashboard",
            },
            {
              label: "Products",
            },
            {
              label: "Product Detail",
            },
            {
              label: "Product Edit",
            },
            {
              label: "Orders",
            },
            {
              label: "Sellers",
            },
          ],
        },
        {
          label: "Email",
          children: [
            {
              label: "Inbox",
            },
            {
              label: "Email Read",
            },
            {
              label: "Compose",
            },
          ],
        },
        {
          label: "More Apps",
        },
      ],
    },
    {
      label: "Layouts",
      icon: "fe-sidebar",
    },
    {
      label: "Sitemap",
      icon: "fe-package",
    },
  ],
};

const sitemap2: ItemType = {
  label: "Ubold",
  icon: "mdi mdi-adjust",
  isTitle: true,
  level: 0,
  children: [
    {
      label: "About",
      level: 1,
      children: [
        {
          level: 2,
          label: "Business",
        },
        {
          label: "Philosophy",
        },
        {
          label: "Staff",
        },
      ],
    },
    {
      label: "Works",
      level: 1,
      children: [
        {
          label: "2015",
          children: [
            {
              label: "Company",
            },
            {
              label: "Service",
            },
            {
              label: "Contest",
            },
          ],
        },
        {
          label: "2014",
          children: [
            {
              label: "Company",
            },
            {
              label: "Service",
            },
            {
              label: "Contest",
            },
          ],
        },
        {
          label: "2013",
          children: [
            {
              label: "Company",
            },
            {
              label: "Service",
            },
            {
              label: "Contest",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      level: 1,
    },
    {
      label: "Sitemap",
      level: 1,
    },
    {
      label: "Recruit",
      level: 1,
      children: [
        {
          label: "Web Director",
        },
        {
          label: "Web Designer",
        },
        {
          label: "Web Engineer",
        },
      ],
    },
  ],
};

const sitemap3: ItemType = {
  label: "Ubold",
  icon: "mdi mdi-adjust",
  isTitle: true,
  children: [
    {
      label: "About",
      className: "text-primary text-uppercase fw-bold",
      children: [
        {
          label: "Business",
          className: "text-primary",
        },
        {
          label: "Philosophy",
          className: "text-primary",
        },
        {
          label: "Staff",
          className: "text-primary",
        },
      ],
    },
    {
      label: "Works",
      className: "text-success text-uppercase fw-bold",
      children: [
        {
          label: "2015",
          className: "text-success",
          children: [
            {
              label: "Company",
            },
            {
              label: "Service",
            },
            {
              label: "Contest",
            },
          ],
        },
        {
          label: "2014",
          className: "text-success",
          children: [
            {
              label: "Company",
            },
            {
              label: "Service",
            },
            {
              label: "Contest",
            },
          ],
        },
        {
          label: "2013",
          className: "text-success",
          children: [
            {
              label: "Company",
            },
            {
              label: "Service",
            },
            {
              label: "Contest",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      className: "text-danger text-uppercase fw-bold",
    },
    {
      label: "Sitemap",
      className: "text-info text-uppercase fw-bold",
    },
    {
      label: "Recruit",
      className: "text-warning text-uppercase fw-bold",
      children: [
        {
          label: "Web Director",
          className: "text-warning",
        },
        {
          label: "Web Designer",
          className: "text-warning",
        },
        {
          label: "Web Engineer",
          className: "text-warning",
        },
      ],
    },
  ],
};

export { sitemap1, sitemap2, sitemap3 };
