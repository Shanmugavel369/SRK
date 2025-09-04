import { useParams } from "react-router-dom";
import BlogDetail from "../Pages/BlogDetailing";

function BlogDetailWrapper() {
  const { id } = useParams();
  return <BlogDetail key={id} />;
}

export default BlogDetailWrapper;
