import React, { useContext } from 'react'
import { WishListContext } from '../../Context/WishListContext'
import './style.scss'
import { Helmet } from 'react-helmet-async'
const WishList = () => {
    const{removeWishList ,wishList}  = useContext(WishListContext)
  return (
    <>
    <Helmet>
      <title>
        Wishlist Page
      </title>
    </Helmet>
    <section className='wishList'>
        <div  className='wishList_container'>
        <div className="wishList_container_table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {wishList.map((x) => {
                    return (
                      <tr key={x._id}>
                        <td>
                          <img src={x.img} alt="" />
                        </td>
                        <td>{x.title}</td>
                        <td>{x.price}$</td>
                        <td>
                          <button onClick={()=>removeWishList(x)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
    </section>
    </>
  )
}

export default WishList