import React from 'react';

// Импортируем изображения участников команды
import member1 from '../img1/31.jpg'; // Замените на свои изображения
import member2 from '../img1/4.jpg';
import member3 from '../img1/5.jpg';

function TeamSection() {
    const teamMembers = [
        {
            id: 1,
            name: "САФОНОВ ЕВГЕНИЙ ВИКТОРОВИЧ",
            position: "БРЕНД - ШЕФ(МОСКВА)",
            image: member1
        },
        {
            id: 2,
            name: "НОВИКОВ АРКАДИЙ АНАТОЛЬЕВИЧ",
            position: "ВЛАДЕЛЕЦ КОМПАНИИ NOVIKOV GROUP",
            image: member2
        },
        {
            id: 3,
            name: "БРЕГАДЗЕ ВИТАЛИЙ НИАЗОВИЧ",
            // Здесь нет поля position
            image: member3
        }
    ];

    return (
        <div>
            <h2>Команда проекта</h2>
            <div className="team-container">
                {teamMembers.map(member => (
                    <div key={member.id} className="team-card">
                        <img src={member.image} alt={`${member.name} - фото`} />
                        <h3>{member.name}</h3>
                        {member.position && <p>{member.position}</p>} {/* Условное отображение должности */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamSection;

