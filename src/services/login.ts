
import { api } from "./api";

export class LoginService { 
    
    async autenticar(username: string, password: string){       
            //const response = await api.post(`${caminho}/auth`, { username, password });
            if (username === "admin" && password ==="password123"){
                const response = "2802551c718d7f7"
                return response;
            }else{
                console.log("Usuario ou senha invalida")
            }
            
    }
};

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('jwt_token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export const authService = {
    setToken: (token: string) => {
        localStorage.setItem('jwt_token', token);
    },
    
    getToken: () => {
        return localStorage.getItem('jwt_token');
    },
    
    removeToken: () => {
        localStorage.removeItem('jwt_token');
    },
    
    isAuthenticated: () => {
        return !!localStorage.getItem('jwt_token');
    }
};