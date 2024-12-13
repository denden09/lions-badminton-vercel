import React, { useState } from 'react';
import '../pages/Gallery.css';

// Mengimpor gambar-gambar
import badminton1 from '../assets/badminton1.jpg';
import badminton2 from '../assets/badminton2.jpg';
import badminton3 from '../assets/badminton3.jpg';
import badminton4 from '../assets/badminton4.jpg';
import badminton5 from '../assets/badminton5.JPG';
import badminton6 from '../assets/badminton6.jpg';
import badminton7 from '../assets/badminton7.jpg';
import badminton8 from '../assets/badminton8.jpg';
import badminton9 from '../assets/badminton9.jpg';
import badminton10 from '../assets/badminton10.jpg';
import badminton11 from '../assets/badminton11.jpg';
import badminton12 from '../assets/badminton12.jpg';
import badminton13 from '../assets/badminton13.jpg';
import badminton14 from '../assets/badminton14.jpg';
import badminton15 from '../assets/badminton15.jpg';
import lionslogo from '../assets/lionslogo.png';
import lope1 from '../assets/lope1.jpg';
import lope2 from '../assets/lope2.JPG';
import lope3 from '../assets/lope3.JPG';
import lope4 from '../assets/lope4.JPG';
import lope5 from '../assets/lope5.jpg';
import lope6 from '../assets/lope6.jpg';
import lope7 from '../assets/lope7.jpg';
import lope8 from '../assets/lope8.jpg';
import lope9 from '../assets/lope9.jpg';
import lope10 from '../assets/lope10.jpg';
import lope11 from '../assets/lope11.jpg';
import lope12 from '../assets/lope12.jpg';
import lope13 from '../assets/lope13.jpg';
import lope14 from '../assets/lope14.jpg';
import lope15 from '../assets/lope15.jpg';
import lope16 from '../assets/lope16.jpg';
import lope17 from '../assets/lope17.jpg';
import lope18 from '../assets/lope18.jpg';
import lope19 from '../assets/lope19.jpg';
import lope20 from '../assets/lope20.jpg';
import lope21 from '../assets/lope21.jpg';
import lope22 from '../assets/lope22.jpg';
import lope23 from '../assets/lope23.jpg';
import lope24 from '../assets/lope24.jpg';
import lope25 from '../assets/lope25.jpg';
import committee1 from '../assets/committee1.jpg';
import committee2 from '../assets/committee2.jpg';
import committee3 from '../assets/committee3.jpg';
import committee4 from '../assets/committee4.jpg';
import committee5 from '../assets/committee5.jpg';
import committee6 from '../assets/committee6.jpg';

// Array gambar-gambar
const imageList = [
  { src: committee1, alt: 'Committee 1', category: 'Pengurus' },
  { src: committee2, alt: 'Committee 2', category: 'Pengurus' },
  { src: committee3, alt: 'Committee 3', category: 'Pengurus' },
  { src: committee4, alt: 'Committee 4', category: 'Pengurus' },
  { src: committee5, alt: 'Committee 5', category: 'Pengurus' },
  { src: committee6, alt: 'Committee 6', category: 'Pengurus' },
  { src: badminton1, alt: 'Gambar 1', category: 'Pertandingan' },
  { src: badminton2, alt: 'Gambar 2', category: 'Pertandingan' },
  { src: badminton3, alt: 'Gambar 3', category: 'Pertandingan' },
  { src: badminton4, alt: 'Gambar 4', category: 'Pertandingan' },
  { src: badminton5, alt: 'Gambar 5', category: 'Pertandingan' },
  { src: badminton6, alt: 'Gambar 6', category: 'Pertandingan' },
  { src: badminton7, alt: 'Gambar 7', category: 'Pertandingan' },
  { src: badminton8, alt: 'Gambar 8', category: 'Pertandingan' },
  { src: badminton9, alt: 'Gambar 9', category: 'Pertandingan' },
  { src: badminton10, alt: 'Gambar 10', category: 'Pertandingan' },
  { src: badminton11, alt: 'Gambar 11', category: 'Pertandingan' },
  { src: badminton12, alt: 'Gambar 12', category: 'Pertandingan' },
  { src: badminton13, alt: 'Gambar 13', category: 'Pertandingan' },
  { src: badminton14, alt: 'Gambar 14', category: 'Pertandingan' },
  { src: badminton15, alt: 'Gambar 15', category: 'Pertandingan' },
  { src: lope1, alt: 'Lope 1', category: 'Cuci-Mata' },
  { src: lope2, alt: 'Lope 2', category: 'Cuci-Mata' },
  { src: lope3, alt: 'Lope 3', category: 'Cuci-Mata' },
  { src: lope4, alt: 'Lope 4', category: 'Cuci Mata' },
  { src: lope5, alt: 'Lope 5', category: 'Cuci Mata' },
  { src: lope6, alt: 'Lope 6', category: 'Cuci Mata' },
  { src: lope7, alt: 'Lope 7', category: 'Cuci Mata' },
  { src: lope8, alt: 'Lope 8', category: 'Cuci Mata' },
  { src: lope9, alt: 'Lope 9', category: 'Cuci Mata' },
  { src: lope10, alt: 'Lope 10', category: 'Cuci Mata' },
  { src: lope11, alt: 'Lope 11', category: 'Cuci Mata' },
  { src: lope12, alt: 'Lope 12', category: 'Cuci Mata' },
  { src: lope13, alt: 'Lope 13', category: 'Cuci Mata' },
  { src: lope14, alt: 'Lope 14', category: 'Cuci Mata' },
  { src: lope15, alt: 'Lope 15', category: 'Cuci Mata' },
  { src: lope16, alt: 'Lope 16', category: 'Cuci Mata' },
  { src: lope17, alt: 'Lope 17', category: 'Cuci Mata' },
  { src: lope18, alt: 'Lope 18', category: 'Cuci Mata' },
  { src: lope19, alt: 'Lope 19', category: 'Cuci Mata' },
  { src: lope20, alt: 'Lope 20', category: 'Cuci Mata' },
  { src: lope21, alt: 'Lope 21', category: 'Cuci Mata' },
  { src: lope22, alt: 'Lope 22', category: 'Cuci Mata' },
  { src: lope23, alt: 'Lope 23', category: 'Cuci Mata' },
  { src: lope24, alt: 'Lope 24', category: 'Cuci Mata' },
  { src: lope25, alt: 'Lope 25', category: 'Cuci Mata' },
];



const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = imageList.filter((image) => image.category === activeCategory);

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => setActiveCategory('Pengurus')}>Committee</button>
        <button onClick={() => setActiveCategory('Pertandingan')}>Match</button>
        <button onClick={() => setActiveCategory('Cuci Mata')}>❤️</button>
      </div>

      <div className={`gallery-container ${activeCategory.toLowerCase()}`}>
        {filteredImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
