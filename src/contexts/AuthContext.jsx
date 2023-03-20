import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function storageLoading() {
      const storageUser = localStorage.getItem('SistemUser');

      if (storageUser) {
        setUser(JSON.parse(storageUser));

        setLoading(false);
      }
      setLoading(false);
    }
    storageLoading();
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
