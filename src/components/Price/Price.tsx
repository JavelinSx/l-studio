import type { FC } from 'react';

import { priceList } from '../../utils/utils';
interface PriceProps {}

const Price: FC<PriceProps> = () => {
  return (
    <section className='price' id='price'>
      <h2 className='price-title'>Прайс / Услуги</h2>
      <ul className='price-list'>
        {priceList.map((item, index) => {
          const indexStr = item.lastIndexOf(' от ');
          const service = item.substring(0, indexStr);
          const price = item.substring(indexStr + 1);

          return (
            <li className='price-item' key={index}>
              <span>{service}</span>
              <span className='price-item__span-price'>{price}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Price;
