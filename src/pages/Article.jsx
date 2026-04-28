import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, ArrowLeft, ArrowRight, Globe, Building2, GraduationCap, Microscope } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Article = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="bg-white text-stone-900">
      
      {/* CINEMATIC HERO HEADER */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home_slide3.webp"
            alt="Alliance Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-white/60 font-black uppercase tracking-widest text-xs mb-12 hover:text-brand-green transition-all cursor-pointer group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            {t('nav_home')}
          </button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-brand-green text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                {t('art_tag')}
              </span>
              <div className="flex items-center gap-2 text-white/50 text-sm font-medium">
                <Calendar size={16} />
                {t('art_date')}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter max-w-5xl">
              {t('art_title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE INTRO */}
      <section className="relative z-20 -mt-10 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-stone-100">
          <p className="text-2xl md:text-3xl text-stone-700 leading-relaxed font-medium italic border-l-8 border-brand-green pl-10">
            {t('art_intro')}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto py-32">
        <div className="space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-1 flex justify-center pt-2">
              <div className="w-14 h-14 bg-brand-green text-white rounded-2xl flex items-center justify-center shadow-xl shadow-brand-green/30">
                <Building2 size={28} />
              </div>
            </div>
            <div className="md:col-span-11">
              <h2 className="text-3xl font-black text-stone-900 mb-6 tracking-tight">{t('art_mou_title')}</h2>
              <p className="text-stone-600 text-xl leading-relaxed">{t('art_mou_desc')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-1 flex justify-center pt-2">
              <div className="w-14 h-14 bg-stone-900 text-white rounded-2xl flex items-center justify-center shadow-xl">
                <GraduationCap size={28} />
              </div>
            </div>
            <div className="md:col-span-11">
              <h2 className="text-3xl font-black text-stone-900 mb-6 tracking-tight">{t('art_talent_title')}</h2>
              <p className="text-stone-600 text-xl leading-relaxed">{t('art_talent_desc')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-1 flex justify-center pt-2">
              <div className="w-14 h-14 bg-brand-green text-white rounded-2xl flex items-center justify-center shadow-xl shadow-brand-green/30">
                <Microscope size={28} />
              </div>
            </div>
            <div className="md:col-span-11">
              <h2 className="text-3xl font-black text-stone-900 mb-6 tracking-tight">{t('art_center_title')}</h2>
              <p className="text-stone-600 text-xl leading-relaxed">{t('art_center_desc')}</p>
            </div>
          </div>

          <div className="bg-stone-900 rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-8 relative z-10">
              <Globe className="text-brand-green flex-shrink-0" size={64} />
              <div>
                <h2 className="text-3xl font-black text-white tracking-tight leading-tight mb-4">{t('art_global_title')}</h2>
                <p className="text-stone-400 text-lg leading-relaxed">{t('art_global_desc')}</p>
              </div>
            </div>
            
            <a
              href="/documents/MOU_CBIT_RSB.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-12 py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-2xl shadow-brand-green/30 hover:shadow-brand-green/50 transition-all flex items-center gap-4 whitespace-nowrap hover:scale-105 relative z-10"
            >
              {t('art_view_pdf')}
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 py-24 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <img src="/images/logo.webp" alt="Logo" style={{ height: '72px' }} />
          <div className="text-stone-600 font-bold tracking-widest text-xs uppercase">{t('footer_copy')}</div>
        </div>
      </footer>
    </div>
  );
};

export default Article;
