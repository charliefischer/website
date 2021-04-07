import styles from './webdevFeed.module.css'
import Image from 'next/image'


export default function webdevFeed() {
  return(
    <div className={styles.webfeed} id='right'>
      <div className={styles.post}>
        <a href='https://cf-type-checker-draft.superhi.com/' target="_blank">
          <Image 
          src='/web/type_checker.png'
          alt='Type Checker'
          width={300}
          height={200}
          layout='responsive'
          objectFit='cover'
          objectPosition='50% 0%'
          />
        </a>
        <h2>Type Checker</h2>
        <p>A SuperHi tutorial learning how to use form tags such as inputs, sliders, checkboxes and select boxes to build up interactivity to our projects.</p>
      </div>
      
      <div className={styles.post}>
        <a href='https://cf-words-of-women-draft.superhi.com/' target="_blank">
          <Image 
          src='/web/words_of_women.png'
          alt='Words of Women'
          width={300}
          height={200}
          layout='responsive'
          objectFit='cover'
          objectPosition='50% 0%'
          />
        </a>
        <h2>Words of Women</h2>
        <p>A SuperHi tutorial learning how to add parallax movement and stamps with vanilla javascript</p>
      </div>

      <div className={styles.post}>
        <a href='http://www.inlookingout.co.uk/' target="_blank">
          <Image 
          src='/web/in_looking_out.png'
          alt='In Looking Out'
          width={300}
          height={200}
          layout='responsive'
          objectFit='cover'
          objectPosition='50% 0%'
          />
        </a>
        <h2>In Looking Out</h2>
        <p>An online art gallery displaying works of art made during lockdown. Built using HTML, css and javascript</p>
      </div>

      <div className={styles.post}>
        <a href='https://github.com/charliefischer/Xtreme_Prestige_Worldwide_BnB' target="_blank">
          <Image 
          src='/web/xtremebnb.png'
          alt='Air BnB Clone'
          width={300}
          height={200}
          layout='responsive'
          objectFit='cover'
          objectPosition='50% 0%'
          />
        </a>
        <h2>Xtreme BnB</h2>
        <p>A AirBnB clone built in an MVC framework with Ruby and tested in Rspec</p>
      </div>

      <div className={styles.post}>
        <a href='https://github.com/charliefischer/acebook-BBB' target="_blank">
          <Image 
          src='/web/BBB.png'
          alt='Facebook Clone'
          width={300}
          height={200}
          layout='responsive'
          objectFit='cover'
          objectPosition='50% 0%'
          />
        </a>
        <h2>BBB</h2>
        <p>A Facebook clone built using Ruby on Rails and tested with Rspec</p>
      </div>

      <h1>
        Web Developer
      </h1>
    </div>
  )
}