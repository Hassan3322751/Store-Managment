import { useState, createContext, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({isAdmin: true});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const data = await userService.getUser();
        setUser({isAdmin: true})
        // setUser(false)
      } catch (error) {
        setUser(null);
        toast.error(error);
      }
    };

    fetchUser();
  }, [])
  

  const login = async (email, password) => {
    try {
      const user = await userService.login(email, password);
      setUser(user);
      toast.success('Login Successful');
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const logout = async() => {
    const res = await userService.logout();
    setUser(null);
    toast.success('Logout Successful');
  };

  const changePassword = async passwords => {
    await userService.changePassword(passwords);
    logout();
    toast.success('Password Changed Successfully, Please Login Again!');
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, logout, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);