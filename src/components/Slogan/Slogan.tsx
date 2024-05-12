import type { FC } from 'react';
import sostav1 from '../../images/sostav1.webp';
import sostav2 from '../../images/sostav2.webp';
import sostav3 from '../../images/sostav3.webp';
import AwesomeSlider from 'react-awesome-slider';
interface SloganProps {}

const Slogan: FC<SloganProps> = () => {
  return (
    <section className='slogan' id='slogan'>
      <AwesomeSlider className='slogan-slider'>
        <div className='slogan-slide'>
          <div className='slogan-title-wrapper'></div>
          <img className='slogan-img' src={sostav1} alt=''></img>
          <h1 className='slogan-title'>Профессиональная косметика для ваших волос</h1>
        </div>
        <div className='slogan-slide'>
          <div className='slogan-title-wrapper'></div>
          <h1 className='slogan-title'>Индивидуальный подход для каждого клиента</h1>
          <img className='slogan-img' src={sostav2} alt=''></img>
        </div>
        <div className='slogan-slide'>
          <div className='slogan-title-wrapper'></div>
          <h1 className='slogan-title'>Рекомендации по уходу за вашими волосами</h1>
          <img className='slogan-img' src={sostav3} alt=''></img>
        </div>
      </AwesomeSlider>
    </section>
  );
};

export default Slogan;
