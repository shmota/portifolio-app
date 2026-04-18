import CardHolder from "../../components/CardHolder/CardHolder";
import './Projects.scss'
import { PROJECTS as data } from '../../data/ProjectsData'

export default function Projects() {
  return (
    <div className="projects-base">
      <CardHolder cards={data} />
    </div>
  )
}