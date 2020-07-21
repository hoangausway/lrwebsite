import React from 'react'
import styles from './sizetest.module.scss'

const SizeTest = () => {
  return (
    <section className={styles.sectionTest}>
      <div className={styles.testMsg}>SIZES TEST</div>
      <p style={{ color: '#e6e7e8', padding: '2rem' }}>
        374px mediaphonelandscape: <span style={{ color: 'pink' }}>PINK</span>
        <br />
        735px mediatablet: <span style={{ color: 'yellow' }}>YELLOW</span>
        <br />
        767px mediatabletlandscape: <span style={{ color: 'green' }}>GREEN</span>
        <br />
        1919px mediadesktoplarge: <span style={{ color: 'cyan' }}>CYAN</span>
      </p>
    </section>
  )
}

export default SizeTest
