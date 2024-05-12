import type { FC } from 'react';
import { useState } from 'react';
import Accordeon from '../Accordeon/Accordeon';
import hairCut1 from '../../images/haircut1.webp';
import hairCut2 from '../../images/haircut2.webp';
import hairCut3 from '../../images/haircut3.webp';
import blondColoring1 from '../../images/coloring-blond1.webp';
import blondColoring2 from '../../images/coloring-blond2.webp';
import blondColoring3 from '../../images/coloring-blond3.webp';
import blondColoring4 from '../../images/okrash1.jpg';
import blondColoring5 from '../../images/okrash2.jpg';
import doubleColoring1 from '../../images/double-coloring1.webp';
import doubleColoring2 from '../../images/double-coloring2.webp';
import doubleColoring3 from '../../images/double-coloring3.webp';
import hairstyle1 from '../../images/hairstyle1.webp';
import hairstyle2 from '../../images/hairstyle2.webp';
import hairstyle3 from '../../images/hairstyle3.webp';
import melir1 from '../../images/melir1.jpg'
import melir2 from '../../images/melir2.jpg'
import melir3 from '../../images/melir3.jpg'
import melir4 from '../../images/melir4.jpg'
import melir5 from '../../images/melir5.jpg'
import melir6 from '../../images/melir6.jpg'
import ton1 from '../../images/ton1.jpg'
import ton2 from '../../images/ton2.jpg'
import ton3 from '../../images/ton3.jpg'
import ton4 from '../../images/ton4.jpg'
import ton5 from '../../images/ton5.jpg'
import tonir1 from '../../images/tonir1.jpg'
import tonir2 from '../../images/tonir2.jpg'
import tonir3 from '../../images/tonir3.jpg'
import tonir4 from '../../images/tonir4.jpg'
import tonir5 from '../../images/tonir5.jpg'
interface ExamplesProps {}

const Examples: FC<ExamplesProps> = () => {
  const [hairCuts] = useState([hairCut1, hairCut2, hairCut3]);
  const [blondColorings] = useState([blondColoring1, blondColoring2, blondColoring3, blondColoring4, blondColoring5]);
  const [doubleColorings] = useState([doubleColoring1, doubleColoring2, doubleColoring3]);
  const [hairStyles] = useState([hairstyle1, hairstyle2, hairstyle3]);
  const [melir] = useState([melir1,melir2,melir3,melir4,melir5,melir6])
  const [ton] = useState([ton1, ton2,ton3,ton4,ton5])
  const [tonir] = useState([tonir1,tonir2,tonir3,tonir4,tonir5])

  const handleOpenPopup = () => {};
  return (
    <section className='examples' id='examples'>
      <h2 className='examples-title-accord'>Примеры работ</h2>
      <Accordeon titleText='Стрижки' imgSlides={hairCuts} imgCLick={handleOpenPopup}></Accordeon>
      <Accordeon titleText='Окрашивание блонд' imgSlides={blondColorings} imgCLick={handleOpenPopup}></Accordeon>
      <Accordeon titleText='Двойное/скрытое окрашивание' imgSlides={doubleColorings} imgCLick={handleOpenPopup}></Accordeon>
      <Accordeon titleText='Причёски/укладки' imgSlides={hairStyles} imgCLick={handleOpenPopup}></Accordeon>
      <Accordeon titleText='Мелирование' imgSlides={melir} imgCLick={handleOpenPopup}></Accordeon>
      <Accordeon titleText='Тонирование' imgSlides={tonir} imgCLick={handleOpenPopup}></Accordeon>
      <Accordeon titleText='Окрашивание один тон' imgSlides={ton} imgCLick={handleOpenPopup}></Accordeon>
    </section>
  );
};

export default Examples;
