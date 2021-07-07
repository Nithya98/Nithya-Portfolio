import React from 'react'
import './Greeting.css'
import SocialMedia from '../../components/socialMedia/SocialMedia'
import Button from '../../components/button/Button'
import { greeting } from '../../portfolio'
import { Fade } from 'react-reveal'
import LottieAnimation from '../../Lottie'
import HeaderImg from '../../Animations/header.json'

export default function Greeting(props) {
  const theme = props.theme
  return (
    <Fade bottom duration={2000} distance='40px'>
      <div className='greet-main' id='greeting'>
        <div className='greeting-main'>
          <div className='greeting-text-div'>
            <div>
              <h1 className='greeting-text' style={{ color: theme.text }}>
                Hi, I'm {greeting.title} <span className='wave'>👩‍🎓</span>
              </h1>
              <h2 className='greeting-nickname' style={{ color: theme.text }}>
                {greeting.nickname}{' '}
                <span className='nick'>- I like to make pretty things 😊</span>
              </h2>

              <p
                className='greeting-text-p subTitle'
                style={{ color: theme.secondaryText, fontSize: '1.2rem' }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className='portfolio-repo-btn-div'>
                <Button
                  text='CONTACT ME'
                  href='#contact'
                  theme={theme}
                  className='portfolio-repo-btn'
                />
                <Button
                  text='VIEW MY RESUME'
                  href={greeting.resumeLink}
                  theme={theme}
                  className='portfolio-repo-btn'
                  newTab
                />
              </div>
              {/* <div className='button-greeting-div'>
                <Button text='Contact me' href='#contact' />
                <Button
                  text='See my resume'
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div> */}
            </div>
          </div>
          <div className='greeting-image-div'>
            <LottieAnimation lotti={HeaderImg} height={400} width={600} />
          </div>
        </div>
      </div>
    </Fade>
  )
}
