import "./CardBase.scss";

export default function CardHeader({ icon, title }) {
  return (
    <div className={`card-header`}>
      {icon}
      <p>{title}</p>
    </div>
  );
}