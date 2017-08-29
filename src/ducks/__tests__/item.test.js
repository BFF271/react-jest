import reducer, * as actions from '../item'

describe('ADD_ITEM', () => {
  it('should add a new item to the front of the array and increment the uuid by one', () => {
    const oldState = {
      items: [
        { id: 2, text: 'hujambo', language: 'Swahili' },
        { id: 1, text: 'नमस्ते',    language: 'Hindi' }
      ],
      uuid: 3
    }
    const newState = {
      items: [
        { id: 3, text: 'hello',   language: 'English' },
        { id: 2, text: 'hujambo', language: 'Swahili' },
        { id: 1, text: 'नमस्ते',    language: 'Hindi' }
      ],
      uuid: 4
    }
    const action = {
      type: actions.ADD_ITEM,
      item: { text: 'hello', language: 'English' }
    }
    expect(reducer(oldState, action)).toEqual(newState)
  })
})

describe('UPDATE_ITEM_FORM', () => {
  it('should update the values in the form', () => {
    const oldState = {
      itemForm: {
        text: 'hello',
        language: 'Engl'
      }
    }
    const newState = {
      itemForm: {
        text: 'hello',
        language: 'Engli'
      }
    }
    const action = {
      type: actions.UPDATE_ITEM_FORM,
      data: { language: 'Engli' }
    }
    expect(reducer(oldState, action)).toEqual(newState)
  })
})


describe('RESET_ITEM_FORM', () => {
  it('should reset the values in the form', () => {
    const oldState = {
      itemForm: {
        text: 'नमस्ते',
        language: 'Hindi'
      }
    }
    const newState = {
      itemForm: {
        text: '',
        language: ''
      }
    }
    const action = {
      type: actions.RESET_ITEM_FORM
    }
    expect(reducer(oldState, action)).toEqual(newState)
  })
})
