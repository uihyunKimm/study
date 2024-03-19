import React,{useState} from "react";

const LoginOut = () => {
    let [value, setValue] = useState('안녕하세요');
    function login() {
        setValue('로그인되었습니다');
    }
    function logout() {
        setValue('로그아웃되었습니다');
    }
    
    return(
        <>
            <h1>{value}</h1>
            <button onClick={login}>로그인</button>
            <button onClick={logout}>로그아웃</button>
        </>
    )
}

export default LoginOut;