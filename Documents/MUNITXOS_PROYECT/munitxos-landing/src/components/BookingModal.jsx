import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { X, Send, CheckCircle, Mail, Loader2 } from 'lucide-react';
import { createReservation } from '../services/reservationService';

export const BookingModal = ({ isOpen, onClose, initialData }) => {
  const { t } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastReservation, setLastReservation] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const reservationData = {
      date: initialData?.eventDate || new Date().toISOString().split('T')[0],
      guests: initialData?.guests || 20,
      menuType: initialData?.menuId || 'sushi-fusion',
      menuName: initialData?.menuName || 'Fusión Nikkei (Sushi + Pinchos)',
      extras: initialData?.extras || [],
      estimatedTotal: initialData?.estimatedTotal || 0,
      pricePerPerson: initialData?.pricePerPerson || 0,
      status: 'pending',
      source: 'public',
      clientName: formData.name,
      clientEmail: formData.email,
      clientPhone: formData.phone,
      location: formData.location,
      notes: formData.notes,
      paymentMethod: paymentMethod
    };

    // 1. Save to local & Firestore reservations store
    const created = createReservation(reservationData);
    setLastReservation(reservationData);

    // 2. Automated Email dispatch to munchos.catering@gmail.com via FormSubmit AJAX service
    try {
      await fetch("https://formsubmit.co/ajax/munchos.catering@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🔔 Nueva Reserva MUNCHOS: ${formData.name} (${reservationData.date})`,
          _template: "table",
          _captcha: "false",
          Cliente: formData.name,
          Email_Cliente: formData.email,
          Telefono_WhatsApp: formData.phone,
          Ubicacion_Evento: formData.location || 'Múnich / No especificada',
          Fecha_Evento: reservationData.date,
          Numero_Invitados: reservationData.guests,
          Menu_Elegido: reservationData.menuName,
          Servicios_Extra: (reservationData.extras || []).join(', ') || 'Sin extras',
          Precio_Estimado_Total: `${reservationData.estimatedTotal}€ (${reservationData.pricePerPerson}€ / pers)`,
          Forma_Pago_Preferida: paymentMethod,
          Notas_Alergias: formData.notes || 'Ninguna'
        })
      });
    } catch (err) {
      console.warn("Could not reach FormSubmit service, mailto fallback available", err);
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  const getMailtoUrl = () => {
    if (!lastReservation) return '#';
    const subject = encodeURIComponent(`Solicitud Reserva MUNCHOS Catering - ${lastReservation.clientName}`);
    const body = encodeURIComponent(
      `Hola MUNCHOS Catering (munchos.catering@gmail.com),\n\n` +
      `Confirmación de solicitud de reserva:\n\n` +
      `• Cliente: ${lastReservation.clientName}\n` +
      `• Email: ${lastReservation.clientEmail}\n` +
      `• Teléfono: ${lastReservation.clientPhone}\n` +
      `• Fecha Evento: ${lastReservation.date}\n` +
      `• Invitados: ${lastReservation.guests}\n` +
      `• Menú: ${lastReservation.menuName}\n` +
      `• Extras: ${(lastReservation.extras || []).join(', ') || 'Ninguno'}\n` +
      `• Estimación Total: ${lastReservation.estimatedTotal}€\n` +
      `• Pago Preferido: ${lastReservation.paymentMethod}\n` +
      `• Ubicación: ${lastReservation.location || 'Múnich'}\n` +
      `• Notas: ${lastReservation.notes || 'Ninguna'}\n\n` +
      `Saludos,\n${lastReservation.clientName}`
    );
    return `mailto:munchos.catering@gmail.com?cc=${encodeURIComponent(lastReservation.clientEmail)}&subject=${subject}&body=${body}`;
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={handleClose}><X size={24} /></button>

        {!submitted ? (
          <div>
            <h3 className="modal-title">{t('modal.title')}</h3>
            <p className="modal-subtitle">{t('modal.subtitle')}</p>

            {initialData && (
              <div className="booking-summary-banner">
                <span className="summary-pill">{initialData.guests || 25} Invitados</span>
                {initialData.eventDate && <span className="summary-pill">Fecha: {initialData.eventDate}</span>}
                <span className="summary-pill">{initialData.menuName || 'Menú Seleccionado'}</span>
                {initialData.estimatedTotal && (
                  <span className="summary-pill gold-pill">Est. Total: {initialData.estimatedTotal}€</span>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-field">
                <label>{t('modal.name')}</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ej: Maria Fernández"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>{t('modal.email')}</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="maria@ejemplo.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label>{t('modal.phone')}</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+49 176 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>{t('modal.location')}</label>
                <input 
                  type="text" 
                  placeholder="Ej: Bogenhausen, Múnich"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>{t('modal.notes')}</label>
                <textarea 
                  rows="2" 
                  placeholder="Preferencias de tus invitados, opciones vegetarianas o sin gluten..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              {/* Payment Method Selector */}
              <div className="payment-options-group">
                <label className="pay-group-label">{t('modal.paymentTitle')}</label>
                <div className="pay-options-grid">
                  <label className={`pay-opt-card ${paymentMethod === 'paypal' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="paypal" 
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                    />
                    <span>PayPal / Apple Pay</span>
                  </label>
                  <label className={`pay-opt-card ${paymentMethod === 'klarna' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="klarna" 
                      checked={paymentMethod === 'klarna'}
                      onChange={() => setPaymentMethod('klarna')}
                    />
                    <span>Klarna / Sofort</span>
                  </label>
                  <label className={`pay-opt-card ${paymentMethod === 'card' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="card" 
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <span>Tarjeta (Stripe)</span>
                  </label>
                  <label className={`pay-opt-card ${paymentMethod === 'invoice' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="invoice" 
                      checked={paymentMethod === 'invoice'}
                      onChange={() => setPaymentMethod('invoice')}
                    />
                    <span>Factura B2B / SEPA</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary modal-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Enviando solicitud...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{t('modal.submit')}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="success-screen">
            <CheckCircle size={64} className="success-icon" />
            <h3>{t('modal.successTitle')}</h3>
            <p>{t('modal.successText')}</p>
            
            <div className="email-sent-badge">
              <Mail size={18} className="gold-icon" />
              <span>Notificación enviada a <strong>munchos.catering@gmail.com</strong></span>
            </div>

            <div className="success-actions">
              <a href={getMailtoUrl()} className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer">
                <Mail size={16} />
                <span>Enviar copia desde mi Correo</span>
              </a>

              <button className="btn btn-primary" onClick={handleClose}>{t('modal.understood')}</button>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 1005;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-container {
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
          padding: 2.5rem;
          width: 100%;
          max-width: 620px;
          position: relative;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          border: none;
          color: var(--text-dark-secondary);
          cursor: pointer;
        }

        .modal-title {
          font-size: 2rem;
          color: #FFF;
          margin-bottom: 0.5rem;
        }

        .modal-subtitle {
          font-size: 0.95rem;
          color: var(--text-dark-secondary);
          margin-bottom: 1.5rem;
        }

        .booking-summary-banner {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          background: rgba(13, 13, 12, 0.7);
          padding: 1rem;
          margin-bottom: 1.5rem;
          border: 1px dashed rgba(62, 193, 201, 0.3);
        }

        .summary-pill {
          background: rgba(247, 245, 240, 0.08);
          font-size: 0.82rem;
          padding: 0.3rem 0.75rem;
          color: var(--text-dark-primary);
        }

        .gold-pill {
          background: rgba(62, 193, 201, 0.15);
          color: var(--accent-cyan);
          border: 1px solid var(--accent-cyan);
          font-weight: 700;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
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
        }

        .form-field input, .form-field textarea {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
        }

        .modal-submit {
          margin-top: 1.25rem;
          width: 100%;
        }

        .payment-options-group {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .pay-group-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark-primary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .pay-options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem;
        }

        .pay-opt-card {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          padding: 0.65rem 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.82rem;
          color: var(--text-dark-secondary);
          transition: all 0.2s ease;
        }

        .pay-opt-card.selected {
          border-color: #C9B04A;
          background: rgba(201, 176, 74, 0.12);
          color: #FFFFFF;
        }

        .pay-opt-card input {
          accent-color: #C9B04A;
        }

        .success-screen {
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon { color: var(--accent-cyan); }

        .email-sent-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(201, 176, 74, 0.12);
          border: 1px solid rgba(201, 176, 74, 0.35);
          color: #E0E0E0;
          padding: 0.65rem 1rem;
          font-size: 0.88rem;
          margin: 0.5rem 0;
        }

        .gold-icon { color: #C9B04A; }

        .success-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
          margin-top: 0.5rem;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }`}</style>
    </div>
  );
};
