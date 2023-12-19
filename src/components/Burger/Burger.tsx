import type { FC } from 'react';
import { useState } from 'react';
import cutHair from '../../images/icon/hair-cut.svg';
interface BurgerProps {}

const Burger: FC<BurgerProps> = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClick = (event: React.MouseEvent, anchor: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(anchor);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 200;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth', // For smooth scrolling
      });
    }
    setToggle(false);
  };

  return (
    <div className='burger'>
      <img className='burger-icon' src={cutHair} alt=''></img>
      <h1 className='burger-title'>Л - Студия</h1>

      <button
        className={toggle ? 'burger-button burger-toggle-close' : 'burger-button burger-toggle-open'}
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={toggle ? 'burger-list burger-list-open' : 'burger-list burger-list-close'}>
        <li className='burger-item' onClick={(event) => handleClick(event, '#about')}>
          <a className='burger-link' href='#about'>
            О студии
          </a>
        </li>
        <li className='burger-item' onClick={(event) => handleClick(event, '#examples')}>
          <a className='burger-link' href='#examples'>
            Примеры работ
          </a>
        </li>
        <li className='burger-item' onClick={(event) => handleClick(event, '#price')}>
          <a className='burger-link' href='#price'>
            Прайс / Услуги
          </a>
        </li>
        <li className='burger-item' onClick={(event) => handleClick(event, '#contact')}>
          <a className='burger-link' href='#contact'>
            Контакты
          </a>
        </li>
        <li className='burger-item'>
          <a className='burger-link-vk' href='https://vk.com/id560785882' target='_blank' rel='noreferrer'>
            Страница ВК
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Burger;
