import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";
import { useState } from "react";

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const [num, setNum] = useState(2)

  return (
    <>
    <h1>{count}</h1>
    <button onClick={ () =>{
      dispatch(increment())
    }}
    >Increment</button>
    <button onClick={ () =>{
      dispatch(decrement())
    }}>Decrement</button>
    <input type="text"
    value={num}
    onChange={(e) => {
      setNum(e.target.value)
    }}>
    </input>
    <button onClick={() => {
      dispatch(incrementByAmount(Number(num)))
    }}>Increment by Amount</button>
    </>
  )
}

export default App
