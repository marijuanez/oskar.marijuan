import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { UserPlus, ShieldCheck, User, Key, Mail, CheckCircle2 } from 'lucide-react';

export const UserManagement = () => {
  const { currentUser, users, createStaffAccount } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  if (currentUser?.role !== 'owner') {
    return (
      <div className="glass-card access-denied">
        <ShieldCheck size={48} className="icon-alert" />
        <h3>Acceso Restringido</h3>
        <p>Solo el propietario principal (Owner) tiene permisos para administrar usuarios y crear cuentas de staff.</p>
      </div>
    );
  }

  const handleCreateStaff = (e) => {
    e.preventDefault();
    setMessage(null);

    const res = createStaffAccount({ name, email, password });
    if (res.success) {
      setMessage({ type: 'success', text: `Cuenta de staff creada con éxito para ${email}` });
      setName('');
      setEmail('');
      setPassword('');
    } else {
      setMessage({ type: 'error', text: res.error });
    }
  };

  return (
    <div className="user-management-module">
      
      {/* Header */}
      <div className="module-header">
        <div>
          <h2>Gestión de Usuarios y Roles (RBAC)</h2>
          <p>Crea cuentas de acceso para el personal (Staff) con permisos restringidos.</p>
        </div>
      </div>

      <div className="user-management-grid">
        
        {/* Create Staff Form */}
        <form onSubmit={handleCreateStaff} className="glass-card create-user-card">
          <div className="card-title-row">
            <UserPlus size={20} className="icon-cyan" />
            <h3>Crear Nueva Cuenta de Staff</h3>
          </div>

          {message && (
            <div className={`msg-banner ${message.type}`}>
              {message.type === 'success' && <CheckCircle2 size={16} />}
              <span>{message.text}</span>
            </div>
          )}

          <div className="form-field">
            <label><User size={16} /> Nombre del Empleado *</label>
            <input 
              type="text" 
              required 
              placeholder="Ej: Marcos Pérez"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label><Mail size={16} /> Correo Electrónico *</label>
            <input 
              type="email" 
              required 
              placeholder="munchos.catering@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label><Key size={16} /> Contraseña de Acceso *</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            <span>Crear Cuenta Staff</span>
          </button>
        </form>

        {/* Existing Accounts List */}
        <div className="glass-card users-list-card">
          <h3>Cuentas Registradas en la Plataforma</h3>
          
          <div className="users-list">
            {users.map((u, idx) => (
              <div key={idx} className="user-item-card">
                <div className="user-avatar">
                  {u.role === 'owner' ? <ShieldCheck size={20} className="icon-cyan" /> : <User size={20} />}
                </div>

                <div className="user-details">
                  <h4>{u.name}</h4>
                  <span className="user-email">{u.email}</span>
                </div>

                <span className={`role-badge role-${u.role}`}>
                  {u.role === 'owner' ? 'Owner / Propietario' : 'Staff / Personal'}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .user-management-module {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .module-header {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem 2rem;
        }

        .module-header h2 { font-size: 1.8rem; color: #FFF; }

        .user-management-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .create-user-card, .users-list-card {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .card-title-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .card-title-row h3 { font-size: 1.3rem; color: #FFF; }

        .msg-banner {
          padding: 0.8rem 1rem;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .msg-banner.success { background: rgba(39, 90, 56, 0.2); border: 1px solid #79D494; color: #79D494; }
        .msg-banner.error { background: rgba(168, 35, 42, 0.2); border: 1px solid var(--accent-red); color: var(--accent-red); }

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
          gap: 0.4rem;
        }

        .form-field input {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
        }

        .users-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .user-item-card {
          background: rgba(13, 13, 12, 0.6);
          border: 1px solid rgba(247, 245, 240, 0.08);
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-avatar {
          width: 42px;
          height: 42px;
          background: rgba(247, 245, 240, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-details {
          flex-grow: 1;
        }

        .user-details h4 { font-size: 1rem; color: #FFF; margin-bottom: 0.1rem; }
        .user-email { font-size: 0.82rem; color: var(--text-dark-muted); }

        .role-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          text-transform: uppercase;
        }

        .role-owner { background: rgba(62, 193, 201, 0.2); color: var(--accent-cyan); border: 1px solid var(--accent-cyan); }
        .role-staff { background: rgba(247, 245, 240, 0.1); color: var(--text-dark-secondary); border: 1px solid rgba(247, 245, 240, 0.2); }

        .access-denied {
          text-align: center;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin: 3rem 0;
        }

        .icon-alert { color: var(--accent-red); }
        .icon-cyan { color: var(--accent-cyan); }
        .w-full { width: 100%; }

        @media (max-width: 900px) {
          .user-management-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
