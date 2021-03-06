import React, { useState } from 'react'
import { connect } from 'react-redux'
import ToDo from '../components/ToDo'
import { actionCreators } from '../store'

function Home({ todos, addTodo }) {
  const [text, setText] = useState('')
  function onChange(e) {
    setText(e.target.value)
  }
  function onSubmit(e) {
    e.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <ToDo {...todo} key={todo.id} />
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return { todos: state }
}

function mapDispatchToProps(dispatch) {
  return { addTodo: text => dispatch(actionCreators.addTodo(text)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
