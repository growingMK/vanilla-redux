import React from 'react'
import { connect } from 'react-redux'

function Detail() {
  return <h1>Detail</h1>
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps)
  return { todos: state }
}

export default connect(mapStateToProps)(Detail)
