import request from 'superagent'

import {
  sendGreetingSuccess,
  sendGreetingFailed,
  launchFireworks,
} from './item'

export const sendGreeting = ({ greeting }) => {
  return dispatch => {
    const success = () => {
      dispatch(sendGreetingSuccess(greeting.id))
    }
    const failure = error => {
      dispatch(sendGreetingFailed(greeting.id))
      switch(error.status) {
        
      case 404: {
        // not found
        alert("I couldn't find anyone to send this greeting to.")
        break
      }
      default: {
        // general error
        alert("There was a problem on the server.")
        dispatch(launchFireworks())
        break
      }
      }
    }
    return request
      .post('http://localhost:4000/api/send-greeting')
      .send({ greeting })
      .set('Accept', 'application/json')
      .then(success, failure)
  }
}
