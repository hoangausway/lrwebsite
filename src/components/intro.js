import React from 'react'
import styles from './intro.module.scss'
import wordcloud from '../img/wordcloud.svg'
import Reveal from './reveal'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <Reveal
        clsName={styles.introMsg}
        transProps={{
          opacity: [1, 0],
          transform: ['scale(1)', 'scale(0.5)']
        }}
        transition='opacity 3s ease, transform 3s ease'
      >
        ALWAYS <br /> FRESH
      </Reveal>
      <img src={wordcloud} className={styles.introWords} alt='words cloud' />
    </section>
  )
}

export default Intro
