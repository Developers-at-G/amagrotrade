'use client';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="px-3 py-1.5 rounded-md border border-green-300 bg-white text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm font-medium"
    >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="fr">Français</option>
    </select>
  );
};

export default LanguageSelector; 