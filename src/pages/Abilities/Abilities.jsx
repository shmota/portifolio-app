import CardHolder from '../../components/CardHolder/CardHolder'
import './Abilities.css'
import { ABILITIES as data} from '../../data/AbillitiesData'

export default function Abilities() {
  return (
    <>
      <CardHolder cards={data} />
    </>
  )
}