import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState({
        isAuth: false,
        token: null,
    });

    const navigate = useNavigate();

    const loginUser = (token) => {
        setAuthState({ isAuth: true, token: token });
    };

    const logoutUser = () => {
        setAuthState({ isAuth: false, token: null });
        navigate("/login"); // Redirect to Login page
    };

    return (
        <AuthContext.Provider value={{ loginUser, logoutUser, authState }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
