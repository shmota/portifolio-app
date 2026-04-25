import CardBody from "../BaseComponents/CardBody";
import CardHeader from "../BaseComponents/CardHeader";
import CardTags from "../BaseComponents/CardTags";
import "./ProjectCard.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

export function ProjectCard({ title, tags, icon, link, description }) {
  return (
    <div className="project-card">
      <CardHeader icon={icon} title={title} type='project-card-header' />

      <CardBody>
        <div className="project-body">
          <p className="project-description">{description}</p>

          <CardTags tags={tags} />

          <div className="project-links">
            <FaExternalLinkAlt />
            <a href={link} target="_blank" rel="noreferrer noopener">
              Acessar projeto
            </a>
          </div>
        </div>
      </CardBody>

    </div>
  );
}