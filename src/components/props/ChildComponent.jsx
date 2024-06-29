// ChildComponent.jsx
import React from 'react';

function ChildComponent(props) {
  const { increment } = props;

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
}

export default ChildComponent;
