import React, { Component } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button1 from '../../components/button/Button'
import TopButton from '../../components/topButton/TopButton'
import { Fade } from 'react-reveal'
import './Projects.css'

class Projects extends Component {
  render() {
    const theme = this.props.theme

    return (
      <div className='projects-main'>
        <Header theme={theme} />
        <div className='basic-projects'>
          <h1 className='main-heading'>Major Projects</h1>
          <div className='underline'></div>
          <h3 className='sub-heading'>
            My personal projects are a way for me to enhance my skills as a
            developer.
          </h3>

          {/* Project 1 */}

          <Fade bottom duration={2000} distance='40px'>
            <div className='projects-heading-div'>
              <div className='projects-heading-img-div'>
                <img src={require(`./project_images/ebuy.PNG`)} alt='' />
              </div>
              <div className='projects-heading-text-div'>
                <h1
                  className='projects-heading-text'
                  style={{ color: theme.text }}
                >
                  E - Buy |
                  <i style={{ fontSize: '1.5rem' }}> Furniture shopping App</i>
                </h1>
                <div className='underline'></div>

                <p
                  className='projects-header-detail-text subTitle'
                  style={{ color: theme.secondaryText }}
                >
                  E-Buy is a eCommerce website that allows the user to create
                  account, view items, add to cart, remove from cart and also
                  have Stripe checkout (CRUD operations)
                </p>
                <div className='list'>
                  <ul className='listitems'>
                    <li> React JS</li>
                    <li>Context API</li>
                    <li>Styled Components</li>
                    <li>Material UI</li>
                    <li>Stripe</li>
                  </ul>
                </div>
                <div>
                  <ul className='listicons'>
                    <li>
                      <a
                        href='https://github.com/Nithya98/e-buy'
                        target='_blank'
                      >
                        <i class='fab fa-github'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://e-buy-shop-better.netlify.app/'
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
                  COVID - 19 Tracker
                </h1>
                <div className='underline'></div>
                <p
                  className='projects-header-detail-text subTitle'
                  style={{ color: theme.secondaryText }}
                >
                  This App will fetch the total coronavirus cases and display
                  them through maps, line graphs and tables in dashboad under
                  three catagories: Active cases, Recovered and Deaths.
                </p>
                <div className='list'>
                  <ul className='listitems'>
                    <li> React JS</li>
                    <li>Chart.js</li>
                    <li>react-leaflet</li>
                    <li>Material UI</li>
                  </ul>
                </div>
                <div>
                  <ul className='listicons'>
                    <li>
                      <a
                        href='https://github.com/Nithya98/covid-19-tracker'
                        target='_blank'
                      >
                        <i class='fab fa-github'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://covid-19-tracker-b56cd.web.app/'
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
                  src={require(`./project_images/covid19.PNG`)}
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
                <img src={require(`./project_images/netfixclone.PNG`)} alt='' />
              </div>
              <div className='projects-heading-text-div'>
                <h1
                  className='projects-heading-text'
                  style={{ color: theme.text }}
                >
                  Netflix Clone
                </h1>
                <div className='underline'></div>

                <p
                  className='projects-header-detail-text subTitle'
                  style={{ color: theme.secondaryText }}
                >
                  Netflix clone is the frontend of the Netflix page with an
                  authentication feature using firebase. It has netflix signin
                  page, homepage, movie data, subscription plan. The movie data
                  are fetched using TMDB Api
                </p>
                <div className='list'>
                  <ul className='listitems'>
                    <li> React JS</li>
                    <li>Redux</li>
                    <li>React-icons</li>
                    <li>Firebase</li>
                  </ul>
                </div>
                <div>
                  <ul className='listicons'>
                    <li>
                      <a
                        href='https://github.com/Nithya98/Netflix-clone'
                        target='_blank'
                      >
                        <i class='fab fa-github'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://netflix-clone-nithyadeploys.netlify.app/'
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

          {/* Project 4 */}
          <div className='underline underline1'></div>
          <Fade bottom duration={2000} distance='40px'>
            <div className='projects-heading-div'>
              <div className='projects-heading-text-div2'>
                <h1
                  className='projects-heading-text'
                  style={{ color: theme.text }}
                >
                  Github User dashboad
                </h1>
                <div className='underline'></div>
                <p
                  className='projects-header-detail-text subTitle'
                  style={{ color: theme.secondaryText }}
                >
                  This app will allow user to search and display the Github
                  users details by fetching the data in graphical forms in the
                  dashboard.
                </p>
                <div className='list'>
                  <ul className='listitems'>
                    <li> React JS</li>
                    <li>Fusion charts</li>
                    <li>Axios</li>
                    <li>Auth0</li>
                  </ul>
                </div>
                <div>
                  <ul className='listicons'>
                    <li>
                      <a
                        href='https://github.com/Nithya98/github-users-search'
                        target='_blank'
                      >
                        <i class='fab fa-github'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github-users-search-react-n.netlify.app/login'
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
                  src={require(`./project_images/githubuser.PNG`)}
                  alt='Github user search'
                />
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

export default Projects
