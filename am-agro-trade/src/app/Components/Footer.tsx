'use client';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-emerald-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} AM Agro Trade & Services.
          </div>
          <div className="text-sm">
            <Link 
              href="/impressum" 
              className="hover:text-emerald-200 transition-colors duration-200"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 