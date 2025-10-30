import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  const datas = [
    {
      id: 1,
      image: `./images/BotySense_slide1.svg`,
      title: "",
      text: "",
    },
    {
      id: 2,
      image: `./images/BotySense_slide2.svg`,
      title: "",
      text: ``,
    },
    {
      id: 3,
      image: `./images/BotySense_slide3.svg`,
      title: "",
      text: ``,
    },
  ];

  return (
    <div className="container_slide">
      <h1 className="title__slide">Nos Incontournables</h1>
      <Carousel autoPlay interval={3000} infiniteLoop>
        {datas.map((slide) => (
          <div className="slide" key={slide.id}>
            <img className="slideimage" src={slide.image} alt="" />
            <div className="overlay">
              <h2 className="overlay__title">{slide.title}</h2>
              <p className="overlay__text">{slide.text}</p>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="tendance">
        <div className="Maquillage">
          <img src="./images/maquillages.svg" alt="" />
          <h4>MAQUILLAGE</h4>
        </div>
        <div className="soin">
          <img src="./images/soins.svg" alt="" />
          <h4>SOIN DE LA PEAU</h4>
        </div>
        <div className="coloration">
          <img src="./images/coloration.svg" alt="" />
          <h4>COLORATIONS</h4>
        </div>
        <div className="cheveux">
          <img src="./images/cheveux.svg" alt="" />
          <h4>CHEVEUX</h4>
        </div>
      </div>
    </div>
  );
}

export default Slider;
