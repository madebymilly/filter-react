import React from 'react'
class Test extends React.Component {

  render() {
    const { params } = this.props.match
    return (
      <>
        <h1>Test</h1>
        <p>Pagina: {params.pageno}</p>
      </>
    )
  }
}
export default Test
