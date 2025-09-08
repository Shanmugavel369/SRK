export const routesConfig = [
  {
    path: "/",
    breadcrumb: "Home",
    children: [
      { path: "about", breadcrumb: "About" },
      { 
        path: "blogs", 
        breadcrumb: "Blogs",
        children: [
          { 
            path: ":id",
            breadcrumb: (params, blogTitle) => blogTitle || `Blog ${params.id}`
          }
        ]
      },
      { path: "clients", breadcrumb: "Clients" },
      { path: "consult", breadcrumb: "Consult" },
      { path: "contact", breadcrumb: "Contact" },
    ],
  },
];
