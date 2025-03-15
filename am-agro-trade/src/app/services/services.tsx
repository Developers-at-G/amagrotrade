import React from 'react';
import styles from './services.module.css';
import { services } from '@/data/services'
import ServiceCard from '../Components/ServiceCard'

interface ServiceItem {
  title: string;
  details: string[];
}

const servicesList: ServiceItem[] = [
  {
    title: "Freight Forwarding",
    details: [
      "Tailor-made transport solutions",
      "National & international shipping (air and sea freight)",
      "Direct and express deliveries",
      "Freight management"
    ]
  },
  {
    title: "Logistics",
    details: [
      "Efficient supply chain management",
      "Warehousing & distribution",
      "Supply chain optimization"
    ]
  },
  {
    title: "Trade",
    details: [
      "Procurement & sales",
      "Import & export of goods",
      "Business brokerage"
    ]
  },
  {
    title: "Brokerage",
    details: [
      "Connecting businesses",
      "Matching shippers with carriers",
      "Customized business solutions"
    ]
  }
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default Services;
