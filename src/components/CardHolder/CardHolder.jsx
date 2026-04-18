import Card from '../Card/Card';
import './CardHolder.scss';

export default function CardHolder({ cards = [] }) {
  return (
    <div className="card-holder-base">
      {cards.map((item) => (
        <Card 
          key={item.title}
          title={item.title}
          tags={item.tags}
          type={item.type}
          img={item.img}
          link={item.link}
          description={item.description}
        />
      ))}
    </div>
  )
}