import type { FC } from 'react';
import { useState, useEffect } from 'react';
interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const [width, setWidth] = useState(window.innerWidth >= 769);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth >= 769);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className='contact' id='contact'>
      <h1 className='contact-title'>Контакты</h1>

      <div className='contact-container'>
        {
          width ? 
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A397d6169aa8aad70275c37250a3b90040ebeb1cc65750de311709e36aa926d29&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>        

          :

          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa99ac96c267b07d270fd51cb90541a1f27be5084d370ec70a458a372b1798187&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>

        }
        <div className='contact-form'>
          <span className='contact-personal'>Мастер: Елена</span>
          <span className='contact-telefon'>
            Телефон:{' '}
            <a className='contact-telefon-link' href='tel:89626653341'>
              89626653341
            </a>
          </span>
          <span className='contact-address'>Адрес: п.Плесецк, ул. Кооперативная 4Б, 3 этаж, офис 21</span>
          <button className='contact-map'>
          <a href='https://yandex.ru/maps/-/CDeuqWy~' target='_blank' rel='noreferrer'>
            ОТКРЫТЬ НА КАРТЕ
          </a>
          </button>
          <button className='contact-vk'>
            <a href='https://vk.com/id560785882' target='_blank' rel='noreferrer'>
              VK
            </a>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
