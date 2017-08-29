import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'


import * as apiActions from '../api'
import * as actions from '../item'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('sendGreeting', () => {
  afterEach(() => {
    nock.cleanAll()
  })
  it('Updates the status on success', () => {
    const greeting = {
      id: 3,
      text: 'hujambo',
      language: 'Swahili'
    }
    nock('http://localhost:4000')
      .post('/api/send-greeting', { greeting })
      .reply(200, {})

    const expectedActions = [
      actions.sendGreetingSuccess(greeting.id)
    ]
    const store = mockStore({})

    return store.dispatch(apiActions.sendGreeting({ greeting })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Sets the request to failed on a 404', () => {
    const greeting = {
      id: 3,
      text: 'hujambo',
      language: 'Swahili'
    }
    nock('http://localhost:4000')
      .post('/api/send-greeting', { greeting })
      .reply(404, {})

    const expectedActions = [
      actions.sendGreetingFailed(greeting.id)
    ]
    const store = mockStore({
    })

    return store.dispatch(apiActions.sendGreeting({ greeting })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Sets the request to failed on a 500', () => {
    const greeting = {
      id: 3,
      text: 'hujambo',
      language: 'Swahili'
    }
    nock('http://localhost:4000')
      .post('/api/send-greeting', { greeting })
      .reply(500, {})

    const expectedActions = [
      actions.sendGreetingFailed(greeting.id)
    ]
    const store = mockStore({
    })

    return store.dispatch(apiActions.sendGreeting({ greeting })).then(() => {
      expect(store.getActions()).toEqual(expect.arrayContaining(expectedActions))
    })
  })
})
