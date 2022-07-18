import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import img1 from '../../images/Gaming-Petak.webp';
import img2 from '../../images/cybersale-week.webp';
import img3 from '../../images/LG-Ultra-Gear.webp';
import img4 from '../../images/steelseries.webp';
import stolica from '../../images/GamingStolica.webp';
import monitor from '../../images/GamingMonitori.webp';
import racunar from '../../images/GamingRacunari.webp';
import laptop from '../../images/GamingLaptop.webp';
import konzola from '../../images/Konzole.webp';
import igrice from '../../images/Igrice.webp';
import p1 from '../../images/razer.jpg';
import p2 from '../../images/reddragon.jpg';
import p3 from '../../images/msi.jpg';


function Item(props)
{
    return (
        <div>
            <Paper className='slider-container'>
                <img className='slider-img' src={props.item.src} />

                <Button className="CheckButton">
                    Saznaj vise
                </Button>
            </Paper>
        </div> 
    )
}

function Home(props) {
    var items = [
        {
            src: img1
        },
        {
            src: img2
        },
        {
            src: img3
        },
        {
            src: img4
        }
    ]

    var promotions = [
        {
            src: p1
        },
        {
            src: p2
        },
        {
            src: p3
        }
    ]

    var kategorije = [
        {
            src: stolica,
            description: "Gaming Stolice",
            href: "#"
        },
        {
            src: monitor,
            description: "Gaming Monitori",
            href: "#"
        },
        {
            src: racunar,
            description: "Gaming Racunari",
            href: "#"
        },
        {
            src: laptop,
            description: "Gaming Laptop",
            href: "#"
        },
        {
            src: konzola,
            description: "Konzole",
            href: "#"
        },
        {
            src: igrice,
            description: "Igrice",
            href: "#"
        }
    ]

    return (
        <div className='home-container'>
            <Carousel className='carousel'>
            {items.map( (item, i) => <Item key={i} item={item} /> )}
            </Carousel>
            <div className='promotions'>
                {promotions.map((promo, i) => <div className='promo-img' key={i}>
                    <img src={promo.src} />
                </div>)}
            </div>
            <div className='popular-categories'>
                <h1>POPULARNE KATEGORIJE</h1>
                <div className='kategorije'>
                    {kategorije.map((kateg, i) => <a key={i} href={kateg.href}>
                        <img src={kateg.src}/>
                        <h3>{kateg.description}</h3>
                    </a>)}
                </div>
            </div>
        </div>
    )
}

export default Home;
