import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ButtonWrapper from '@/components/ui/ButtonWrapper';
import BubbleText from '@/components/ui/text-effect-flipper';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import SuccessPopup from '@/components/ui/SuccessPopup';

const InputField = React.memo(({ label, name, type = "text", required = true, placeholder, value, error, onChange, onBlur }) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-white text-sm font-semibold">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white 
                      placeholder-gray-400 transition duration-200 
                      focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                      ${error ? 'border-red-500' : 'border-gray-300/30'}`}
      placeholder={placeholder}
      required={required}
      autoComplete="off"
    />
    {error && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-red-500 text-sm mt-1"
      >
        {error}
      </motion.p>
    )}
  </div>
));

const TextareaField = React.memo(({ label, name, required = true, placeholder, value, error, onChange, onBlur }) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-white text-sm font-semibold">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      rows="4"
      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white 
                      placeholder-gray-400 transition duration-200 
                      focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                      ${error ? 'border-red-500' : 'border-gray-300/30'}`}
      placeholder={placeholder}
      required={required}
      autoComplete="off"
    />
    {error && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-red-500 text-sm mt-1"
      >
        {error}
      </motion.p>
    )}
  </div>
));

const Contact = () => {
  const formRef = useRef();
  const recaptchaRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 3) return 'Name must be at least 3 characters';
        break;
      case 'email':
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!value) return 'Email is required';
        if (!emailRegex.test(value)) return 'Invalid email address';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        break;
      default:
        return '';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validateField(key, formData[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Check reCAPTCHA
      const recaptchaValue = recaptchaRef.current?.getValue();
      if (!recaptchaValue) {
        alert("Please verify you are not a robot!");
        return;
      }

      setLoading(true);

      try {
        await emailjs.sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_CONTACT_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        );

        // Success Handling
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        recaptchaRef.current.reset();
        
        // Hide popup after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);

      } catch (error) {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      } finally {
        setLoading(false);
      }
    } else {
      console.log('Form has errors:', formErrors);
    }
  };

  return (
    <motion.section
      id='contact'
      className="min-h-screen w-full flex items-center justify-center p-4 pt-32 md:pt-36"
    >
      <SuccessPopup show={showSuccess} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-2xl w-full max-w-md"
      >
        <BubbleText className='text-center capitalize text-3xl font-bold mb-8 text-[#d1267b]' color={'rgb(247, 136, 244)'}>
          Contact Me
        </BubbleText>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
          <InputField
            label="Name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            error={errors.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            error={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextareaField
            label="Message"
            name="message"
            placeholder="What can I build for you?"
            value={formData.message}
            error={errors.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
              theme="dark"
            />
          </div>

          <ButtonWrapper
            className={`w-full ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gradient-to-r hover:from-amber-200 hover:to-amber-500 hover:shadow-[0_0px_35px_rgba(251,191,36,0.25)] hover:text-white'}`}
            type="submit"
            disabled={loading}
          >
            <span className='translate-x-24 text-lg'>{loading ? 'SENDING...' : 'SEND MESSAGE'}</span>
            {!loading && (
              <motion.span
                className='translate-x-24 text-xl font-bold'
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            )}
          </ButtonWrapper>
        </form>
      </motion.div>
    </motion.section>
  );
}

export default Contact;