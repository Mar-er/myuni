import { useState, useRef } from 'react'

// 获取top值
export function useTop() {
  const [top, setTop] = useState(null)

  const ref = useRef(null);
  const getTop = () => {
    setTop(ref.current.getBoundingClientRect().top)
  };

  return [ref, top, getTop]
}

export function useIsIn(top) {
  const {innerHeight} = window
  return top < innerHeight
}