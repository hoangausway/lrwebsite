import React from 'react'
import styles from './locations.module.scss'

import lrmaps from '../data/images/lrmaps.png'
import truganina from '../data/images/truganina.png'
import laverton from '../data/images/laverton.png'

import derrimut from '../data/images/derrimut.jpg'

const Locations = () => {
  return (
    <section className={styles.locations}>
      <h1>Locations</h1>
      <div style={{ paddingTop: '2rem' }}>
        <img src={lrmaps} alt='la roll maps' />
        <h3>La Roll TRUGANINA</h3>
        <p>Unit 1, 5 Connect Road, Truganina VIC 3029</p>
        <img src={truganina} alt='truganina' />
      </div>
      <div style={{ paddingTop: '2rem' }}>
        <h3>La Roll DERRIMUT</h3>
        <p>Unit 12, 133 Elgar Road, Derrimut VIC 3030</p>
        <img src={derrimut} alt='derrimut' />
      </div>
      <div style={{ paddingTop: '2rem' }}>
        <h3>La Roll LAVERTON</h3>
        <p>Unit 3A, 141 Dohertys Road, Laverton North VIC 3029</p>
        <img src={laverton} alt='laverton' />
      </div>
    </section>
  )
}

export default Locations
