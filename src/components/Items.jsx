import React from 'react'

import { connect } from 'react-redux'

import {
  getItems,
  addItem,
  getItemForm,
  updateItemForm,
  resetItemForm,
  getSent,
} from 'ducks/item'

import {
  sendGreeting,
} from 'ducks/api'

import {
  Grid,
  Row,
  Col,
  FormControl,
  Button,
  Table,
} from 'react-bootstrap'

const Item = ({
  id,
  text,
  language,
  sendGreeting,
  sent,
}) => (
  <tr key={id}>
    <td>{text}</td>
    <td style={{ color: '#777' }}>
      {language}
    </td>
    <td>
      <Button onClick={() => sendGreeting({ greeting: { id, text } })}>
        Send
      </Button>
      <span>{ sent ? 'Success!' : '' }</span>
    </td>
  </tr>
)

const ItemForm = ({
  update,
  submit,
  value,
}) => (
  <form>
    <FormControl
      type='text'
      style={{ display: 'block' }}
      placeholder='Language'
      onChange={e => update({ language: e.target.value })}
      value={value.language}
    />
    <FormControl
      componentClass="textarea"
      type='text'
      style={{ display: 'block' }}
      placeholder='Text'
      onChange={e => update({ text: e.target.value })}
      value={value.text}
    />
    <Button
      type='button'
      style={{ display: 'block' }}
      onClick={submit}
    >
      Add Greeting
    </Button>
  </form>
)

const Items = ({
  items,
  itemForm,
  addItem,
  resetItemForm,
  updateItemForm,
  sendGreeting,
}) => {
  const validateForm = form => {
    const language = form.language.trim().length > 0
    const text = form.text.trim().length > 0
    return language && text
  }
  const submit = () => {
    if (validateForm(itemForm)) {
      addItem(itemForm)
      resetItemForm()
    } else {
      return null
    }
  }
  return (
    <Grid>
      <h1>Add a greeting to the list</h1>
      <Row>
        <Col sm={6} md={3}>
          <ItemForm
            update={updateItemForm}
            submit={submit}
            value={itemForm}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Greeting</th>
                <th>Language</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => ({ ...item, sendGreeting })).map(Item)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  )
}

const mapStateToProps = state => ({
  items: getItems(state),
  itemForm: getItemForm(state),
  sent: getSent(state),
})

const mapDispatchToProps = ({
  addItem,
  updateItemForm,
  resetItemForm,
  sendGreeting,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)
