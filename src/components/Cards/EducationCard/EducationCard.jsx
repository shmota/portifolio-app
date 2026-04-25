import "./EducationCard.scss";

export default function EducationCard({ title}) {
  return (
    <div className="education-card">
      <div>
        <p className="education-title">Graduação em {title}</p>
        <p>UNICSUL - Universidade Cruzeiro do Sul (2023 - 2024)</p>
      </div>
      
      <div className="education-body">
        <p>Foco em desenvolvimento de software, banco de dados, engenharia de software e arquitetura de sistemas.</p>
      </div>

    </div>
  )
}