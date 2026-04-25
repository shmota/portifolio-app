import './Education.scss'
import { EDUCATION as data } from "../../data/EducationData";
import EducationCard from "@/components/Cards/EducationCard/EducationCard";
import { LuGraduationCap } from 'react-icons/lu';

export default function Education() {
  return (
    <div className="education-base">
      <div className="education-section">
        <div className="education-section-title">
          <LuGraduationCap />
          <p>Educação</p>
        </div>
        {
          data.map((item) => (
            <EducationCard
              title={item.title}
              key={item.title} />
          ))
        }
      </div>
      <div className="education-section">

      </div>
    </div>
  )
}