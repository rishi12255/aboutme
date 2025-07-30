import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_03t9uur',
      'template_dun8ua4',
      formData,
      '30cy7zYejeV5WxG0L'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      },
      (err) => {
        console.log('FAILED...', err);
        setStatus('❌ Failed to send message. Please try again.');
      }
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="p-8 max-w-md mx-auto bg-gray-800 rounded-md shadow-md mt-12 mb-12"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Send Me a Message</h2>
      <form onSubmit={sendEmail} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-700 border border-gray-600 cursor-pointer text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-gray-700 border cursor-pointer border-gray-600 text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="p-3 rounded bg-gray-700 border cursor-pointer border-gray-600 text-white"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors p-3 rounded text-white font-semibold"
        >
          Send Message
        </button>
        {status && <p className="text-center mt-2">{status}</p>}
      </form>
    </motion.div>
  );
}

export default Contact;
