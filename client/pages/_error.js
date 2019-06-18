import React from 'react'

export default class Error extends React.Component {
  static getInitialProps ({ res, xhr }) {
    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return { statusCode }
  }

  render () {
    return (
        <p>{
          this.props.statusCode
          ? `${this.props.statusCode} not found`
          : 'An error occurred on client'
        }</p>
      )
  }
}
