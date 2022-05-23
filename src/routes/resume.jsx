import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import resume from '../assets/rh_resume.pdf';


class DownloadLink extends React.Component {
    render() {
        return (
            <a className='download-link' href={this.props.src} download>{this.props.children}</a>
        )
    }
  }


export default function Resume() {
    return (
      <>
        <Header />
        <div className="App">
          <h2><DownloadLink src={resume}> Download Resume</DownloadLink></h2>
          <div className='skills'>
        <h3>Front-end Proficiencies</h3>
          <p>React</p>
          <p>Javascript</p>
          <p>HTML</p>
          <p>Bootstrap</p>
          </div>
          <div className='skills'>
        <h3>Back-end Proficiencies</h3>
          <p>Node.js</p>
          <p>MongoDB</p>
          <p>Mongoose ODM</p>
          <p>MySQL2</p>
          <p>Sequelize</p>
          <p>NPM Packages</p>
          <p>Express.js</p>
          <p>Inquirer</p>
          <p>Console.table</p>
          <p>Heroku / Heroku CLI</p>
          <p>Insomnia</p>
          </div>
        </div>
        <div className='extraSpace'></div>
        <Footer />
      </>
    );
}