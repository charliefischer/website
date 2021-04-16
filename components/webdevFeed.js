import React from 'react'
import styles from './webdevFeed.module.scss'
import Image from 'next/image'

export default function webdevFeed() {
  return(
    <div className={styles.feed}>
      <h1>Web Developer</h1>
      {/* id=right for reverse scrolling */}
      <div className={styles.webfeed}>
        <div className={styles.rotate}>
            <div className={styles.post}>
              <h2 >BBB</h2>
              <a href='https://github.com/charliefischer/acebook-BBB' target="_blank">
                <img src='/web/BBB.png' alt='Facebook Clone' />
              </a>
              <div className={styles.hoverText}>
                <p >A Facebook clone built using Ruby on Rails and tested with Rspec</p>
              </div>
            </div>

            <div className={styles.post}>
              <h2>Xtreme BnB</h2>
              <a href='https://github.com/charliefischer/Xtreme_Prestige_Worldwide_BnB' target="_blank">
                <img src='/web/xtremebnb.png' alt='Air BnB Clone' />
              </a>
              <div className={styles.hoverText}>
                <p >An AirBnB clone built in an MVC framework with Ruby and tested in Rspec</p>
              </div>
            </div>

            <div className={styles.post}>
              <h2>In Looking Out</h2>
              <a href='http://www.inlookingout.co.uk/' target="_blank">
                <img src='/web/in_looking_out.png' alt='In Looking Out' />
              </a>
              <div className={styles.hoverText}>
                <p>An online art gallery displaying works of art made during lockdown. Built using HTML, css and javascript</p>
              </div>
            </div>

            <div className={styles.post}>
              <h2>Type Checker</h2>
              <a href='https://cf-type-checker-draft.superhi.com/' target="_blank">
                <img src='/web/type_checker.png' alt='Type Checker' loader='lazy' />
              </a>
              <div className={styles.hoverText}>
                <p>A SuperHi tutorial learning how to use form tags such as inputs, sliders, checkboxes and select boxes to build up interactivity to our projects.</p>
              </div>
            </div>
            
            <div className={styles.post}>
              <h2>Words of Women</h2>
              <a href='https://cf-words-of-women-draft.superhi.com/' target="_blank">
                <img src='/web/words_of_women.png' alt='Words of Women' />
              </a>
              <div className={styles.hoverText}>
                <p>A SuperHi tutorial learning how to add parallax movement and stamps with vanilla javascript</p>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}