import itemReducer, { initialState as itemState} from './item'

const initialState = {
  ...itemState,
}

export default function reducer(state = initialState, action) {
  return {
    item: itemReducer(state.item, action)
  }
}
