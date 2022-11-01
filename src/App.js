import './App.css';
import MainSection from './components/MainSection/MainSection';
// import Section2 from "./components/Section2/Section2";
// import Section3 from "./components/Section3/Section3"

const pictures = [
  {
    img1: 'https://i.pinimg.com/736x/ba/04/18/ba041809feb1758c174c9ee20e13d881.jpg',
    img2: 'https://images7.alphacoders.com/613/613769.jpg',
    img3: 'https://c4.wallpaperflare.com/wallpaper/301/782/409/audi-rain-wallpaper-preview.jpg'
  }
];
const texts = [
  {
    text1: 'BMW-m5',
    text2: 'Mercedes-Benz',
    text3: 'Audi'
  }
];
const infos = [
  {
    info1: 'BMW AG — немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов. Более 45 % акций принадлежит семье Квандт.',
    info2: 'Mercedes-Benz — торговая марка и одноимённая компания — производитель легковых автомобилей премиального класса, грузовых автомобилей.',
    info3: 'Audi AG — немецкая автомобилестроительная компания в составе концерна Volkswagen Group, специализирующаяся на выпуске автомобилей под маркой Audi.'
  }
];

function App() {
  return (
    <div>
      <MainSection 
      img1={pictures[0].img1} img2={pictures[0].img2} img3={pictures[0].img3}
      text1={texts[0].text1} text2={texts[0].text2} text3={texts[0].text3}
      info1={infos[0].info1} info2={infos[0].info2} info3={infos[0].info3}
      />
      {/* <Section2 />
      <Section3 /> */}
    </div>
  );
}

export default App;
