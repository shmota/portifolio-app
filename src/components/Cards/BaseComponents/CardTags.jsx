import "./CardBase.scss";

export default function CardTags({ tags }) {
  return (
    <div className={'card-tags-holder'}>
      {tags.map((item) => (
        <div key={item} className="card-tag">
          {item}
        </div>
      ))}
    </div>
  );
}