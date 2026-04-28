import { Building2, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-950 py-16 md:py-20 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr_auto] md:items-center">
          <img src="/images/logo.webp" alt="Logo" className="h-[72px] w-auto" />

          <div className="grid gap-4 sm:grid-cols-2 md:justify-self-center">
            <a
              href={`tel:${t('contact_phone').replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-4 text-stone-300 transition-colors hover:text-white"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-brand-green">
                <Phone size={18} />
              </span>
              <span className="text-sm font-bold">{t('contact_phone')}</span>
            </a>

            <div className="flex items-center gap-4 text-stone-300">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-brand-green">
                <Building2 size={18} />
              </span>
              <span className="text-sm font-bold">{t('contact_address')}</span>
            </div>
          </div>

          <div className="text-stone-600 font-bold tracking-widest text-xs uppercase md:text-right">
            {t('footer_copy')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
