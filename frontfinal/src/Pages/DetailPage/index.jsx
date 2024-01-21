import React, { useEffect, useState } from 'react'
import './style.scss'
import { useParams } from 'react-router-dom';
const DetailPage = () => {
    const {id} =useParams()
    const [api, setApi] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:3000/${id}`)
        .then((res) => res.json())
        .then((data) => setApi(data));
    }, [id]);
  return (
    <section className='detail'>
         <div className="detail_card">
                <div className="detail_card_img">
                    <div className="detail_card_img_btn">
                        Add to cart
                    </div>
                    <div className="popular_container_allCard_card_img_icon">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <img src={api.img} alt="" />
                </div>
                <div className="detail_card_title">
                  {api.title}
                </div>
                <div className="detail_card_price">
                 $ {api.price}
                </div>
              </div>
    </section>
  )
}

export default DetailPage