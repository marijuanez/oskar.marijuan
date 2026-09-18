import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Users, Calendar, CheckSquare, Square, Calculator, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';
import { checkDateAvailability, findAlternativeDates } from '../services/availabilityEngine';
import { getStoredReservations, getCapacitySettings } from '../services/reservationService';
import { AlternativeDatesPicker } from './public/AlternativeDatesPicker';

export const BookingWidget = ({ onSubmitBooking }) => {
  const { t } = useTranslation();
  const [guests, setGuests] = useState(25);
  const [eventDate, setEventDate] = useState('');
  const [selectedMenuId, setSelectedMenuId] = useState('sushi-fusion');
  const [selectedExtras, setSelectedExtras] = useState(['chef']);
  
  // Availability state
  const [availStatus, setAvailStatus] = useState(null);
  const [alternativeDates, setAlternativeDates] = useState([]);
  const [allReservations, setAllReservations] = useState([]);
  const [capacitySettings, setCapacitySettings] = useState({});

  useEffect(() => {
    const resList = getStoredReservations();
    const settings = getCapacitySettings();
    setAllReservations(resList);
    setCapacitySettings(settings);
  }, []);

  // Real-time availability check when date or guests change
  useEffect(() => {
    if (!eventDate) {
      setAvailStatus(null);
      setAlternativeDates([]);
      return;
    }

    const check = checkDateAvailability(eventDate, guests, allReservations, capacitySettings);
    setAvailStatus(check);

    if (!check.isAvailable) {
      const alts = findAlternativeDates(eventDate, guests, allReservations, capacitySettings, 4);
      setAlternativeDates(alts);
    } else {
      setAlternativeDates([]);
    }
  }, [eventDate, guests, allReservations, capacitySettings]);

  const menuOptions = t('bookingWidget.menuOptions');
  const extrasList = t('bookingWidget.extrasList');

  // Calculate pricing
  const currentMenu = menuOptions.find(m => m.id === selectedMenuId) || menuOptions[0];
  const menuCostTotal = currentMenu.price * guests;

  let extrasTotal = 0;
  selectedExtras.forEach(extraId => {
    const extra = extrasList.find(e => e.id === extraId);
    if (extra) {
      if (extra.price) extrasTotal += extra.price;
      if (extra.pricePerGuest) extrasTotal += (extra.pricePerGuest * guests);
    }
  });

  const estimatedTotal = menuCostTotal + extrasTotal;
  const pricePerPerson = Math.round(estimatedTotal / guests);

  const toggleExtra = (extraId) => {
    if (selectedExtras.includes(extraId)) {
      setSelectedExtras(selectedExtras.filter(id => id !== extraId));
    } else {
      setSelectedExtras([...selectedExtras, extraId]);
    }
  };

  const handleSelectAlternativeDate = (newDateStr) => {
    setEventDate(newDateStr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (availStatus && !availStatus.isAvailable) {
      alert("La fecha seleccionada no tiene capacidad disponible. Por favor, elige una de las fechas alternativas propuestas.");
      return;
    }

    onSubmitBooking({
      guests,
      eventDate,
      menuName: currentMenu.name,
      menuId: currentMenu.id,
      extras: selectedExtras.map(id => extrasList.find(e => e.id === id)?.name).filter(Boolean),
      estimatedTotal,
      pricePerPerson
    });
  };

  return (
    <section id="personalizacion" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="badge">{t('bookingWidget.badge')}</div>
          <h2>{t('bookingWidget.title')}</h2>
          <HorizontalPintxoIcon color="#3EC1C9" width={140} height={32} />
          <p>{t('bookingWidget.subtitle')}</p>
        </div>

        <div className="calculator-wrapper">
          <form onSubmit={handleSubmit} className="calculator-card">
            
            {/* Guest Count Slider */}
            <div className="calc-group">
              <label className="calc-label">
                <Users size={20} className="icon-cyan" />
                <span>{t('bookingWidget.labels.guests')}</span>
                <span className="guest-badge-value">{guests} {t('bookingWidget.labels.guestsBadge')}</span>
              </label>
              <input 
                type="range" 
                min="10" 
                max="50" 
                step="1"
                value={guests} 
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="custom-slider"
              />
              <div className="slider-range-labels">
                <span>{t('bookingWidget.labels.intimate')}</span>
                <span>30</span>
                <span>{t('bookingWidget.labels.maximum')}</span>
              </div>
            </div>

            {/* Event Date Picker with Live Availability Checker */}
            <div className="calc-group">
              <div className="calc-label-row">
                <label className="calc-label">
                  <Calendar size={20} className="icon-cyan" />
                  <span>{t('bookingWidget.labels.date')}</span>
                </label>
                {availStatus && availStatus.isAvailable && (
                  <span className="avail-badge-success">
                    <CheckCircle2 size={15} />
                    <span>{t('bookingWidget.labels.dateAvailable')}</span>
                  </span>
                )}
              </div>

              <input 
                type="date" 
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
                className={`calc-input ${availStatus && !availStatus.isAvailable ? 'is-invalid' : ''}`}
              />

              {/* Alternative Dates Suggester Component */}
              {availStatus && !availStatus.isAvailable && (
                <AlternativeDatesPicker
                  requestedDateStr={eventDate}
                  reason={availStatus.reason}
                  alternativeDates={alternativeDates}
                  onSelectAlternative={handleSelectAlternativeDate}
                />
              )}
            </div>

            {/* Menu Type Radio Selection */}
            <div className="calc-group">
              <label className="calc-label">
                <Calculator size={20} className="icon-cyan" />
                <span>{t('bookingWidget.labels.menuType')}</span>
              </label>
              <div className="menu-options-grid">
                {menuOptions.map(option => (
                  <div 
                    key={option.id}
                    className={`menu-radio-card ${selectedMenuId === option.id ? 'selected' : ''}`}
                    onClick={() => setSelectedMenuId(option.id)}
                  >
                    <div className="radio-header">
                      <span className="radio-title">{option.name}</span>
                      <span className="radio-price">{option.price}€ / inv</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extras Selection */}
            <div className="calc-group">
              <label className="calc-label">
                <Sparkles size={20} className="icon-cyan" />
                <span>{t('bookingWidget.labels.extras')}</span>
              </label>
              <div className="extras-grid">
                {extrasList.map(extra => {
                  const isChecked = selectedExtras.includes(extra.id);
                  return (
                    <div 
                      key={extra.id} 
                      className={`extra-checkbox-card ${isChecked ? 'active' : ''}`}
                      onClick={() => toggleExtra(extra.id)}
                    >
                      {isChecked ? <CheckSquare size={20} className="icon-cyan" /> : <Square size={20} />}
                      <span>{extra.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price Preview & Submit */}
            <div className="calc-summary-box">
              <div className="price-estimation">
                <span className="est-label">{t('bookingWidget.labels.estimatedTotal')}</span>
                <div className="est-amount-row">
                  <span className="est-total">{estimatedTotal}€</span>
                  <span className="est-per-person">({pricePerPerson}€ {t('bookingWidget.labels.perPerson')})</span>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary calc-submit-btn"
                disabled={availStatus && !availStatus.isAvailable}
              >
                <Send size={18} />
                <span>{t('bookingWidget.labels.submitBtn')}</span>
              </button>
            </div>

          </form>
        </div>
      </div>

      <style>{`
        .calculator-wrapper {
          max-width: 920px;
          margin: 0 auto;
        }

        .calculator-card {
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
          padding: 3rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
        }

        .calc-group {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .calc-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .calc-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-dark-primary);
        }

        .icon-cyan { color: var(--accent-cyan); }

        .avail-badge-success {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(39, 90, 56, 0.2);
          border: 1px solid #79D494;
          color: #79D494;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          text-transform: uppercase;
        }

        .guest-badge-value {
          margin-left: auto;
          background: rgba(62, 193, 201, 0.15);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          padding: 0.2rem 0.8rem;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .custom-slider {
          width: 100%;
          accent-color: var(--accent-cyan);
          height: 8px;
          cursor: pointer;
        }

        .slider-range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-dark-muted);
        }

        .calc-input {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.9rem 1.2rem;
          font-size: 1rem;
        }

        .calc-input.is-invalid {
          border-color: var(--accent-red);
        }

        .menu-options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .menu-radio-card {
          background: rgba(13, 13, 12, 0.6);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.2rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .menu-radio-card:hover {
          border-color: rgba(62, 193, 201, 0.5);
        }

        .menu-radio-card.selected {
          border-color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.12);
        }

        .radio-title {
          font-size: 0.95rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.4rem;
        }

        .radio-price {
          font-size: 0.85rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .extras-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .extra-checkbox-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(13, 13, 12, 0.6);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1rem;
          cursor: pointer;
          font-size: 0.92rem;
          transition: all var(--transition-fast);
        }

        .extra-checkbox-card.active {
          border-color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.12);
        }

        .calc-summary-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(13, 13, 12, 0.95);
          border: 1px solid var(--accent-cyan);
          padding: 1.8rem 2.2rem;
          margin-top: 1rem;
        }

        .est-label {
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
          display: block;
          margin-bottom: 0.2rem;
        }

        .est-amount-row {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
        }

        .est-total {
          font-family: var(--font-subtitles);
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--accent-cyan);
          line-height: 1;
        }

        .est-per-person {
          font-size: 0.92rem;
          color: var(--text-dark-muted);
        }

        .calc-submit-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .menu-options-grid, .extras-grid {
            grid-template-columns: 1fr;
          }
          .calc-summary-box {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }
          .calc-submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
