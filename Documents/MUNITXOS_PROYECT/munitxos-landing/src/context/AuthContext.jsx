import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const STORAGE_KEY_USERS = 'munchos_auth_users_v1';
const STORAGE_KEY_SESSION = 'munchos_auth_session_v1';

// Default Accounts
const INITIAL_USERS = [
  {
    email: 'owner@munchos.de',
    password: 'owner',
    name: 'Oskar Marijuan (Owner)',
    role: 'owner'
  },
  {
    email: 'staff@munchos.de',
    password: 'staff',
    name: 'MUNCHOS Equipo Staff',
    role: 'staff'
  }
];

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_USERS);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return INITIAL_USERS;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const session = localStorage.getItem(STORAGE_KEY_SESSION);
      if (session) return JSON.parse(session);
    } catch (e) {}
    return null;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
    } catch (e) {}
  }, [users]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(STORAGE_KEY_SESSION);
      }
    } catch (e) {}
  }, [currentUser]);

  const login = (email, password) => {
    const found = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (found) {
      const { password, ...userSession } = found;
      setCurrentUser(userSession);
      return { success: true, user: userSession };
    }
    return { success: false, error: 'Credenciales inválidas. Comprueba tu correo y contraseña.' };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const createStaffAccount = (newStaffData) => {
    if (!currentUser || currentUser.role !== 'owner') {
      return { success: false, error: 'Solo el propietario (Owner) puede crear cuentas de staff.' };
    }

    const exists = users.some(u => u.email.toLowerCase() === newStaffData.email.toLowerCase());
    if (exists) {
      return { success: false, error: 'Ya existe una cuenta con este correo electrónico.' };
    }

    const newUser = {
      ...newStaffData,
      role: 'staff'
    };

    const updated = [...users, newUser];
    setUsers(updated);
    return { success: true, user: newUser };
  };

  // Centralized Permission Checker
  const hasPermission = (permission) => {
    if (!currentUser) return false;
    if (currentUser.role === 'owner') return true; // Owner has full access

    // Staff permissions mapping
    const staffAllowedPermissions = [
      'view_calendar',
      'manage_reservations',
      'add_reservation'
    ];

    return staffAllowedPermissions.includes(permission);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        users,
        login,
        logout,
        createStaffAccount,
        hasPermission
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
