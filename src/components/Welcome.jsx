function Welcome(props) {
    const {setName,name,setIsLoggedIn} = props;

    const Logoutbtn = async () => {
        localStorage.removeItem('jwt');
        setIsLoggedIn(false);
        alert('로그아웃 되었습니다.');
        setName('');
    }

  return (
    <>
        <h2>{`${name}님, 환영합니다!`}</h2>
        <br />
        <button onClick={Logoutbtn}>로그아웃</button>
    </>
  );
}

export default Welcome;