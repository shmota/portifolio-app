import CardHolder from '../../components/CardHolder/CardHolder'
import './Abilities.css'
import { abilitiesData } from '../../data/AbillitiesData'

export default function Abilities() {
  return (
    <>
      <CardHolder cards={abilitiesData} />
    </>
  )
}