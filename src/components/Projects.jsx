import { Link, useOutletContext, useParams } from "react-router-dom";

export default function Projects() {
  const { projects } = useOutletContext();

  return projects.map((project) => {
    return (
      <div key={project.id}>
        <Link to={`/projects/${project.id}`}>{project.name}</Link>
      </div>
    );
  });
}
