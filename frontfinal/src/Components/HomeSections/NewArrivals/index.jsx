import React from 'react'
import './style.scss'
const NewArrivals = () => {
  return (
    <section className='newArrivals'>
        <div className='newArrivals_container' >
        <div className='newArrivals_container_title'>
        <h2>New Arrivals</h2>
        </div>
        <div className='newArrivals_container_allCard'>
            <div className='newArrivals_container_allCard_card'>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="" />

                <div className='newArrivals_container_allCard_card_content'>
                    <h3>Thermo Ball Etip Glove</h3>
                    <span>$ 45,473</span>
                </div>
            </div>
            <div className='newArrivals_container_allCard_card'>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="" />

                <div className='newArrivals_container_allCard_card_content'>
                    <h3>Thermo Ball Etip Glove</h3>
                    <span>$ 45,473</span>
                </div>
            </div>
            <div className='newArrivals_container_allCard_card'>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="" />

                <div className='newArrivals_container_allCard_card_content'>
                    <h3>Thermo Ball Etip Glove</h3>
                    <span>$ 45,473</span>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default NewArrivals