import React, { useState } from 'react';
import "./Featured.scss"
import { useNavigate } from "react-router-dom";


function Featured() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      navigate(`/gigs?search=${input}`);
    };
  
  return (
    <div className="featured">
     <div className= "container">
     <div className="left">
          <h1>
            Find the perfect <span>Designer</span> for your dream design creates
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "creative design"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Logo Design</button>
            <button>Poster design</button>
            <button>Book cover design</button>
            <button>Game art</button>
          </div>
        </div>
        <div className="right">
          <img src="img/man 3.png" alt="" />
        </div>
        
     </div>
    </div>
  )
}

export default Featured
