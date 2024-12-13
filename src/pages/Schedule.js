import React from "react";
import './Schedule.css';
import Calendar from '../components/Calendar'; // Pastikan path sesuai dengan lokasi file Calendar.js


const Schedule = () => {
    return (
        <div className="schedule-container">
            <div className="schedule-title">
                <h1>Jadwal Lapangan Badminton</h1>
            </div>
            <div className="schedule-calendar">
            <Calendar />
            </div>
        </div>
    )
};

export default Schedule;