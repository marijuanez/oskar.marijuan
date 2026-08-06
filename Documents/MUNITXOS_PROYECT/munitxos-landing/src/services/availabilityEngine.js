/**
 * MUNCHOS Smart Availability & Capacity Engine
 */

export const DEFAULT_CAPACITY_SETTINGS = {
  maxEventsPerDay: 2,
  maxGuestsPerDay: 60
};

/**
 * Checks whether a given date can accommodate a new reservation
 */
export const checkDateAvailability = (
  dateStr, 
  requestedGuests = 20, 
  existingReservations = [], 
  settings = DEFAULT_CAPACITY_SETTINGS
) => {
  if (!dateStr) return { isAvailable: false, reason: "No date provided" };

  const { maxEventsPerDay = 2, maxGuestsPerDay = 60 } = settings;

  // Active (non-cancelled) reservations on dateStr
  const activeOnDate = existingReservations.filter(
    r => r.date === dateStr && r.status !== 'cancelled'
  );

  const existingEventsCount = activeOnDate.length;
  const currentTotalGuests = activeOnDate.reduce((sum, r) => sum + (parseInt(r.guests) || 0), 0);

  if (existingEventsCount >= maxEventsPerDay) {
    return {
      isAvailable: false,
      existingEvents: existingEventsCount,
      currentTotalGuests,
      reason: `Capacidad máxima de eventos alcanzada (${existingEventsCount}/${maxEventsPerDay})`
    };
  }

  if (currentTotalGuests + requestedGuests > maxGuestsPerDay) {
    return {
      isAvailable: false,
      existingEvents: existingEventsCount,
      currentTotalGuests,
      reason: `Límite de comensales superado para el día (${currentTotalGuests + requestedGuests}/${maxGuestsPerDay})`
    };
  }

  return {
    isAvailable: true,
    existingEvents: existingEventsCount,
    currentTotalGuests,
    reason: "Fecha disponible"
  };
};

/**
 * Finds the nearest 3 to 5 open alternative dates if a requested date is full
 */
export const findAlternativeDates = (
  requestedDateStr,
  requestedGuests = 20,
  existingReservations = [],
  settings = DEFAULT_CAPACITY_SETTINGS,
  targetCount = 4
) => {
  if (!requestedDateStr) return [];

  const requestedDate = new Date(requestedDateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const alternatives = [];
  const searchRangeDays = 14; // Look +/- 14 days

  for (let offset = -searchRangeDays; offset <= searchRangeDays; offset++) {
    if (offset === 0) continue; // Skip requested date itself

    const candidateDate = new Date(requestedDate);
    candidateDate.setDate(candidateDate.getDate() + offset);

    // Skip past dates
    if (candidateDate < today) continue;

    const candidateStr = candidateDate.toISOString().split('T')[0];
    const avail = checkDateAvailability(candidateStr, requestedGuests, existingReservations, settings);

    if (avail.isAvailable) {
      alternatives.push({
        dateStr: candidateStr,
        distance: Math.abs(offset),
        offsetDays: offset,
        formattedLabel: candidateDate.toLocaleDateString('es-ES', {
          weekday: 'long',
          day: 'numeric',
          month: 'long'
        })
      });
    }
  }

  // Sort by closest distance to requested date
  alternatives.sort((a, b) => a.distance - b.distance);

  return alternatives.slice(0, targetCount);
};
