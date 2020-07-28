import React from 'react'

import styles from './eoiform.module.scss'

const ExpressInterest = () => {
  return (
    <form
      id='eiform'
      name='contact'
      method='post'
      action='/eisuccess'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
    >
      <fieldset>
        <legend>Express your interest</legend>

        <input type='hidden' name='bot-field' />
        <input type='hidden' name='form-name' value='contact' />

        <div className={styles.formgrid}>
          <input type='text' name='name' id='name' />
          <label htmlFor='name'>Name</label>
          <input type='text' name='phone' id='phone' />
          <label htmlFor='phone'>Phone</label>
          <input type='text' name='email' id='email' />
          <label htmlFor='email'>Email</label>
          <textarea name='message' id='message' rows='6' />
          <label htmlFor='message'>Message</label>
          <input type='submit' value='Send Message' />
          <input type='reset' value='Clear' />
        </div>
      </fieldset>
    </form>
  )
}

export default ExpressInterest
