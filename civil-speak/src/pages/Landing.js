import React, {useState} from 'react';
// import Login from '../components/Login';
import Register from '../components/Register'


import '../styles/Landing.css';

function Landing() {
  const [visible, setVisible] = useState(false)

  // const setVisibleToTrue =()=>{
  //   setVisible(true)
  //   document.getElementsByClassName('modal').display = 'block'
  //   console.log('hit')
  // }

  // const setVisibleToFalse =()=>{
  //   setVisible(false)
  // }
  
  return (
    <div className='landing'>
      <div className='main_content'>
        <h1>We solemnly swear, to never tell you what to think.</h1>
        <p className='promise'>
          We believe that sharing each other's perspectives and Ideas 
          with civility, will be among the greatest gifts we will ultimately 
          offer Humanity.
        </p>
        <p className='discover'>
          Discover the value and clarity of your voice as we harmonize it with 
          those around you through this newfound technology.
        </p>
        <p className='sign'> 
          - CivilSpeak
        </p>
      </div>

      <button className='begin' onClick={() => setVisible(true)}>Let's Begin</button>

      <div className='lang_select'>
        <button className='lang'>English</button>
        <button className='lang'>Español</button>
        <button className='lang'>हिन्दी</button>

      </div>
      {visible && <div className='modal'>
        <Register />
        {/* <p className="modal_close" onClick={() => setVisible(false)}>x</p> */}
      </div>}
    </div>
    
  );
}

export default Landing;
