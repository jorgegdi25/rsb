import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, MessageSquare, Building2, Phone, Loader2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
          onClose();
        }, 3000);
      } else {
        setStatus('error');
        setErrorMessage(t('contact_error_desc'));
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage(t('contact_error_desc'));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 py-6 md:items-center">
          <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-stone-900/80 backdrop-blur-md"></Motion.div>
          <Motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 20 }} className="relative my-auto flex max-h-[calc(100vh-3rem)] w-full max-w-4xl flex-col overflow-y-auto rounded-[2rem] bg-white shadow-2xl md:flex-row md:rounded-[2.5rem]">
            <div className="order-2 shrink-0 bg-stone-900 text-white p-6 sm:p-8 md:order-1 md:w-2/5 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px]"></div>
              <div className="relative z-10">
                <img src="/images/logo.webp" alt="Logo" style={{ filter: 'brightness(0) invert(1)' }} className="mb-5 h-10 md:mb-8 md:h-12" />
                <h2 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 leading-tight">{t('contact_title')} <br /><span className="text-brand-green italic">{t('contact_title_accent')}</span></h2>
                <p className="text-stone-400 text-sm md:text-lg leading-relaxed">{t('contact_desc')}</p>
              </div>
              <div className="space-y-4 md:space-y-6 relative z-10 mt-6 md:mt-12">
                <div className="flex items-center gap-4 text-stone-300">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-green"><Phone size={18} /></div>
                  <span className="text-sm font-medium">{t('contact_phone')}</span>
                </div>
                <div className="flex items-center gap-4 text-stone-300">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-green"><Building2 size={18} /></div>
                  <span className="text-sm font-medium">{t('contact_address')}</span>
                </div>
              </div>
            </div>
            <div className="order-1 shrink-0 p-6 pt-12 sm:p-8 sm:pt-14 md:order-2 md:w-3/5 md:p-12 relative">
              <button type="button" onClick={onClose} aria-label={t('contact_close')} className="absolute top-5 right-5 md:top-8 md:right-8 text-stone-400 hover:text-stone-900 transition-colors"><X size={24} /></button>
              
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <Motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center">
                    <CheckCircle2 size={48} />
                  </Motion.div>
                  <h3 className="text-2xl font-black text-stone-900">{t('contact_success_title') || 'Message Sent!'}</h3>
                  <p className="text-stone-500">{t('contact_success_desc') || "We'll get back to you shortly."}</p>
                </div>
              ) : (
                <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                  <div className="pr-10">
                    <p className="text-brand-green text-xs font-black uppercase tracking-[0.25em] mb-2">{t('contact_form_tag')}</p>
                    <h3 className="text-2xl md:text-3xl font-black text-stone-900 leading-tight">{t('contact_form_title')}</h3>
                    <p className="text-stone-500 text-sm md:text-base mt-3 leading-relaxed">{t('contact_form_desc')}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">{t('contact_label_name')}</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                        <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder={t('contact_placeholder_name')} className="w-full bg-stone-50 border border-stone-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">{t('contact_label_email')}</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                        <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@company.com" className="w-full bg-stone-50 border border-stone-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">{t('contact_label_phone')}</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-stone-50 border border-stone-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">{t('contact_label_company')}</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                        <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Company Name" className="w-full bg-stone-50 border border-stone-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">{t('contact_label_message')}</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-5 text-stone-300" size={18} />
                      <textarea required name="message" value={formData.message} onChange={handleChange} placeholder={t('contact_placeholder_message')} rows="4" className="w-full bg-stone-50 border border-stone-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all resize-none"></textarea>
                    </div>
                  </div>
                  
                  <Motion.button 
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    className={`w-full text-white py-5 rounded-2xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-3 ${
                      status === 'loading' ? 'bg-stone-400 cursor-not-allowed' : 'bg-brand-green shadow-brand-green/30 hover:shadow-brand-green/50'
                    }`}
                  >
                    {status === 'loading' ? (
                      <>Processing... <Loader2 className="animate-spin" size={20} /></>
                    ) : (
                      <>{t('contact_send')} <Send size={20} /></>
                    )}
                  </Motion.button>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm text-center font-bold">{errorMessage || t('contact_error_desc')}</p>
                  )}
                </form>
              )}
            </div>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
