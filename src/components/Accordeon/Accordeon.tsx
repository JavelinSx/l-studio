import type { FC } from 'react';
import { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import ArrowIcon from '../../images/icon/arrow.svg';
import Animation from '../Animation';
interface AccordeonProps {
  titleText: string;
  imgSlides: string[];
  imgCLick: () => void;
}

const Accordeon: FC<AccordeonProps> = ({ titleText, imgSlides, imgCLick }) => {
  const [toggleAccord, setToggleAccord] = useState(false);

  return (
    <>
    <div className={toggleAccord ? 'accordeon accordeon-open' : 'accordeon accordeon-close'}>
      <div className='accordeon-title-container' onClick={() => setToggleAccord(!toggleAccord)}>
        <h3 className='accordeon-title'>{titleText}</h3>
        <img className='accordeon-icon' src={ArrowIcon} alt='icon'></img>
      </div>
      <div className={toggleAccord ? 'accordeon-list accordeon-list-open' : 'accordeon-list accordeon-list-close'}>
        <AwesomeSlider className='accordeon-slider'>
          {imgSlides.map((item, index) => (
            <div className='accordeon-list-item' key={index}>
              <img className='accordeon-img' src={item} alt='' onClick={imgCLick}></img>
            </div>
          ))}
        </AwesomeSlider>
      </div>
      
    </div>

    </>
    
  );
};

export default Accordeon;
