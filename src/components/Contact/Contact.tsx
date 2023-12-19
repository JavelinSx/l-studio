import type { FC } from 'react';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <section className='contact' id='contact'>
      <h1 className='contact-title'>Контакты</h1>
      <div className='contact-container'>
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
            Открыть на карте
          </a>
        </button>
        <button className='contact-vk'>
          <a href='https://vk.com/id560785882' target='_blank' rel='noreferrer'>
            VK
          </a>
        </button>
      </div>
    </section>
  );
};

export default Contact;
