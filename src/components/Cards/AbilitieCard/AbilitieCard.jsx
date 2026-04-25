import CardHeader from "../BaseComponents/CardHeader";
import CardTags from "../BaseComponents/CardTags";
import "./AbilitieCard.scss";

export function AbilitieCard({ title, tags, icon }) {
  return (
    <div className="abilitie-card">
      <CardHeader icon={icon} title={title} />
      <div className="abilitie-body ">
        <CardTags tags={tags} />
      </div>
    </div>
  );
}