import React from 'react'
import './listing.css'
import './listing.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import img from '../../../Assets/image (1).png'
import img1 from '../../../Assets/image (2).png'
import img2 from '../../../Assets/image (8).png'
import img3 from '../../../Assets/image (5).png'
import user1 from '../../../Assets/user (1).jpg'
import user2 from '../../../Assets/user (2).jpg'
import user3 from '../../../Assets/user (3).jpg'
import user4 from '../../../Assets/user (4).jpg'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img1} alt="Image Name" />
          <h3>Coffee Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img2} alt="Image Name" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img3} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>
        </div>

        <div className="sellers flex">
          <div className="topSellers">
            <div className="heading flex">
              <h3>Top Sellers</h3>
              <button className='btn flex'>
                See All <BsArrowRightShort className='icon'/>
              </button>
            </div>

            <div className="card flex">
              <div className="users">
                <img src={user1} alt="User Image" />
                <img src={user2} alt="User Image" />
                <img src={user3} alt="User Image" />
                <img src={user4} alt="User Image" />
              </div>
              <div className="cardText">
                <span>
                  14.556 Plant sold <br />
                  <small>
                    21 Sellers <span className="date">7 Days</span>
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className="featuredSellers">
            <div className="heading flex">
              <h3>Featured Sellers</h3>
              <button className='btn flex'>
                See All <BsArrowRightShort className='icon'/>
              </button>
            </div>

            <div className="card flex">
              <div className="users">
                <img src={user3} alt="User Image" />
                <img src={user1} alt="User Image" />
                <img src={user4} alt="User Image" />
                <img src={user2} alt="User Image" />
              </div>
              <div className="cardText">
                <span>
                  28,556 Plant sold <br />
                  <small>
                    26 Sellers <span className="date">31 Days</span>
                  </small>
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Listing