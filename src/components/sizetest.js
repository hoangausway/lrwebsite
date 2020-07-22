import React from 'react'
import styles from './sizetest.module.scss'

const SizeTest = () => {
  return (
    <section className={styles.sectionTest}>
      <div className={styles.testMsg}>SIZES TEST</div>
      <div style={{ color: '#e6e7e8', padding: '2rem' }}>
        <p className={styles.iphone376}>$iphone376</p>
        <p className={styles.iphonePlusP414}>$iphonePlusP414</p>
        <p className={styles.iphonePlusL736}>$iphonePlusL736</p>
        <p className={styles.ipadP768}>$ipadP768</p>
        <p className={styles.ipadP834}>$ipadProP834</p>
        <p className={styles.ipadP1024}>$ipadL1024</p>
        <p className={styles.ipadL1112}>$ipadProL1112</p>
        <p className={styles.ipadL1366}>$ipadProL1366</p>
        <p className={styles.desktopL1680}>$desktopL1680</p>
      </div>
    </section>
  )
}

export default SizeTest
