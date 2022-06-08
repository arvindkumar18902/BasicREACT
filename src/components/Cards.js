import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>This is my entire journey</h1>
        <div className = "cards_container">
            <div className="cards_wrapper">
                <ul className="cards_items">
                    <CardItem 
                    src="./school.png"
                    text="This tells the story of when I had attended school"
                    label="school"
                    path="/about-me"
                    />
                    <CardItem 
                    src="./uni.png"
                    text="This tells the story of when I had attended College"
                    label="university"
                    path="/about-me"
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
