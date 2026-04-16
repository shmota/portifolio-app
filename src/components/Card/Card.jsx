import './Card.css'
import cardImage from '../../assets/card-image.jpg'

export default function Card({ title = "", tags = [], type = "", img = ""}) {
  
  return (
    <div className="card-base">
      <div className={type == "primary" ? `card-header-primary` : "card-header-secondary"}>
        <img src={img}/>
        <p>{title}</p>
      </div>
      <div className='card-tags-holder'>
        {tags.map((item) => (
          <div key={item} className='card-tag'>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}