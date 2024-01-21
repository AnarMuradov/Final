import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { WishListContext } from "../../../Context/WishListContext";
import { BasketContext } from "../../../Context/BasketContext";
const PopularSection = () => {
  const{ addWishList,isWishList }  = useContext(WishListContext)
  const {addbasket,isbasket} = useContext(BasketContext)
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  return (

    <section className="popular">
      <div className="popular_container">
        <div className="popular_container_title">
          <h2>Popular Items</h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
        </div>
        <div className="popular_container_allCard">
          {api.map((x) => {
            return (
              <div key={x._id} className="popular_container_allCard_card">
                <div className="popular_container_allCard_card_img">
                  <div onClick={()=>addbasket(x)} className="popular_container_allCard_card_img_btn">
                    {!isbasket(x) ?"Add to cart":"Remove"}
                  </div>
                  <div className="popular_container_allCard_card_img_icon" onClick={()=>addWishList(x)}>
                    {!isWishList(x) ? <i className="fa-regular fa-heart"></i>:<i className="fa-solid fa-heart" ></i>}
                  </div>
                  <img src={x.img} alt="" />
                </div>
                <div className="popular_container_allCard_card_title">
                  {x.title}
                </div>
                <div className="popular_container_allCard_card_price">
                  $ {x.price}
                  <Link to={`/DetailPage/${x._id}`}>
                    <button>Detail</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="popular_container_btn">
          <button>VIEW MORE PRODUCTS</button>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
