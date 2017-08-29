// Initial State
export const initialState = {
  itemForm: {
    text: '',
    language: '',
  },
  items: [
    {
      id: 4,
      text: 'नमस्ते',
      language: 'Hindi'
    },
    {
      id: 3,
      text: 'hujambo',
      language: 'Swahili'
    },
    {
      id: 2,
      text: 'Здравствуйте',
      language: 'Russian'
    },
    {
      id: 1,
      text: '吃饭了吗？',
      language: 'Mandarin'
    }
  ],
  uuid: 5,
  sent: {},
}

// Action Constants
export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM_FORM = 'UPDATE_ITEM_FORM'
export const RESET_ITEM_FORM = 'RESET_ITEM_FORM'
export const SEND_GREETING_SUCCESS = 'SEND_GREETING_SUCCESS'
export const SEND_GREETING_FAILED = 'SEND_GREETING_FAILED'
export const LAUNCH_FIREWORKS = 'LAUNCH_FIREWORKS'

// Action Constructors
export const addItem = item => ({
  type: ADD_ITEM,
  item
})

export const updateItemForm = data => ({
  type: UPDATE_ITEM_FORM,
  data
})

export const resetItemForm = () => ({
  type: RESET_ITEM_FORM,
})

export const favoriteItem = id => ({
  type: FAVORITE_ITEM,
  id
})

export const sendGreetingSuccess = id => ({
  type: SEND_GREETING_SUCCESS,
  id
})

export const sendGreetingFailed = id => ({
  type: SEND_GREETING_FAILED,
  id
})

export const launchFireworks = () => ({
  type: LAUNCH_FIREWORKS
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {

  case ADD_ITEM:
    return {
      ...state,
      items: [
        {
          id: state.uuid,
          ...action.item
        },
        ...state.items
      ],
      uuid: state.uuid + 1,
    }

  case UPDATE_ITEM_FORM:
    return {
      ...state,
      itemForm: {
        ...state.itemForm,
        ...action.data,
      }
    }

  case RESET_ITEM_FORM:
    return {
      ...state,
      itemForm: {
        text: '',
        language: '',
      },
    }

  case SEND_GREETING_SUCCESS:
    return {
      ...state,
      sent: {
        ...state.sent,
        [action.id]: true
      },
    }

  case SEND_GREETING_FAILED:
    return {
      ...state,
      sent: {
        ...state.sent,
        [action.id]: false
      },
    }

  default:
    return state
  }
}

// Selectors
export const getItems = state => state.item.items
export const getItemForm = state => state.item.itemForm
export const getSent = state => state.sent
