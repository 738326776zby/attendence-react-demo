import React, { Component } from 'react'

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
