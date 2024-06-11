import { useState } from 'react';
import axios from 'axios';
import { SlLogin } from "react-icons/sl";

function LoginForm(props) {
    const { styleData, setIsLoggedIn, setName} = props;

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  

  const onClickBtn = async () => {
    if (id.trim() === '' || pwd.trim() === '') {
      alert('아이디 또는 비밀번호를 입력해주세요.');
      return;
    }

    if (pwd.trim().length < 4) {
      alert('비밀번호는 최소 4자리 이상이어야 합니다.');
      return;
    } 

    try {
      const response = await axios.post('http://localhost:3000/token/login', { id, pwd });
      console.log(response.data);
      const { token } = response.data;
      setName(response.data.name);
      localStorage.setItem('jwt', token);
      setIsLoggedIn(true);
      alert('로그인 성공! 토큰이 저장되었습니다.');
      setId('');
      setPwd('');
    } catch (error) {
      alert('로그인 실패: ' + error);
    }
  };
  
  const Logoutbtn = async () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    alert('로그아웃 되었습니다.');
    setName('');
    return;
  }

  return (
    <div style={styleData}>
        <h2><div><SlLogin />Login</div></h2>
        <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
        />
        <button onClick={onClickBtn}>로그인 하기</button>
    </div>
  );
}

export default LoginForm;
