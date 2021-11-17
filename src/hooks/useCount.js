import {useState} from "react";

export default function useCount() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count+1)
  }

  const removeCount = () => {
    setCount((state) => {
      if(state)return state-1
      return state
    })
  }

  return {
    count,
    addCount,
    removeCount
  }
}
