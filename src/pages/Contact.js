import React, { useState, useEffect } from 'react';
import '../pages/Contact.css'; // Sesuaikan dengan path CSS
import whatsappIcon from '../assets/whatsapp.png';
import emailIcon from '../assets/gmail.png';
import instagramIcon from '../assets/instagram.png';

const Contact = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  // Mengambil data feedback dari API backend
  useEffect(() => {
    fetch('http://localhost:8000/api/feedback.php') // URL API backend
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal mengambil data feedback');
        }
        return response.json();
      })
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error('Error fetching feedbacks:', error));
  }, []);

  // Mengirim feedback baru ke backend
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/api/feedback.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: feedback }),
    })
      .then((response) => response.json())
      .then(() => {
        setMessage('Feedback berhasil dikirim!');
        setFeedback(''); // Kosongkan kolom feedback
      })
      .catch((error) => {
        setMessage('Terjadi kesalahan. Mohon coba lagi.');
        console.error('Error sending feedback:', error);
      });
  };

  return (
    <div className="contact-container">
      {/* Section: Contact Info */}
      <div className="contact-icons">
        <div className="contact-item">
          <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
          <p className="contact-text">+62 812 8281 9031</p>
        </div>
        <div className="contact-item">
          <img src={emailIcon} alt="Email" className="contact-icon" />
          <p className="contact-text">@lionsbadminton</p>
        </div>
        <div className="contact-item">
          <img src={instagramIcon} alt="Instagram" className="contact-icon" />
          <p className="contact-text">@lionsbadminton</p>
        </div>
      </div>

      {/* Section: Map */}
      <div className="location-container">
        <h3>Our 📌Location</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0530815667776!2d106.61572797499068!3d-6.256737993731788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb56b25975f9%3A0x50c7d605ba8542f5!2sMultimedia%20Nusantara%20University!5e0!3m2!1sen!2sid!4v1733404517990!5m2!1sen!2sid"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Multimedia Nusantara University Location"
          ></iframe>
        </div>
      </div>

      {/* Section: Info Box */}
      <div className="info-box">
        <h3>Location Details</h3>
        <p>Lapangan Olahraga D23, Universitas Multimedia Nusantara</p>
      </div>

      {/* Section: Feedback List */}
      <div className="feedback-list">
        <h3>Feedback dari Pengguna</h3>
        {feedbacks.length > 0 ? (
          <ul>
            {feedbacks.map((feedbackItem) => (
              <li key={feedbackItem.id}>
                <h4>{feedbackItem.name}</h4>
                <p>{feedbackItem.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Belum ada feedback yang diterima.</p>
        )}
      </div>

      {/* Section: Feedback Form */}
      <div className="feedback-section">
        <h3>Kirim Feedback Anda</h3>
        <form onSubmit={handleSubmit} className="feedback-form">
          <textarea
            placeholder="Tulis feedback Anda di sini..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
          <button type="submit">Kirim</button>
        </form>
        {message && <p className="feedback-message">{message}</p>}
      </div>
    </div>
  );
};

export default Contact;
