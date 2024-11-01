import React , { useState} from 'react'

const App = () => {
  let [counter, setCounter] = useState(5);
  const update = () => {
    setCounter(counter+1);
  }

  const decrease = () => {
    setCounter(counter-1)
  }
  return (
    <div>
      <h1>หมูปี้ง ปิ้งเองกินเอง</h1>
      <p>ราคาไม้ละ {counter} บาท <button onClick={update}>+</button><button onClick={decrease}>-</button></p>
      <p>5ไม้      {counter*5}</p>
      <p>10ไม้      {counter*10}</p>
      <p>20ไม้      {counter*20}</p>
      <p>30ไม้      {counter*30}</p>
    </div>
  )
}

export default App