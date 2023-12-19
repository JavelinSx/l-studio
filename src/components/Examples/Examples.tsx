import type { FC } from 'react';
import { useState } from 'react';
import Accordeon from '../Accordeon/Accordeon';
import hairCut1 from '../../images/haircut1.webp';
import hairCut2 from '../../images/haircut2.webp';
import hairCut3 from '../../images/haircut3.webp';
import blondColoring1 from '../../images/coloring-blond1.webp';
import blondColoring2 from '../../images/coloring-blond2.webp';
import blondColoring3 from '../../images/coloring-blond3.webp';
import doubleColoring1 from '../../images/double-coloring1.webp';
import doubleColoring2 from '../../images/double-coloring2.webp';
import doubleColoring3 from '../../images/double-coloring3.webp';
import hairstyle1 from '../../images/hairstyle1.webp';
import hairstyle2 from '../../images/hairstyle2.webp';
import hairstyle3 from '../../images/hairstyle3.webp';
interface ExamplesProps {}

const Examples: FC<ExamplesProps> = () => {
  const [hairCuts] = useState([hairCut1, hairCut2, hairCut3]);
  const [blondColorings] = useState([blondColoring1, blondColoring2, blondColoring3]);
  const [doubleColorings] = useState([doubleColoring1, doubleColoring2, doubleColoring3]);
  const [hairStyles] = useState([hairstyle1, hairstyle2, hairstyle3]);
  const handleOpenPopup = () => {};
  return (
    <section className='examples' id='examples'>
      <h2 className='examples-title-accord'>Примеры работ</h2>
      <Accordeon titleText='Стрижки' imgSlides={hairCuts} imgCLick={handleOpenPopup}></Accordeon>
      <Accordeon titleText='Окрашивание блонд' imgSlides={blondColorings} imgCLick={handleOpenPopup}></Accordeon>
      <Accordeon
        titleText='Двойное/скрытое окрашивание'
        imgSlides={doubleColorings}
        imgCLick={handleOpenPopup}
      ></Accordeon>
      <Accordeon titleText='Причёски/укладки' imgSlides={hairStyles} imgCLick={handleOpenPopup}></Accordeon>
    </section>
  );
};

export default Examples;
