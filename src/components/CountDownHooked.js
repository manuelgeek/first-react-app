import React, {useEffect, useState} from 'react';

function CountDownHooked(props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // setInterval(() => {
    //   setCount((state) => {
    //     return state + 1
    //   })
    // }, 1000)
  })

  return (
    <div>
      <p>Timer 2: {count}</p>
    </div>
  );
}

export default CountDownHooked;
