// src/api.js
import { API_BASE_URL } from './config';
import { getToken, setToken } from './tokenService';

async function fetchAPI(endpoint, options) {
    const url = `${API_BASE_URL}/${endpoint}`;
    const token = getToken();
    
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        }
    };

    const finalOptions = { ...defaultOptions, ...options };
    if (finalOptions.body) {
        finalOptions.body = JSON.stringify(finalOptions.body);
    }

    const response = await fetch(url, finalOptions);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

export async function loginUser(credentials) {
    // 发起登录请求
    const response = await fetchAPI('login', {
        method: 'POST',
        body: credentials
    });

    // 假设token在response中的token字段
    if (response.data) {
        setToken(response.data); // 保存token到localStorage
    } else {
        throw new Error("Login failed: No token received.");
    }

    return response; // 返回响应，可能包含用户信息或其他数据
}

// 其他API功能可以在这里继续添加