import Button from '../../components/button/Button';
import Navbar from '../../components/navbar/Navbar';
import Avatar from '../../components/avatar/Avatar';
import './home.css'
import Title from '../../components/title/Title';
import Logos from '../../components/logos/Logos';
import { logoImgsData } from '../../constants/logo';
import Heading from '../../components/heading/Heading';
import Card from '../../components/card/Card';
import { cardData } from '../../constants/card';
import PositionSection from '../../components/positionSection/PositionSection';
import { positionSectionData } from '../../constants/positionsection';
import Footer from '../../components/footer/Footer';
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Avatar/>
        <Title/>
        <div className = 'btns-margin'>
        <Button className='btn-primary'   btnText='Get In Touch'   />
        <Button className='btn-secondary' btnText='Download CV'  />
        </div>
        <Heading className="icons-heading" text="EXPERIENCE WITH"/>
        <div className='logo-container'>
        <Logos src={logoImgsData[0]}/>
        <Logos src={logoImgsData[1]}/>
        <Logos src={logoImgsData[2]}/>
        <Logos src={logoImgsData[3]}/>
        <Logos src={logoImgsData[4]}/>
        </div>
        <Heading className="card-heading" text="PROJECTS"/>
        <div className="cards-container">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} img={card.cardImg} />
          ))}
        </div>
        <Heading className="experienceSection-heading" text="What I do"/>
        {
         positionSectionData.map((item, index) =>{
          return <PositionSection key={index} data={item}  />
         })
        }
        <Footer/>
    </div>
  )
}
