import React from 'react';
import '../pages/Achievement.css'; // Sesuaikan path CSS sesuai struktur project
import achievement1 from '../assets/lomba1.jpg';
import achievement2 from '../assets/lomba2.jpg';
import achievement3 from '../assets/lomba3.jpg';


const achievements = [
  {
    imgSrc: achievement1,
    title: '3RD WINNER Math Revolutin Badminton UNPAM',
    description: 'Prestasi juara 3 ganda putra pada turnamen Math Revolution 3 Badminton di UNPAM.',
  },
  {
    imgSrc: achievement2,
    title: '2ND Winner UNTAR CUP 2023',
    description: 'Prestasi juara 2 Tunggal putra pada turnamen UNTAR CUP.',
  },
  {
    imgSrc: achievement3,
    title: '3RD WINNER Dharmayana Buddhits Festival 2023 - UNTAR',
    description: 'Prestasi juara 3 ganda putra pada turnamen Dharmayana Buddhist Festival 2023 - UNTAR',
  },
];

const Achievement = () => {
  return (
    <div className="achievement-container">

        <h1>Lions Badminton Hall of Fame</h1>
      
      {achievements.map((item, index) => (
        <div key={index} className="achievement-item">
          <img src={item.imgSrc} alt={item.title} className="achievement-image" />
          <div className="achievement-text">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
