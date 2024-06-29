import React from 'react';
import '../../App.css'

function ChildCall(props) {
    const { imageUrl, data, info, numb, str } = props;

  
    return (
        
        <div>
          <h3>Child Component</h3>
        
          <div>
            <h4>Image:</h4>
            <img src={imageUrl} alt="Example" />
          </div>

          <div>
            <h4>Array:</h4>
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Object:</h4>
            <p>Name: {info.name}</p>
            <p>Age: {info.age}</p>
          </div>
          
          <div>
            <h4>Number:</h4>
            <p>{numb}</p>
          </div>
          
          <div>
            <h4>String:</h4>
            <p>{str}</p>
          </div>
          
        </div>
      );
    }

export default ChildCall;