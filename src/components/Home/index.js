import {Link} from 'react-router-dom'
import Header from '../Header'

// import mainImage from '/src/assets/main-page-img.jpg'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        {/* <img
          src={mainImage}
          alt="main-image"
          className="home-mobile-img"
        /> */}
        <p className="home-description">
          At Swiftbuy, we understand that modern lifestyles demand efficiency
          and ease, which is why we have curated a vast and diverse selection of
          products spanning across multiple categories. Whether you are
          searching for the latest fashion trends, cutting-edge electronics,
          home essentials, or unique gifts, Swiftbuy has you covered.
        </p>
        <br />
        <p className="home-description">
          Our intuitive and user-friendly interface ensures that navigating
          through our extensive catalog is a breeze. With just a few clicks or
          taps, you can explore countless options, compare prices, read reviews,
          and make informed decisions—all from the comfort of your home or on
          the go.
        </p>
        <br />
        <p className="home-description">
          Shopping with Swiftbuy is not just about convenience. it is also about
          peace of mind. We prioritize the security of your transactions,
          employing state-of-the-art encryption technologies to safeguard your
          personal information and financial data. Your privacy and security are
          our top priorities, allowing you to shop with confidence.
        </p>
        <br />
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      {/* <img
        src={mainImage}
        alt="clothes that get you noticed"
        className="home-desktop-img"
      /> */}
    </div>
  </>
)

export default Home
