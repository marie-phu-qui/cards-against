import React from 'react'

import Header from "./Header";
import Content from "./Content";
import Footer from './Footer';

export class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App