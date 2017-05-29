// Initial State
export const initalState = {
  itemForm: '',
  items: [],
}

// Action Constants
export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM_FORM = 'UPDATE_ITEM_FORM'
export const RESET_ITEM_FORM = 'RESET_ITEM_FORM'

// Action Constructors
export const addItem = item => ({
  type: ADD_ITEM,
  item
})

export const updateItemForm = text => ({
  type: UPDATE_ITEM_FORM,
  text
})

export const resetItemForm = () => ({
  type: RESET_ITEM_FORM,
})

// Reducer
export default function (state = initalState, action) {
  switch (action.type) {

  case ADD_ITEM:
    return {
      ...state,
      items: [action.item, ...state.items],
    }

  case UPDATE_ITEM_FORM:
    return {
      ...state,
      itemForm: action.text,
    }

  case RESET_ITEM_FORM:
    return {
      ...state,
      itemForm: '',
    }

  default:
    return state
  }
}

// Selectors
export const getItems = state => state.item.items
export const getItemForm = state => state.item.itemForm
