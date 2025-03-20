import React, {useState} from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import search from '../../assets/svg/search.svg'
import wishlist from '../../assets/svg/wishlist.svg'
import cart from '../../assets/svg/cart.svg'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/product/productSlice'





function Header() {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  function handleKeyDown(e) {
    if(e.keyCode == 13){
      dispatch(setSearch(title))
      setTitle("")
    }
  }


  return (
    <div className='header'>
      <div className="top-header">
        <div className="header-content container">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link>ShopNow</Link>
        </p>
        <select name="" id="">
          <option value="kg">Kyrgyz</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
        </div>
      </div>
      <div className="main-header container">
            <div className="header-left">
              <Link to="/">Exclusive</Link>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Sigh Up</Link>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="search">
                <input type="text" onChange={(e) => setTitle(e.target.value)}  placeholder='What are you looking for?' onKeyDown={handleKeyDown}/>
                <img src={search} alt="" className='search-icon'/>
              </div>
              <div className="icons">
                <img src={wishlist} alt="" />
                <img src={cart} alt="" />
              </div>
            </div>
      </div>
    </div>
  )
}

export default Header
