import type { FC } from 'react';
import money from '../../images/icon/money.png';
import map from '../../images/icon/map.svg';
import cosiness from '../../images/icon/cosiness.svg';
import instrument from '../../images/icon/inctrument.svg';

interface InvocationProps {}

const Invocation: FC<InvocationProps> = () => {
  return (
    <section className='invocation'>
      <h2 className='invocation-title'>Почему стоит выбрать наc?</h2>
      <ul className='invocation-list'>
        <li className='invocation-item'>
          <img className='invocation-img' src={money} alt=''></img>
          <h4 className='invocation-text'>Доступные цены</h4>
        </li>
        <li className='invocation-item'>
          <img className='invocation-img' src={instrument} alt=''></img>
          <h4 className='invocation-text'>Проффесиональный подход</h4>
        </li>
        <li className='invocation-item'>
          <img className='invocation-img' src={cosiness} alt=''></img>
          <h4 className='invocation-text'>Уютная атмосфера</h4>
        </li>
        <li className='invocation-item'>
          <img className='invocation-img' src={map} alt=''></img>
          <h4 className='invocation-text'>Удобное расположение</h4>
        </li>
      </ul>
    </section>
  );
};

export default Invocation;
