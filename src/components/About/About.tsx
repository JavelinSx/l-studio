import type { FC } from 'react';

import studio1 from '../../images/studio1.webp';
import studio2 from '../../images/studio2.webp';
interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <section className='about' id='about'>
      <h1 className='about-title'>О нашей студии</h1>
      <div className='about-master'>
        <h3 className='about-text'>
          Рада приветствовать Вас! Меня зовут Елена😉 Я парикмахер - универсал 💇‍♂💇‍♀, но так же люблю заниматься
          женскими стрижками, окрашиваниями и прическами, укладками. Работаю с душой, в уютной студии, с горячим чаем и
          отличным настроением!
        </h3>
        <img className='about-img' src={studio2} alt=''></img>
        <img className='about-img' src={studio1} alt=''></img>
      </div>
    </section>
  );
};

export default About;
