import React from 'react';
import '../Recommanded/Recommanded.css';
import thumbnail1 from '../../../Asserts/thumbnail1.png';
import thumbnail2 from '../../../Asserts/thumbnail2.png';
import thumbnail3 from '../../../Asserts/thumbnail3.png';
import thumbnail4 from '../../../Asserts/thumbnail4.png';
import thumbnail5 from '../../../Asserts/thumbnail5.png';
import thumbnail6 from '../../../Asserts/thumbnail6.png';
import thumbnail7 from '../../../Asserts/thumbnail7.png';
import thumbnail8 from '../../../Asserts/thumbnail8.png';

const Recommanded = () => {
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6, thumbnail7, thumbnail8];
  
  return (
    <div className="recommanded">
      {thumbnails.map((thumbnail, index) => (
        <div key={index} className="side-vedio-list">
          <img src={thumbnail} alt={`thumbnail-${index}`} />
          <div className="vid-info">
            <h4>Beast channel here {index + 1}</h4>
            <p>Web developer</p>
            <p>199k Views</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommanded;
