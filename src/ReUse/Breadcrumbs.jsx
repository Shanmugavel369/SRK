import { Link, useLocation, matchRoutes, useParams } from "react-router-dom";
import { routesConfig } from "../data/routeConfig";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Breadcrumbs() {
  const location = useLocation();
  const params = useParams();
  const matches = matchRoutes(routesConfig, location);
  const [blogTitle, setBlogTitle] = useState("");

  useEffect(() => {
    // Only fetch if we are on /blogs/:id
    if (params.id) {
      axios.get(`http://localhost:8080/api/blogs/${params.id}`)
        .then(res => setBlogTitle(res.data.title))
        .catch(err => console.error(err));
    } else {
      setBlogTitle("");
    }
  }, [params.id]);

  if (!matches) return null;

  const crumbs = matches.map((match) => {
    const crumb = typeof match.route.breadcrumb === "function"
      ? match.route.breadcrumb(params, blogTitle)
      : match.route.breadcrumb;

    return {
      path: match.pathname,
      label: crumb,
    };
  });

  return (
    <nav className="my-4">
      <ol className="flex items-center flex-wrap">
        {crumbs.map((c, idx) => (
          <li key={c.path} className="flex items-center">
            {idx > 0 && <span className="mx-2">{">"}</span>}
            {idx === crumbs.length - 1 ? (
              <span className="font-bold text-lg text-yellow-400">{c.label}</span>
            ) : (
              <Link to={c.path} className="hover:text-blue-600 text-lg">{c.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
