import React from 'react';

import '../styles/Landing.css';

function Home() {

  return (
    <div className='landing'>
      <div className='main_content'>
        <h1>We solemnly swear, to never tell you what to think.</h1>
        <p>
          We believe that sharing each other's perspectives and Ideas 
          with civility, will be among the greatest gifts we will ultimately 
          offer Humanity.
        </p>
        <p>
          Discover the value and clarity of your voice as we harmonize it with 
          those around you through this newfound technology.
        </p>
        <p> 
          CivilSpeak
        </p>
      </div>
      <div itemID='lang_select'>
        <button>English</button>
        <button>Español</button>
        <button>हिन्दी</button>
      
      </div>
    </div>
  );
}

export default Home;