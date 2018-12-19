import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class PeopleAttendance extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        我是哈哈哈
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleAttendance)
