import React from 'react';
import styles from './services.module.css';
import { services } from '@/data/services'
import ServiceCard from '../Components/ServiceCard'
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  return (
    <div className={styles.services}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
