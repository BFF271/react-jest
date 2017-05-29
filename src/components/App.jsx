import React from 'react'

import Items from './Items'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Add an item to the list!</h1>
        <Items />
      </div>
    )
  }
}

export default App
