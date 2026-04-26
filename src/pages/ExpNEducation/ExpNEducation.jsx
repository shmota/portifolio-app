import './ExpNEducation.scss'
import { EDUCATION } from "../../data/EducationData";
import ExpNEduCard from "@/components/Cards/ExpNEduCard/ExpNEduCard";
import { LuGraduationCap } from 'react-icons/lu';
import { BsSuitcaseLg } from 'react-icons/bs';
import { EXPERIENCE } from '../../data/ExperienceData';
import { useRef, useState } from 'react';
import { MdArrowBackIos, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

export default function ExpNEducation() {

  const [openIndex, setOpenIndex] = useState([]);

  const toggle = (index) => {
    const op = [...openIndex];
    if(!openIndex.includes(index)) op.push(index);
    else op.splice(op.indexOf(index), 1);
    setOpenIndex(op);
  };

  const refs = useRef([]);

  const sections = [
    {
      label: 'Educação',
      icon: <LuGraduationCap />,
      data: EDUCATION
    },
    {
      label: 'Experiência',
      icon: <BsSuitcaseLg />,
      data: EXPERIENCE
    }
  ];

  return (
    <div className="expnedu-base">
      {
        sections.map((section, index) => (
          <div key={section.label} className="expnedu-section">
            <div 
              onClick={() => toggle(index)} 
              className={`expnedu-section-title ${openIndex.includes(index) ? 'active' : ''}`}>
              {section.icon}
              <p>{section.label}</p>
              <MdOutlineArrowBackIos className={`expnedu-arrow ${openIndex.includes(index) ? 'active' : ''}`}/>
            </div>
            <div
              ref={(el) => (refs.current[index] = el)}
              className={`expnedu-cards ${openIndex.includes(index) ? 'active' : ''}`}
              style={{
                height: openIndex.includes(index)
                  ? `${refs.current[index]?.scrollHeight}px`
                  : '0px'
              }}
            >
              {
                section.data.map((item) => (
                  <ExpNEduCard
                    title={item.title}
                    institution={item.institution}
                    period={item.period}
                    description={item.description}
                    activities={item.activities}
                    key={item.title} />
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}