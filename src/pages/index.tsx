import { HomePageFooter, Slider } from "@src/components";
import { Image } from "react-bootstrap";
import { HeaderDrawerHOC } from "@src/HOCs/";
const Home: React.FC = () => {
  const slides = [
    <video autoPlay loop muted className="videoContainer">
      <source src="./videos/clothingVideo.mp4" type="video/mp4" />
    </video>,
    <Image src="./slider/s1.jpg" alt="slider" />,
    <Image src="./slider/s2.jpeg" alt="slider" />,
    <Image src="./slider/s3.jpeg" alt="slider" />,
    <Image src="./slider/s4.jpg" alt="slider" />,
    <HomePageFooter />,
  ];

  return (
    <div className="home-page">
      <Slider slides={slides} />
    </div>
  );
};

export default HeaderDrawerHOC(Home);
