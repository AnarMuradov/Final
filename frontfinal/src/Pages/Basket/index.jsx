import React, { useContext } from "react";
import { BasketContext } from "../../Context/BasketContext";
import "./style.scss";
import { Helmet } from "react-helmet-async";
const Basket = () => {
  const { removebasket, basket, increase, decrease } =
    useContext(BasketContext);
  let total = 0;
  return (
    <>
      <Helmet>
        <title>Basket Page</title>
      </Helmet>
      <section className="basket">
        <div className="basket_container">
          <div className="basket_container_table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <td>Count</td>
                  <th>Delete</th>
                 
                </tr>
              </thead>
              <tbody>
                {basket.map((x) => {
                  total += x.count * x.price;
                  return (
                    <tr key={x._id}>
                      <td>
                        <img src={x.img} alt="" />
                      </td>
                      <td>{x.title}</td>

                      <td>{x.price}$</td>
                      <td>
                        <button onClick={() => increase(x)}>+</button>
                        {x.count}
                        <button onClick={() => decrease(x)}>-</button>
                      </td>
                      <td>
                        <button onClick={() => removebasket(x)}>Delete</button>
                      </td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h3>Total:{total}</h3>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Basket;
