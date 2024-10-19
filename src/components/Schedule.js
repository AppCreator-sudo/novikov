import React from 'react';


function Schedule() {
    return (
        <div className="schedule-container">
            <h2>График Работы</h2>

            <div className="schedule-card">
                <h3>Цирк, Улица Челюскинцев, 21, 1 этаж</h3>
                <ul>
                    <li><strong>Пн:</strong> 12:00 – 23:00</li>
                    <li><strong>Вт:</strong> 12:00 – 23:00</li>
                    <li><strong>Ср:</strong> 12:00 – 23:00</li>
                    <li><strong>Чт:</strong> 12:00 – 23:00</li>
                    <li><strong>Пт:</strong> 12:00 – 24:00</li>
                    <li><strong>Сб:</strong> 12:00 – 24:00</li>
                    <li><strong>Вс:</strong> 12:00 – 23:00</li>
                </ul>
            </div>

            <div className="schedule-card">
                <h3>Красный проспект, 25, 1 этаж</h3>
                <ul>
                    <li><strong>Пн:</strong> 12:00 – 23:00</li>
                    <li><strong>Вт:</strong> 12:00 – 23:00</li>
                    <li><strong>Ср:</strong> 12:00 – 23:00</li>
                    <li><strong>Чт:</strong> 12:00 – 23:00</li>
                    <li><strong>Пт:</strong> 12:00 – 24:00</li>
                    <li><strong>Сб:</strong> 12:00 – 24:00</li>
                    <li><strong>Вс:</strong> 12:00 – 23:00</li>
                </ul>
            </div>
        </div>
    );
}

export default Schedule;

