import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/Login/api.js'; // 导入loginUser函数
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // 用于显示错误信息
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Login attempted with username:', username, 'and password:', password);
    try {
      // 使用用户名和密码调用loginUser方法
      const response = await loginUser({ username, password });
      console.log('Login successful:', response);
      // 登录成功后的操作，比如页面跳转
      navigate('/'); 
      
    } catch (error) {
      // 登录出错时设置错误信息
      setError(error.message);
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>} {/* 显示错误信息 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;