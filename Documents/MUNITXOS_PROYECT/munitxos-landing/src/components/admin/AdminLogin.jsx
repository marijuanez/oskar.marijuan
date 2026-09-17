import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail, Key, ShieldCheck, User } from 'lucide-react';

export const AdminLogin = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const res = login(email, password);
    if (!res.success) {
      setError(res.error);
    }
  };

  const handleQuickLogin = (demoEmail, demoPassword) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
    const res = login(demoEmail, demoPassword);
    if (!res.success) {
      setError(res.error);
    }
  };

  return (
    <div className="admin-login-screen">
      <div className="login-card">
        
        <div className="login-header">
          <img src="/images/logo-definitive.png" alt="MUNCHOS Admin" className="login-logo" />
          <h2>Panel de Control MUNCHOS</h2>
          <p>Acceso restringido para propietarios y personal autorizado</p>
        </div>

        {error && <div className="login-error-banner">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-field">
            <label><Mail size={16} /> Correo Electrónico:</label>
            <input 
              type="email" 
              required 
              placeholder="propietario@munchos.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label><Key size={16} /> Contraseña:</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            <Lock size={18} />
            <span>Iniciar Sesión en el Panel</span>
          </button>
        </form>

        {/* Demo Quick Login Shortcut Buttons */}
        <div className="demo-shortcuts">
          <span className="demo-label">Accesos Directos de Prueba (Demostración):</span>
          <div className="demo-buttons">
            <button 
              type="button" 
              className="btn btn-secondary btn-sm"
              onClick={() => handleQuickLogin('owner@munchos.de', 'owner')}
            >
              <ShieldCheck size={16} className="icon-cyan" />
              <span>Acceso Owner (Propietario)</span>
            </button>

            <button 
              type="button" 
              className="btn btn-secondary btn-sm"
              onClick={() => handleQuickLogin('staff@munchos.de', 'staff')}
            >
              <User size={16} />
              <span>Acceso Staff (Personal)</span>
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .admin-login-screen {
          min-height: 100vh;
          background: var(--bg-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .login-card {
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
          padding: 3rem;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
        }

        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-logo {
          height: 70px;
          margin-bottom: 1rem;
        }

        .login-header h2 {
          font-size: 1.8rem;
          color: #FFF;
          margin-bottom: 0.4rem;
        }

        .login-header p {
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
        }

        .login-error-banner {
          background: rgba(168, 35, 42, 0.2);
          border: 1px solid var(--accent-red);
          color: #FFF;
          padding: 0.8rem 1rem;
          font-size: 0.88rem;
          margin-bottom: 1.5rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-field label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .form-field input {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
        }

        .demo-shortcuts {
          border-top: 1px solid rgba(247, 245, 240, 0.1);
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .demo-label {
          font-size: 0.8rem;
          color: var(--text-dark-muted);
          text-align: center;
        }

        .demo-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .btn-sm {
          font-size: 0.85rem;
          padding: 0.6rem 1rem;
          width: 100%;
        }

        .icon-cyan { color: var(--accent-cyan); }
        .w-full { width: 100%; }
      `}</style>
    </div>
  );
};
