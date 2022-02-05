import React from 'react';
import { SubHeading } from '../../components';
import { images} from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem' }}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>asset index.html 1.67 KiB [emitted]</p>
        <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem 0 2'}}>Opning Hours</p>
        <p className='p__opensans'>Mon-- index.html 1.67 KiB [emitted]</p>
        <p className='p__opensans'>Sat-- index.html 1.67 KiB [emitted]</p>
      </div>
      <button type='button' className='custom__button' style={{marginBottom: '2rem' }}>Find Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus' />
    </div>
  </div>
);

export default FindUs;
