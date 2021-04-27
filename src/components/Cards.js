import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/card-1.jpg'
                            text='Ahsan Manzil used to be the official residential palace and seat of the Nawab of Dhaka.'
                            label='Ahsan Manzil'
                            path='/services'
                        />
                        <CardItem
                            src='images/card-2.jpg'
                            text='Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long,'
                            label='Cox’s Bazar'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/card-3.jpg'
                            text='Jaflong is a hill station and tourist destination in the Division of Sylhet, Bangladesh'
                            label='jaflong'
                            path='/services'
                        />
                        <CardItem
                            src='images/card-4.jpg'
                            text='Bandarban (Bengali: বান্দরবান), is a district in South-Eastern Bangladesh,'
                            label='Bandarban'
                            path='/products'
                        />
                        <CardItem
                            src='images/card-5.jpg'
                            text='Sajek Valley is an emerging tourist spot in Bangladesh'
                            label='Sajek Valley'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;