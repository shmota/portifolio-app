import Card from '../Card/Card';
import './CardHolder.css';

export default function CardHolder({ cards = [], type = "primary"}) {
  return (
    <div className="card-holder-base">
      {cards.map((item) => (
        <Card 
          key={item.title}
          title={item.title}
          tags={item.tags}
          type={item.type}
          img={item.img}
        />
      ))}
    </div>
  )
}