import { BottomTextContainer, HeroContainer, HeroMainText, HeroSecText, ImgContainer2, TextContainer } from './Hero.styled'
import heroimg from '../../assets/imgs/hero.png'

function Hero() {
    return (
        <HeroContainer>
            <TextContainer>
                <HeroMainText>Furniture well crafted</HeroMainText>
                <HeroSecText>Handcrafted pieces with top notch materials and exquisite design</HeroSecText>
            </TextContainer>
            <ImgContainer2><img src={heroimg} /></ImgContainer2>
            <BottomTextContainer>
                <HeroSecText>Our Products</HeroSecText>
            </BottomTextContainer>
        </HeroContainer>
    )
}

export default Hero