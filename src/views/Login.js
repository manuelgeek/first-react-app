import React, {useRef} from 'react';

function Login(props) {
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('email', email.current.value)
    console.log('password', password.current.value)
  }

  return (
    <div>
      <br/>
      <form onSubmit={handleSubmit}>
        <input ref={email} type="email" placeholder={'email'}/> <br/> <br/>
        <input ref={password} type="password" placeholder={'password'}/> <br/><br/>
        <button type={'submit'}>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
