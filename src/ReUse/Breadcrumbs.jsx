// src/ReUse/Breadcrumbs.jsx
import { Link, useLocation, matchRoutes } from "react-router-dom";
import { routesConfig } from "../data/routeConfig";

export default function Breadcrumbs() {
  const location = useLocation();
  const matches = matchRoutes(routesConfig, location);

  if (!matches) return null;

  const crumbs = matches.map((match) => {
  const crumb = typeof match.route.breadcrumb === "function"
    ? match.route.breadcrumb(match.params, location) // pass location, and optionally blogData
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
