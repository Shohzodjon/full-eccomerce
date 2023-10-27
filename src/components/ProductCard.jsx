import  { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import {LuHeart} from 'react-icons/lu';
import {SlEye} from 'react-icons/sl'
import game from '../assets/images/game.png'

const ProductCard=({imgUrl,proName,discountPer, price, reateCount })=>{
    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
        setRating(rate)
      }
     
    return(
        <div className="product__card">
          <div className='product__img'>
            <img src={game} alt=" product img" />
            <button>{discountPer}</button>
            <div className='product__icon__box'>
              <span><LuHeart/></span>
              <span><SlEye/></span>
            </div>
          </div>
          <div className='product__info'>
           <h4>HAVIT HV-G92 Gamepad</h4>
           <p className='product__price'><span className='current__price'>$120</span> <span className='old__price'>$160</span></p>
           <div className='product__rate'>
           <Rating onClick={handleRating} initialValue={rating} size={20} />
           <span>(88)</span>
           </div>
          </div>
            
        </div>
    )
}
export default ProductCard;


