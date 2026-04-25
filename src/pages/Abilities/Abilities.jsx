import './Abilities.scss'
import { ABILITIES as data} from '../../data/AbillitiesData'
import { AbilitieCard } from '@/components/Cards/AbilitieCard/AbilitieCard'

export default function Abilities() {
  return (
    <div className='abilities-holder'>
        {
          data.map((item) => (
            <AbilitieCard
              key={item.title}
              title={item.title}
              tags={item.tags}
              icon={item.icon}
            />
          ))
        }
    </div>
  )
}