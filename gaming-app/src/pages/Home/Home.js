import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { promotions, periferije, kategorije, items } from "../../proizvodi";

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

    const itemss = items;
    const promotionss = promotions;
    const kategorijee = kategorije;
    const periferijee = periferije;
    
    return (
        <div className='home-container'>
            <Carousel className='carousel'>
            {itemss.map( (item, i) => <Item key={i} item={item} /> )}
            </Carousel>
            <div className='promotions'>
                {promotionss.map((promo, i) => <div className='promo-img' key={i}>
                    <img src={promo.src} />
                </div>)}
            </div>
            <div className='popular-categories'>
                <h1>POPULARNE KATEGORIJE</h1>
                <div className='kategorije'>
                    {kategorijee.map((kateg, i) => <a key={i} href={kateg.href}>
                        <img src={kateg.src}/>
                        <h3>{kateg.description}</h3>
                    </a>)}
                </div>

                <h1>GAMING PERIFERIJE</h1>
                <div className='kategorije'>
                    {periferijee.map((per, i) => <a key={i} href={per.href}>
                        <img src={per.src}/>
                        <h3>{per.description}</h3>
                    </a>)}
                </div>
            </div>
        </div>
    )
}

export default Home;
