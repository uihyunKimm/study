import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount} from './counterSlice'
import { setName, setAge } from './userSlice2'

function Counter2() {
  const count = useSelector((state) => state.counter.value)
  const user = useSelector((state) => state.user)
  
  //dispatch에 action을 전달하면 해당 동작이 실행된다.
  const dispatch = useDispatch();

  return (
    <div>
      <h1>현재 카운터 값은 {count}입니다.</h1>
      <h1>이름: {user.name}</h1>
      <h1>나이: {user.age}</h1>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(100))}
        >
          Amount
        </button>
        <button
          onClick={() => dispatch(setName("김의현"))}
        >
          Amount
        </button>
        <button
          onClick={() => dispatch(setAge(20))}
        >
          Amount
        </button>
      </div>
    </div>
  )
}

export default Counter2;