import React from 'react'
import Layout from '../components/layout'
import Metadata from '../components/metadata'
import truganina from '../data/images/truganina.png'

const About = () => {
  return (
    <Layout>
      <Metadata title='About' description='This is my about page' />
      <div style={{ marginTop: '3rem' }}>
        <h1>About Page</h1>
        <img
          src={truganina}
          alt='truganina'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </Layout>
  )
}

export default About
