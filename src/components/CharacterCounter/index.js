import {Component} from 'react'
import {v4} from 'uuid'

import CharacterInput from '../CharacterInput'

import {
  AppContainer,
  CharacterContainer,
  CharacterHeading,
  CharacterInputContainer,
  CharacterInputHeading,
  Input,
  Button,
  FormContainer,
  UserInputLists,
  Image,
  ErrorMsg,
} from './styledComponents'

const noUserInputs =
  'https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png'

class CharacterCounter extends Component {
  state = {
    list: [],
    inputs: '',
    error: false,
  }

  submission = event => {
    const {inputs} = this.state
    event.preventDefault()

    if (inputs.length !== 0) {
      const addItem = {
        id: v4(),
        listItem: inputs,
        itemLength: inputs.length,
      }
      this.setState(prev => ({
        list: [...prev.list, addItem],
        inputs: '',
        error: false,
      }))
    } else {
      this.setState({error: true})
    }
  }

  onChangeInput = event => {
    this.setState({inputs: event.target.value})
    // console.log(event.target.value)
  }

  render() {
    const {list, inputs, error} = this.state
    return (
      <AppContainer>
        <CharacterContainer>
          <CharacterHeading>
            Count the characters like a <br />
            Boss...
          </CharacterHeading>
          <UserInputLists>
            {list.length === 0 ? (
              <Image src={noUserInputs} alt="no user inputs" />
            ) : (
              list.map(each => <CharacterInput key={each.id} eachItem={each} />)
            )}
          </UserInputLists>
        </CharacterContainer>
        <CharacterInputContainer>
          <CharacterInputHeading>Character Counter</CharacterInputHeading>
          <FormContainer onSubmit={this.submission}>
            <Input
              type="text"
              value={inputs}
              onChange={this.onChangeInput}
              placeholder="Enter the characters here"
              maxLength="10"
            />
            <Button>Add</Button>
          </FormContainer>
          {error && (
            <ErrorMsg>*Please Enter Anything before you Submit</ErrorMsg>
          )}
        </CharacterInputContainer>
      </AppContainer>
    )
  }
}
export default CharacterCounter
