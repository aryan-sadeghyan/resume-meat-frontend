import { useOutletContext, useParams } from "react-router-dom";

export default function Project() {
  const { projects } = useOutletContext();
  const { projectId } = useParams();

  const project = projects.filter((_project) => {
    return _project.id === Number(projectId);
  })[0];

  return (
    <div>
      <h1>name :{project.name} </h1>
      <h2>id :{project.id} </h2>
    </div>
  );
}
