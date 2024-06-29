import React from 'react';
import ChildCall from './ChildCall';
import user from '../../assets/user.jpg';

function ParentCall() {
    
    const imageUrl = user;
    const data = ['apple', 'banana', 'mango'];
    const info = { name : 'fayaz' , age : 27};
    const numb = 24;
    const str = 'Hello from parent'; 

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildCall 
        imageUrmageUrl={imageUrl}
        data = {data}
        info = {info}
        numb = {numb}
        str = {str}
        />
    </div>
  );
}

export default ParentCall;
