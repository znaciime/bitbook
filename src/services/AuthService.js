import jwt_decode from 'jwt-decode';

class AuthService {
    isLoggedIn() {
        return !!localStorage.getItem('token')
    };

    logout() {
        localStorage.removeItem("token")
    }
    
    getUserId() {
        const token = localStorage.getItem('token');
        if (!token) {
            return null;
        }

        const user = jwt_decode(token);
        
        return user.id;
    }

    getUserToken() {
        return `Bearer ${localStorage.getItem("token")}`;
    }

    loginUser(token) {
        localStorage.setItem('token', token.accessToken)
    }
}

export const Auth = new AuthService();