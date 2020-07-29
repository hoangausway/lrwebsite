import React from 'react'
import Layout from '../components/layout'
import Metadata from '../components/metadata'
import Gallery from '../components/gallery'
import Locations from '../components/locations'

import styles from './about.module.scss'
// import truganina from '../data/images/truganina.png'

const About = () => {
  return (
    <Layout>
      <Metadata title='About' description='This is my about page' />
      <section className={styles.about}>
        {/* <h1>About Us</h1> */}
        <AboutUs />
        {/* <img src={truganina} alt='truganina' /> */}
        <Locations />
      </section>
      <Gallery />
    </Layout>
  )
}

export default About

export const AboutUs = () => {
  return (
    <p>
      <strong>La Roll</strong> is providing fresh and tasty breakfast and lunch
      in industrial zones. Each of our stores were opened with these simple
      desires in mind. We prepare all our rolls, salads, and meals fresh in each
      La Roll's kitchen.
      <br />
      The first La Roll was opened in Laverton North in 2017, born from a love
      of Vietnamese street food and a desire to share our commitment to quality
      with the rest of Melbourne and now Australia. The next two stores were La
      Roll Truganina opened in 2018 and La Roll Derrimut in 2019.
    </p>
  )
}
