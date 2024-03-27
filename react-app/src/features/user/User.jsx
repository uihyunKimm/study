import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setAge, setAdd } from '../user/userSlice'
import { useState } from 'react'

function User() {
  const user = useSelector((state) => state.user)
  const [userData, setUserData] = useState([user])
  console.log(user)
  //dispatch에 action을 전달하면 해당 동작이 실행된다.
  const dispatch = useDispatch();

  return (
    <div>
      <h1>이름: {user.name}</h1>
      <h1>나이: {user.age}</h1>
      <div>
        <form onSubmit={() => setUserData(...user, user)}>
          이름: <input type="text" onChange={(e) => dispatch(setName(e))}/>
          나이: <input type="text" onChange={(e) => dispatch(setAge(e))}/>
          지역: <input type="text" onChange={(e) => dispatch(setAdd(e))}/>
          <button value="submit">추가</button>
            
        </form>
          {/* <table>
            <tr>
              <th>이름</th>
              <th>나이</th>
              <th>지역</th>
              <th>삭제</th>
            </tr>
            <tr>
              {userData.map((name)=>(<td>{name}</td>))}
            </tr>
          </table> */}
      </div>
    </div>
  )
}

export default User;