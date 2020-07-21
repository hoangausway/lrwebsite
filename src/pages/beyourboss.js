import React from 'react'
import Layout from '../components/layout'
import Metadata from '../components/metadata'
import haybails from '../data/images/haybails.jpg'

const Beyourboss = () => {
  return (
    <Layout>
      <Metadata title='Be your boss' description='Be yur our boss page' />
      <div style={{ marginTop: '3rem' }}>
        <h1>Be Your Boss</h1>
        <img
          src={haybails}
          alt='haybails'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </Layout>
  )
}

export default Beyourboss
