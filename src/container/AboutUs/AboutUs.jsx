import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='bg-g' />
    </div>

    <div className='app__aboutus-content flex__center'>
        
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='spoon image' />
          <p className='p__opensans'>asset asset-manifest.json 1.84 KiB [emitted]sset index.html 1.67 KiB [emitted]
            cached modules 10.4 MiB (javascript) 43.7 MiB (asset) 28.2 KiB (runtime) [cached] 189 modules
            ./src/container/AboutUs/AboutUs.jsx 3.17 KiB [built]</p>
          <button type='button' className='custom__button'>KNOW MORE</button>
        </div>
        
        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt='knife image' />
        </div>
        
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='spoon image' />
          <p className='p__opensans'>asset asset-manifest.json 1.84 KiB [emitted]sset index.html 1.67 KiB [emitted]
            cached modules 10.4 MiB (javascript) 43.7 MiB (asset) 28.2 KiB (runtime) [cached] 189 modules
            ./src/container/AboutUs/AboutUs.jsx 3.17 KiB [built]</p>
          <button type='button' className='custom__button'>KNOW MORE</button>
        </div>

    </div>
  </div>
);  

export default AboutUs;
