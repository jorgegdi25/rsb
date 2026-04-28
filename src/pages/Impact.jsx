import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Droplet, MapPin, Shield, TreePine, Users, ArrowRight, AlertTriangle, Waves, FileText, Download, Microscope } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

const Impact = ({ onContactClick }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { url: '/images/atrato_slide1.webp', title: t('impact_hero_title'), subtitle: t('impact_hero_subtitle') },
    { url: '/images/atrato_slide2.webp', title: t('impact_hero_title'), subtitle: t('impact_hero_subtitle') },
    { url: '/images/atrato_slide3.webp', title: t('impact_hero_title'), subtitle: t('impact_hero_subtitle') }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-white text-stone-900">

      {/* HERO SLIDER */}
      <section className="relative min-h-[820px] md:min-h-screen flex items-center md:items-end overflow-hidden py-32 md:py-0">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img key={currentSlide} src={slides[currentSlide].url} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="w-full h-full object-cover" />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-10 rounded-full transition-all duration-500 ${currentSlide === idx ? 'bg-brand-green h-16' : 'bg-white/20'}`} />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 md:pb-28 w-full">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="inline-flex items-center gap-2 bg-brand-green/20 backdrop-blur-md border border-brand-green/30 text-brand-green px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-8">
              <Waves size={16} /> {t('impact_hero_tag')}
            </span>
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white leading-[1.05] md:leading-[1] mb-8 tracking-tighter">
                  {slides[currentSlide].title} <br /> <span className="text-brand-green italic">{slides[currentSlide].subtitle}</span>
                </h1>
              </motion.div>
            </AnimatePresence>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-12">{t('impact_hero_desc')}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '750K+', label: t('impact_stats_affected') },
                { value: '4', label: t('impact_stats_municipalities') },
                { value: '200×', label: t('impact_stats_limit') },
                { value: '2016', label: t('impact_stats_sentencia') }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-5 text-center">
                  <div className="text-2xl font-black text-brand-green">{stat.value}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="max-w-4xl mx-auto text-center mb-24" {...fadeUp}>
            <span className="text-brand-green font-bold text-sm uppercase tracking-[0.3em] mb-4 block">{t('impact_intro_tag')}</span>
            <h2 className="text-5xl md:text-6xl font-black text-stone-900 leading-tight mb-8 tracking-tighter">
              {t('impact_intro_title')} <span className="text-brand-green italic">{t('impact_intro_title_accent')}</span>, {t('impact_intro_title_suffix')}
            </h2>
            <p className="text-stone-500 text-xl leading-relaxed">{t('impact_intro_desc')}</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp} className="relative group">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img src="/images/forest.webp" alt="Forest" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-[2rem] shadow-2xl p-10 max-w-sm border border-stone-100 hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-green text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-green/30"><TreePine size={24} /></div>
                  <span className="font-black text-stone-900 uppercase tracking-widest text-sm">{t('impact_bio_tag')}</span>
                </div>
                <p className="text-stone-500 text-lg leading-relaxed">{t('impact_bio_desc')}</p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="space-y-8 lg:pt-12">
              {[
                { icon: <Droplet size={24} />, title: t('impact_mercury_title'), sub: t('impact_mercury_sub'), desc: t('impact_mercury_desc') },
                { icon: <AlertTriangle size={24} />, title: t('impact_finding_title'), sub: t('impact_finding_sub'), desc: t('impact_finding_desc') },
                { icon: <MapPin size={24} />, title: t('impact_comm_title'), sub: t('impact_comm_sub'), desc: t('impact_comm_desc') }
              ].map((item, i) => (
                <div key={i} className="bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-brand-green/30 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-black text-stone-900 mb-1">{item.title}</h3>
                      <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-3">{item.sub}</p>
                      <p className="text-stone-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SENTENCIA */}
      <section className="py-32 px-6 md:px-12 bg-stone-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeUp}>
              <span className="text-brand-green font-bold text-sm uppercase tracking-[0.3em] mb-6 block">{t('impact_legal_tag')}</span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-10 tracking-tighter">
                {t('impact_legal_title')} <br /><span className="text-brand-green italic">T-622</span>
              </h2>
              <p className="text-stone-400 text-xl leading-relaxed mb-12">{t('impact_legal_desc')}</p>
              <div className="flex items-center gap-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-10">
                <Shield size={48} className="text-brand-green flex-shrink-0" />
                <div>
                  <p className="text-white font-black text-xl mb-2">{t('impact_rights_title')}</p>
                  <p className="text-stone-400 leading-relaxed font-medium">{t('impact_rights_desc')}</p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="relative group">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img src="/images/atrato_river.webp" alt="Atrato" className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-green text-white rounded-[2rem] p-10 shadow-2xl shadow-brand-green/30">
                <div className="text-5xl font-black mb-1">2016</div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/80">{t('impact_court_ruling')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESPONSE */}
      <section className="py-32 px-6 md:px-12 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-24" {...fadeUp}>
            <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">{t('impact_response_tag')}</span>
            <h2 className="text-5xl md:text-6xl font-black text-stone-900 leading-tight tracking-tighter">
              {t('impact_response_title')} <span className="text-brand-green italic">{t('impact_response_title_accent')}</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Droplet size={32} />, title: t('impact_sol_water'), desc: t('impact_sol_water_desc') },
              { icon: <TreePine size={32} />, title: t('impact_sol_biochar'), desc: t('impact_sol_biochar_desc') },
              { icon: <Waves size={32} />, title: t('impact_sol_eco'), desc: t('impact_sol_eco_desc') }
            ].map((item, i) => (
              <motion.div key={i} className="group bg-white rounded-[2.5rem] p-12 shadow-sm border border-stone-100 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <div className="w-20 h-20 bg-brand-green text-white flex items-center justify-center rounded-3xl mb-10 group-hover:rotate-6 transition-all shadow-xl shadow-brand-green/20">{item.icon}</div>
                <h3 className="text-2xl font-black text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed font-medium text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS SECTION */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">RESOURCES</span>
            <h2 className="text-5xl md:text-6xl font-black text-stone-900 tracking-tighter mb-6">{t('impact_docs_title')}</h2>
            <p className="text-stone-500 text-xl max-w-3xl mx-auto">{t('impact_docs_desc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('doc_sentencia'), file: 'Sentencia_T_622.pdf', icon: <Shield size={32} /> },
              { title: t('doc_mercury'), file: 'Mercury_Risk_Assessment.pdf', icon: <Microscope size={32} /> },
              { title: t('doc_history'), file: 'Atrato_History.pdf', icon: <FileText size={32} /> }
            ].map((doc, i) => (
              <motion.div key={i} className="group bg-stone-50 rounded-[2.5rem] p-10 border border-stone-100 hover:bg-white hover:shadow-2xl transition-all duration-500" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {doc.icon || <FileText size={32} />}
                </div>
                <h3 className="text-xl font-black text-stone-900 mb-6 leading-tight">{doc.title}</h3>
                <a href={`/documents/${doc.file}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-brand-green font-black uppercase tracking-widest text-xs hover:gap-5 transition-all">
                  {t('doc_download')} <Download size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 px-6 md:px-12 overflow-hidden bg-white">
        <div className="absolute inset-0 max-w-[95%] mx-auto my-10 rounded-[4rem] overflow-hidden">
          <img src="/images/forest.webp" alt="Forest" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"></div>
        </div>
        <motion.div className="relative z-10 max-w-4xl mx-auto text-center py-10" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <Users size={64} className="text-brand-green mx-auto mb-8" />
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight tracking-tighter">
            {t('impact_cta_title')} <br /><span className="text-brand-green">{t('impact_cta_accent')}</span>
          </h2>
          <motion.button onClick={onContactClick} className="bg-brand-green text-white px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-brand-green/40 hover:shadow-brand-green/60 transition-all inline-flex items-center gap-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {t('impact_cta_button')} <ArrowRight size={24} />
          </motion.button>
        </motion.div>
      </section>

      <footer className="bg-stone-950 py-20 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <img src="/images/logo.webp" alt="Logo" style={{ height: '72px' }} />
          <div className="text-stone-600 font-bold tracking-widest text-sm uppercase">© 2024 RSB Green Tech. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Impact;
