import myProfile from './assets/profilePic.png'
import getInTouch from './assets/get-in-touch.svg'
import instagram from './assets/icons/icon-instagram.svg'
import twitter from './assets/icons/icon-twitter.svg'
import github from './assets/icons/icon-github.svg'
import linkedin from './assets/icons/icon-linkedIn.svg'
import shareTo from './assets/icons/icon-share.svg'
import usernotfoundy from './assets/usernotfoundyLogo.png'
import './App.css'

function App() {
  return (
    <div className='card'>
      <div className='header'>
      </div>
      <div className='profile'>
        <div className='profile--pic'>
          <img src={myProfile} className='profile--pic--me' alt="Profile-Picture" />
        </div>
        <div className='profile--info'>
          <span className="info--name">
            <h1>Emman Adonay</h1>
            <h3>Dev</h3>
          </span>
          <img src={usernotfoundy} alt="usernotfoundy-Logo" className='usernotfoundy-logo' />
          <p className='info--content'> I work on projects including UI/UX designs, landing pages, brochure websites, and mobile app designs ensuring usability, and accessibility as a developer.</p>
          <div className='info--contact--me'>
            <a href="mailto:adonayemmanuelii@gmail.com?subject=Web%20Design%20&body=Hello%20there!" className='redirect-links' id='get-in-touch'>
              <img src={getInTouch} alt="" />
              <p>Get in touch!</p>
            </a>
            <a href="#" className='redirect-links' id='share-to' title='Not yet available'>
              <img src={shareTo} alt="" />
              <p>Share to</p>
            </a>
          </div>
        </div>
        <hr />
        <div className='profile--socials'>
          <a href="#" title='No account yet'><img src={instagram} alt="Icon-Instragram" className='icon--socials' /></a>
          <a href="https://github.com/usernotfoundy" target='_blank'><img src={github} alt="Icon-Github" className='icon--socials' /></a>
          <a href="#" title='No account yet'><img src={twitter} alt="Icon-Twitter" className='icon--socials' /></a>
          <a href="https://www.linkedin.com/in/emmanuel-adonay-ii-474421228" target="_blank"><img src={linkedin} alt="Icon-LinkedIn" className='icon--socials' /></a>
        </div>
      </div>
    </div>
  )
}

export default App
