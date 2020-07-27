import React from 'react'
import Layout from '../components/layout'
import Metadata from '../components/metadata'

import styles from './beyourboss.module.scss'
import haybails from '../data/images/lrbeyourboss.png'

const Beyourboss = () => {
  return (
    <Layout>
      <Metadata title='Be your boss' description='Be yur our boss page' />
      <section className={styles.beyourboss}>
        <h1>Be Your Boss</h1>
        <img src={haybails} alt='haybails' />
      </section>
    </Layout>
  )
}

export default Beyourboss
