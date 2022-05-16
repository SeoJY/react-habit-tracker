import React, {useCallback, useEffect, useState, useRef} from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0); // Hook 사용
  // const spanRef = React.createRef();
  const spanRef = useRef(); // Hook 사용

  // const handleIncrement = () => {
  const handleIncrement = useCallback(() => { // useCallback Hook 사용
    setCount(count + 1);
  })

  // useEffect(() => { console.log(`mounted & updated!: ${count}`) }, [count]); // 업데이트 될 때마다 호출
  useEffect(() => { console.log(`mounted & updated!: ${count}`) }, []); // 마운트 되었을 때만 호출

  return (
    <li className="habit">
      <i className="habit-bullet fa-solid fa-circle-dot"></i>
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <span className="habit-btn-wrap">
        <button className="habit-button habit-increase" onClick={handleIncrement}>
          <i className="fas fa-plus-square"></i>
          <span className="blind">횟수 더하기</span>
        </button>
      </span>
    </li>
  );
}

export default SimpleHabit;