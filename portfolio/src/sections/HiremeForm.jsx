import React, { useEffect, useState, memo, useRef } from 'react';
import { motion } from 'framer-motion';
import ButtonWrapper from '@/components/ui/ButtonWrapper';
import BubbleText from '@/components/ui/text-effect-flipper';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import SuccessPopup from '@/components/ui/SuccessPopup';

const InputField = memo(({ label, name, type = "text", required = true, placeholder, value, error, onChange, onBlur }) => (
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

const TextareaField = memo(({ label, name, required = true, placeholder, value, error, onChange, onBlur }) => (
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


const HiremeForm = () => {
    const formRef = useRef();
    const recaptchaRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        company: '',
        role: '',
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
            case 'contact': {
                if (!value) return 'Contact number is required';
                const sanitizedNumber = value.replace(/[\s()-]/g, '');
                const indianNumberRegex = /^[6789]\d{9}$/;
                const internationalNumberRegex = /^\+\d{10,14}$/;

                if (indianNumberRegex.test(sanitizedNumber) || internationalNumberRegex.test(sanitizedNumber)) {
                } else {
                    return 'Please enter a valid 10-digit Indian number or an international number with a country code (e.g., +91).';
                }
                break;
            }
            case 'company':
                if (!value.trim()) return 'Company name is required';
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
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Optional: Clear error on change for better UX
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        if (error) {
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) {
                formErrors[key] = error;
            }
        });

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
                     import.meta.env.VITE_APP_EMAILJS_HIREME_TEMPLATE_ID,
                     formRef.current,
                     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
                 );
 
                 // Success Handling
                 setShowSuccess(true);
                 setFormData({ name: '', email: '', contact: '', company: '', role: '', message: '' });
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
        <motion.div className="min-h-screen flex items-center justify-center p-4 pt-32 md:pt-24">
            <SuccessPopup show={showSuccess} />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-md mt-8 md:mt-12"
            >
                <BubbleText className='text-center capitalize text-3xl font-bold mb-8 text-[#d1267b]' color= {'rgb(247, 136, 244)'}>Let's Work Together!</BubbleText>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <InputField
                        label="Name"
                        name="name"
                        placeholder="Shyam Sundar"
                        value={formData.name}
                        error={errors.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="shyam@example.com"
                        value={formData.email}
                        error={errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <InputField
                        label="Contact Number"
                        name="contact"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.contact}
                        error={errors.contact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <InputField
                        label="Company Name"
                        name="company"
                        placeholder="Company Inc."
                        value={formData.company}
                        error={errors.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <InputField
                        label="Role"
                        name="role"
                        required={false}
                        placeholder="e.g. Full-Stack Developer"
                        value={formData.role}
                        error={errors.role}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <TextareaField
                        label="Message"
                        name="message"
                        placeholder="Tell me about your Offer..."
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
        </motion.div>
    );
};

export default HiremeForm;