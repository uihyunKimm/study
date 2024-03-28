import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount} from './counterSlice'
import { setName, setAge, setAdd } from '../features/user/userSlice'
import { useState } from 'react'

function User() {
  const count = useSelector((state) => state.counter.value)
  const user = useSelector((state) => state.user)
  const [userData, setUserData] = useState(user)
  //dispatch에 action을 전달하면 해당 동작이 실행된다.
  const dispatch = useDispatch();

  return (
    <div>
      <h1>현재 카운터 값은 {count}입니다.</h1>
      <h1>이름: {user.name}</h1>
      <h1>나이: {user.age}</h1>
      <div>
        <form onSubmit={() => setUserData(...user, user)}>
          이름: <input type="text" onChange={(e) => dispatch(setName(e))}/>
          나이: <input type="text" onChange={(e) => dispatch(setAge(e))}/>
          지역: <input type="text" onChange={(e) => dispatch(setAdd(e))}/>
          <button onClick={dispatch(addMember(user))}>추가</button>
            
        </form>
          <table>
            <tr>
              <th>이름</th>
              <th>나이</th>
              <th>지역</th>
              <th>삭제</th>
            </tr>
            <tr>
              {user.map(()=>(<td>{user.name}</td>))}
              {user.map(()=>(<td>{user.age}</td>))}
              {user.map(()=>(<td>{user.add}</td>))}
            </tr>
          </table>
      </div>
    </div>
  )
}

export default User;