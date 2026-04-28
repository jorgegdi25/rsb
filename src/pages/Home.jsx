import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LeafyGreen, Droplet, Atom, ArrowRight, FlaskConical, Microscope, Shield, Zap, Beaker, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const Home = ({ onContactClick }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { url: '/images/home_slide1.webp' },
    { url: '/images/home_slide2.webp' },
    { url: '/images/home_slide3.webp' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const solutions = [
    {
      title: t('solutions_biochar'),
      desc: t('solutions_biochar_desc'),
      image: '/images/biochar_card.webp',
      tag: 'Circular Economy'
    },
    {
      title: t('solutions_water'),
      desc: t('solutions_water_desc'),
      image: '/images/water_card.webp',
      tag: 'Remediation'
    },
    {
      title: t('solutions_nano'),
      desc: t('solutions_nano_desc'),
      image: '/images/lab_card.webp',
      tag: 'Advanced Science'
    }
  ];

  const stats = [
    { number: '15+', label: t('stats_patents'), sublabel: t('stats_patents_sub') },
    { number: '3', label: t('stats_phd'), sublabel: t('stats_phd_sub') },
    { number: '750K+', label: t('stats_impact'), sublabel: t('stats_impact_sub') },
    { number: '98%', label: t('stats_mercury'), sublabel: t('stats_mercury_sub') }
  ];

  return (
    <div className="bg-white text-stone-900">

      {/* HERO SLIDER */}
      <section className="relative min-h-[760px] md:h-screen flex items-center overflow-hidden py-28 md:py-0">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <Motion.img
              key={currentSlide}
              src={heroSlides[currentSlide].url}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/40 to-transparent"></div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-10 rounded-full transition-all duration-500 ${
                currentSlide === idx ? 'bg-brand-green h-16' : 'bg-white/20'
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 md:pt-20">
          <Motion.div className="max-w-3xl" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
            <span className="inline-block bg-brand-green/20 backdrop-blur-md border border-brand-green/30 text-brand-green px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8">
              {t('hero_leadership')}
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-black text-white leading-[0.95] md:leading-[0.9] mb-8 tracking-tighter">
              {t('hero_title_1')} <br />
              <span className="text-brand-green italic">{t('hero_title_2')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12 leading-relaxed font-medium">
              {t('hero_desc')}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-5">
              <button onClick={onContactClick} className="bg-brand-green text-white px-8 sm:px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-brand-green/30 hover:shadow-brand-green/50 transition-all flex items-center justify-center gap-3">
                {t('hero_cta_info')} <ArrowRight size={20} />
              </button>
              <Link to="/impacto-ambiental" className="border-2 border-white/30 text-white px-8 sm:px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all text-center">
                {t('hero_cta_impact')}
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-stone-900 py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-brand-green mb-2 tracking-tighter">{stat.number}</div>
                <div className="text-white font-bold text-sm uppercase tracking-widest">{stat.label}</div>
                <div className="text-stone-500 text-xs mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-brand-green font-bold text-sm uppercase tracking-[0.3em] mb-4 block">{t('solutions_tag')}</span>
            <h2 className="text-5xl md:text-6xl font-black text-stone-900 leading-tight">
              {t('solutions_title')} <span className="text-brand-green">{t('solutions_title_accent')}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {solutions.map((sol, idx) => (
              <Motion.div key={idx} className="group relative bg-stone-50 rounded-[2.5rem] overflow-hidden border border-stone-100 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}>
                <div className="h-72 overflow-hidden relative">
                  <img src={sol.image} alt={sol.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-stone-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-stone-200">{sol.tag}</span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-stone-900 mb-4 group-hover:text-brand-green transition-colors">{sol.title}</h3>
                  <p className="text-stone-500 leading-relaxed text-lg mb-8">{sol.desc}</p>
                  <div className="flex items-center gap-3 text-brand-green font-bold group-hover:gap-5 transition-all">
                    {t('solutions_cta')} <ArrowRight size={20} />
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="py-32 px-6 md:px-12 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-6 block">{t('showcase_tag')}</span>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 leading-[1.1]">
                {t('showcase_title')} <br />
                <span className="text-brand-green">{t('showcase_title_accent')}</span>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-10">{t('showcase_desc')}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-stone-200">
                  <Zap className="text-brand-green mb-4" />
                  <div className="font-bold text-stone-900">{t('showcase_patented')}</div>
                  <div className="text-stone-400 text-sm">{t('showcase_patented_sub')}</div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-stone-200">
                  <Globe className="text-brand-green mb-4" />
                  <div className="font-bold text-stone-900">{t('showcase_impact')}</div>
                  <div className="text-stone-400 text-sm">{t('showcase_impact_sub')}</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Motion.div className="space-y-4" initial={{ y: 20 }} whileInView={{ y: 0 }}>
                <img src="/images/gallery1.webp" className="rounded-3xl h-64 w-full object-cover shadow-lg" alt="1" />
                <img src="/images/gallery2.webp" className="rounded-3xl h-80 w-full object-cover shadow-lg" alt="2" />
              </Motion.div>
              <Motion.div className="space-y-4 mt-8" initial={{ y: -20 }} whileInView={{ y: 0 }}>
                <img src="/images/gallery3.webp" className="rounded-3xl h-80 w-full object-cover shadow-lg" alt="3" />
                <img src="/images/gallery4.webp" className="rounded-3xl h-64 w-full object-cover shadow-lg" alt="4" />
              </Motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ALLIANCE SECTION */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-stone-900 rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            {/* Image Side */}
            <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
              <img
                src="/images/home_slide3.webp"
                alt="Strategic Alliance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-green/20 mix-blend-overlay"></div>
            </div>
            
            {/* Content Side */}
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <span className="text-brand-green font-black text-xs uppercase tracking-[0.3em] mb-6 block">
                {t('news_tag')}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tighter">
                {t('news_title')}
              </h2>
              <p className="text-brand-green font-bold text-lg mb-4 italic">
                {t('news_subtitle')}
              </p>
              <p className="text-stone-400 text-lg leading-relaxed mb-12">
                {t('news_desc')}
              </p>
              
              <Link
                to="/news/cbit-rsb-partnership"
                className="inline-flex items-center gap-3 text-white font-black text-sm uppercase tracking-widest group"
              >
                <span className="border-b-2 border-brand-green pb-1 group-hover:border-white transition-all">
                  {t('news_read_more')}
                </span>
                <ArrowRight size={18} className="text-brand-green group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">{t('leadership_tag')}</span>
              <h2 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tighter">{t('leadership_title')}</h2>
            </div>
            <p className="text-stone-500 text-lg max-w-md">{t('leadership_desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'Dr. Shameem Hasan', role: 'Nuclear & Environmental', icon: <Beaker /> },
              { name: 'Dr. Veera M. Boddu', role: 'Chemical Engineering', icon: <Microscope /> },
              { name: 'Dr. Rafi M. Iasir', role: 'Chemical & Nuclear', icon: <FlaskConical /> },
              { name: 'Rubén D. Salazar', role: 'Manager & CBC', icon: <Shield /> }
            ].map((member, i) => (
              <div key={i} className="group bg-stone-50 rounded-3xl p-10 border border-stone-100 hover:bg-stone-900 transition-all duration-500">
                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-green group-hover:text-white transition-all">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-white mb-2">{member.name}</h3>
                <p className="text-stone-500 group-hover:text-stone-400 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-stone-900 rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
            <img src="/images/raw_material.webp" className="w-full h-full object-cover" alt="Waste" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900 to-transparent"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              {t('cta_final_title')} <br />
              <span className="text-brand-green">{t('cta_final_title_accent')}</span>
            </h2>
            <p className="text-stone-400 text-xl mb-12">{t('cta_final_desc')}</p>
            <button onClick={onContactClick} className="bg-brand-green text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-brand-green/40 hover:shadow-brand-green/60 transition-all">
              {t('cta_final_button')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
