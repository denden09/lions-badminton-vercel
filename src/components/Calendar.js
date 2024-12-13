import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [availableDates, setAvailableDates] = useState([]);
  const [tournamentDates, setTournamentDates] = useState([]);

  // Mengambil data dari API available.php
  useEffect(() => {
    fetch('http://localhost:8000/api/available.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => setAvailableDates(data))
      .catch((error) => console.error('Error fetching available dates:', error));
  }, []);

    // Fetch data dari API tournaments.php
    useEffect(() => {
        fetch('http://localhost:8000/api/tournaments.php')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch tournament dates');
            }
            return response.json();
          })
          .then((data) => setTournamentDates(data))
          .catch((error) => console.error('Error fetching tournament dates:', error));
      }, []);

  // Membuat kalender
  const renderCalendar = () => {
    const daysInMonth = 31; // Total hari dalam bulan
    const firstDay = 0; // Asumsikan hari pertama adalah Minggu (0: Minggu)
    const rows = [];
    let cells = [];

    for (let day = 1; day <= daysInMonth + firstDay; day++) {
      if (day > firstDay) {
        const currentDay = day - firstDay;
        const formattedDate = `2024-12-${currentDay.toString().padStart(2, '0')}`;

        // Cek apakah tanggal tersedia atau merupakan tanggal turnamen
        const isAvailable = availableDates.some((item) => item.date === formattedDate);
        const tournament = tournamentDates.find((item) => item.date === formattedDate);


        cells.push(
            <td
              key={currentDay}
              className={
                tournament
                  ? 'tournament'
                  : isAvailable
                  ? 'available'
                  : ''
              }
              title={
                tournament
                  ? tournament.name
                  : isAvailable
                  ? 'Unavailable'
                  : 'Available'
              }
            >
              {currentDay}
              {tournament && (
                <div className="tournament-tag">{tournament.name}</div>
              )}
              {isAvailable && !tournament && (
                <div className="available-tag">Reserved</div>
              )}
            </td>
          );
      } else {
        cells.push(<td key={`empty-${day}`} className="empty"></td>);
      }

      if (cells.length === 7 || day === daysInMonth + firstDay) {
        rows.push(<tr key={`row-${day}`}>{cells}</tr>);
        cells = [];
      }
    }

    return rows;
  };

  return (
    <div className="calendar-container">
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Minggu</th>
            <th>Senin</th>
            <th>Selasa</th>
            <th>Rabu</th>
            <th>Kamis</th>
            <th>Jumat</th>
            <th>Sabtu</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
