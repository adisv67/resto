import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'> 
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title='Chef words' />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated</p>
        </div>
        <p className='p__opensans'>edundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `ima</p>
      </div>
      <div className='app__chef-sign'>
        <p > Adesh S</p>
        <p className='p__opensans'>Chef & Founder</p> 
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
