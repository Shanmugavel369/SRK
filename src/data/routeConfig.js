import { blogData } from "./Blog";


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
  breadcrumb: (params) => {
    // Find the blog entry by id
    const blog = blogData.find(b => b.id.toString() === params.id);
    return blog ? blog.title : `Blog ${params.id}`;
  }
}
 // nested here
        ]
      },
      { path: "clients", breadcrumb: "Clients" },
      { path: "consult", breadcrumb: "Consult" },
      { path: "contact", breadcrumb: "Contact" },
    ],
  },
];
