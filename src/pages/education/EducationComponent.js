import React, { Component } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import TopButton from '../../components/topButton/TopButton'
import Educations from '../../containers/education/Educations'
import Certifications from '../../containers/certifications/Certifications'
import EducationImg from './EducationImg'
import './EducationComponent.css'
import { Fade } from 'react-reveal'

class Education extends Component {
  render() {
    const theme = this.props.theme
    return (
      <div className='education-main'>
        <Header theme={this.props.theme} />
        <div className='basic-education'>
          <Fade bottom duration={2000} distance='40px'>
            <div className='heading-div'>
              <div className='heading-img-div'>
                <EducationImg theme={theme} />
              </div>
              <div className='heading-text-div'>
                <h1 className='heading-text' style={{ color: theme.text }}>
                  Education
                </h1>
                <div className='underline'></div>
                <h3 className='heading-sub-text' style={{ color: theme.text }}>
                  Achievements & Appreciation in College
                </h3>
                <p
                  style={{
                    color: '#2c3e50',
                    textAlign: 'left',
                    lineHeight: '1.8rem',
                  }}
                >
                  ⭐ Secured 5th place in Pondicherry university Rank Holders in
                  the Department of Information Technology<i> (2015 - 2019) </i>
                </p>
                <p
                  style={{
                    color: '#2c3e50',
                    textAlign: 'left',
                    lineHeight: '1.8rem',
                  }}
                >
                  ⭐ Got Appreciation for attaining 10/10 CGPA in the final
                  semester<i> (2018 - 2019) </i>
                </p>
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          <Certifications theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    )
  }
}

export default Education
