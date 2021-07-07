import React, { Component } from 'react'
import Header from '../../components/header/Header'
import './MiniProject.css'
import { Fade } from 'react-reveal'
import Button1 from '../../components/button/Button'
import TopButton from '../../components/topButton/TopButton'
import Footer from '../../components/footer/Footer'
export default class Miniproject extends Component {
  render() {
    const theme = this.props.theme

    return (
      <div className='projects-main'>
        <Header theme={theme} />
        <div className='basic-projects'>
          <h1 className='main-heading'>Mini Projects</h1>
          <div className='underline'></div>

          {/* Project 1 */}

          <Fade bottom duration={2000} distance='40px'>
            <div className='projects-heading-div'>
              <div className='projects-heading-img-div'>
                <img src={require(`./images/bookmyshow.PNG`)} alt='' />
              </div>
              <div className='projects-heading-text-div'>
                <h1
                  className='projects-heading-text'
                  style={{ color: theme.text }}
                >
                  Book My Show
                </h1>
                <div className='underline'></div>

                <p
                  className='projects-header-detail-text subTitle'
                  style={{ color: theme.secondaryText }}
                >
                  This app will display the typical movie booking page and allow
                  the user to pick a movie and available seats along with
                  calculating the total seats and the total cost. Also, it has
                  the movie list page which enlists all the movies with search
                  option.
                </p>
                <div className='list'>
                  <ul className='listitems'>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TMDb API</li>
                  </ul>
                </div>
                <div>
                  <ul className='listicons'>
                    <li>
                      <a
                        href='https://github.com/Nithya98/Book-My-Show'
                        target='_blank'
                      >
                        <i class='fab fa-github'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://bookmyshow-developedbynithya.netlify.app/'
                        target='_blank'
                      >
                        <i class='fas fa-external-link-alt'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>

          {/* Project 2 */}

          <div className='underline underline1'></div>
          <Fade bottom duration={2000} distance='40px'>
            <div className='projects-heading-div'>
              <div className='projects-heading-text-div2'>
                <h1
                  className='projects-heading-text'
                  style={{ color: theme.text }}
                >
                  Game-Hub
                </h1>
                <div className='underline'></div>
                <p
                  className='projects-header-detail-text subTitle'
                  style={{ color: theme.secondaryText }}
                >
                  Game-Hub app has four fun games to play: Hangman Game, Speed
                  typing game, Speak number guessing game, Breakout Game.
                </p>
                <div className='list'>
                  <ul className='listitems'>
                    <li>Javascript</li>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>Flexbox</li>
                  </ul>
                </div>
                <div>
                  <ul className='listicons'>
                    <li>
                      <a
                        href='https://github.com/Nithya98/Game-Hub'
                        target='_blank'
                      >
                        <i class='fab fa-github'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://game-hub-developedbynithya.netlify.app/'
                        target='_blank'
                      >
                        <i class='fas fa-external-link-alt'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='projects-heading-img-div'>
                <img
                  src={require(`./images/gamehub.PNG`)}
                  alt='covid-19 proj'
                />
              </div>
            </div>
          </Fade>

          {/* Project 3 */}
          <div className='underline underline1'></div>

          <Fade bottom duration={2000} distance='40px'>
            <div className='projects-heading-div'>
              <div className='projects-heading-img-div'>
                <img src={require(`./images/omnifood.PNG`)} alt='' />
              </div>
              <div className='projects-heading-text-div'>
                <h1
                  className='projects-heading-text'
                  style={{ color: theme.text }}
                >
                  OmniFood Service
                </h1>
                <div className='underline'></div>

                <p
                  className='projects-header-detail-text subTitle'
                  style={{ color: theme.secondaryText }}
                >
                  Omnifood service is a food delivery website created with nice
                  animations and stuff.
                </p>
                <div className='list'>
                  <ul className='listitems'>
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>Flexbox</li>
                    <li>Animate.css</li>
                  </ul>
                </div>
                <div>
                  <ul className='listicons'>
                    <li>
                      <a
                        href='https://github.com/Nithya98/OmniFood-online-food-delivery'
                        target='_blank'
                      >
                        <i class='fab fa-github'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://food-restaurant-website.netlify.app/'
                        target='_blank'
                      >
                        <i class='fas fa-external-link-alt'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Button1
          text={'More Projects'}
          className='project-button'
          href='https://github.com/Nithya98'
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />

        <TopButton theme={this.props.theme} />
      </div>
    )
  }
}
