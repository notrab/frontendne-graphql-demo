import React from 'react'
import { Form } from 'semantic-ui-react'

const limitOptions = [
  {
    key: 10,
    value: 10,
    text: '10 per page'
  },
  {
    key: 25,
    value: 25,
    text: '25 per page'
  },
  {
    key: 50,
    value: 50,
    text: '50 per page'
  },
  {
    key: 100,
    value: 100,
    text: '100 per page'
  }
]

const offsetOptions = [
  {
    key: 0,
    value: 0,
    text: 'First page'
  },
  {
    key: 1,
    value: 1,
    text: 'Page 2'
  },
  {
    key: 2,
    value: 2,
    text: 'Page 3'
  },
  {
    key: 3,
    value: 3,
    text: 'Page 4'
  }
]

const Filter = ({ onChange, limit, offset }) => (
  <Form>
    <Form.Group widths="equal">
      <Form.Select
        name="limit"
        onChange={onChange}
        defaultValue={limit}
        options={limitOptions}
        fluid
      />
      <Form.Select
        name="offset"
        onChange={onChange}
        defaultValue={offset}
        options={offsetOptions}
        fluid
      />
    </Form.Group>
  </Form>
)

export default Filter
