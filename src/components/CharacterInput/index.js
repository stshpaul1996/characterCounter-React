import {ListCard, ListText} from './styledComponents'

const CharacterInput = props => {
  const {eachItem} = props
  const {listItem, itemLength} = eachItem
  return (
    <ListCard>
      <ListText>
        {listItem}:{itemLength}
      </ListText>
    </ListCard>
  )
}
export default CharacterInput
