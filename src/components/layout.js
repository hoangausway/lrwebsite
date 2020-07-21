import React from 'react'
import Header from './header'
import Footer from './footer'
import SizeTest from './sizetest'
import ColorPalette from './colorpalette'

import '../styles/theme-dark.scss'

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <SizeTest />
      <ColorPalette />
      <Footer />
    </div>
  )
}

export default Layout
