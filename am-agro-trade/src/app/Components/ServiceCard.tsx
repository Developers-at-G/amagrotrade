import { useLanguage } from "../context/LanguageContext";

interface ServiceCardProps {
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

const ServiceCard = ({ titleKey, descriptionKey, icon }: ServiceCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-emerald-800">{t(titleKey)}</h3>
      <p className="text-gray-600">{t(descriptionKey)}</p>
    </div>
  );
};

export default ServiceCard;
