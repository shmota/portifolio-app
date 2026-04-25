import './Projects.scss'
import { PROJECTS as data } from '../../data/ProjectsData'
import { ProjectCard } from "@/components/Cards/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className="projects-base">
      {
        data.map((item) => (
          <ProjectCard 
            key={item.title}
            tags={item.tags}
            title={item.title}
            icon={item.icon}
            link={item.link}
            description={item.description}
          />
        ))
      }
    </div>
  )
}