import React from 'react'
import Layout from '../components/layout'
import Metadata from '../components/metadata'
import Gallery from '../components/gallery'

import styles from './about.module.scss'
import truganina from '../data/images/truganina.png'

const About = () => {
  return (
    <Layout>
      <Metadata title='About' description='This is my about page' />
      <section className={styles.about}>
        <h1>About Page</h1>
        <img src={truganina} alt='truganina' />
      </section>
      <Gallery />
    </Layout>
  )
}

export default About
