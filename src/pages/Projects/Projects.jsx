import CardHolder from "../../components/CardHolder/CardHolder";
import './Projects.css'
import { PROJECTS as data } from '../../data/ProjectsData'

export default function Projects() {
  return (
    <>
      <CardHolder cards={data} />
    </>
  )
}