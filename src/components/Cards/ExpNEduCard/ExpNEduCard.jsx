import "./ExpNEduCard.scss";

export default function ExpNEduCard({ title, period, institution, description, activities}) {
  return (
    <div className="expnedu-card">
      <div className="expnedu-header">
        <p className="expnedu-title">{title}</p>
        <p>{institution} ({period})</p>
      </div>
      
      <div className="expnedu-body">
        <p>{description}</p>
      </div>

      {
        activities && (
          <div className="expnedu-activities">
            <p>Atividades:</p>
            <ul>
              {activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        )
      }

    </div>
  )
}