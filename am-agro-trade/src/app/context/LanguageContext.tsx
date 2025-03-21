'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.whyUs': 'Why Us',
    'nav.services': 'Services',
    'nav.partnership': 'Partnership',
    'nav.contact': 'Contact',

    // About section
    'about.title': 'About Us',
    'about.subtitle': 'Your Reliable Partner in Transport & Trade',
    'about.description1': 'AM Agro Trade Services e.K. is an innovative company specializing in transport, logistics, and trade.',
    'about.description2': 'Our mission: efficiently connecting businesses and ensuring smooth operations across the entire supply chain.',

    // Why Choose Us section
    'whyUs.title': 'Why Choose Us?',
    'whyUs.expertise.title': 'Industry Expertise',
    'whyUs.expertise.description': 'Years of experience and deep industry knowledge to serve you better',
    'whyUs.solutions.title': 'Flexible Solutions',
    'whyUs.solutions.description': 'Customized approaches to meet your specific requirements',
    'whyUs.network.title': 'Strong Network',
    'whyUs.network.description': 'Extensive partnerships ensuring reliable and efficient service delivery',

    // Services section
    'services.title': 'Our Services',
    'services.transport.title': 'Transport',
    'services.transport.description': 'Efficient and reliable transportation solutions across regions',
    'services.logistics.title': 'Logistics',
    'services.logistics.description': 'Comprehensive logistics management and warehousing',
    'services.trade.title': 'Trade',
    'services.trade.description': 'International trade facilitation and business connections',
    'services.freightForwarding.title': 'Freight Forwarding',
    'services.freightForwarding.description': 'Tailor-made transport solutions, national & international shipping (air and sea freight), direct and express deliveries',
    'services.supplyChain.title': 'Supply Chain Management',
    'services.supplyChain.description': 'Warehousing & distribution, supply chain optimization',
    'services.procurement.title': 'Procurement & Sales',
    'services.procurement.description': 'Import & export of goods, business brokerage',
    'services.businessMatching.title': 'Business Matching',
    'services.businessMatching.description': 'Matching shippers with carriers, customized business solutions',

    // Contact section
    'contact.title': 'Contact Us',

    // Hero Section
    'hero.title': 'AM Agro Trade Services',
    'hero.subtitle': 'Efficiently connecting businesses and ensuring smooth operations across the entire supply chain',
    'hero.feature1.title': 'Fast Delivery',
    'hero.feature1.description': 'Efficient and timely transportation services',
    'hero.feature2.title': 'Secure Transport',
    'hero.feature2.description': 'Your cargo\'s safety is our priority',
    'hero.feature3.title': 'Global Network',
    'hero.feature3.description': 'Connected across continents',

    // Business Partnership Section
    'partnership.title': 'Connecting Europe and Africa – Business Partners, Markets & Opportunities',
    'partnership.intro1': 'Africa offers immense economic potential, but businesses often face challenges when entering these markets. We bridge the gap between the two continents and help you find the right partners.',
    'partnership.intro2': 'We support companies from Europe and Africa in establishing successful business relationships. As an intermediary, we overcome cultural, bureaucratic, and logistical barriers to connect the right partners.',
    'partnership.intro3': 'Africa is rapidly evolving, with new resource discoveries, growing infrastructure, and increasing demand for international cooperation. We help businesses seize these opportunities.',
    'partnership.value1': 'Trust',
    'partnership.value2': 'Intercultural Competence',
    'partnership.value3': 'Economic Development',
    'partnership.valueDescription': 'Our network is built on strong relationships and careful selection.',
    'partnership.service1.title': 'Business Partner Matchmaking',
    'partnership.service1.description': 'We connect companies from Europe and Africa for import, export, and joint ventures.',
    'partnership.service2.title': 'Market Analysis & Consulting',
    'partnership.service2.description': 'Looking to enter a new market? We provide key insights and local contacts.',
    'partnership.service3.title': 'Logistics Services',
    'partnership.service3.description': 'We facilitate connections with reliable logistics partners for cross-border trade.',
    'partnership.regions.westAfrica': 'West Africa',
    'partnership.regions.northAfrica': 'North Africa',
    'partnership.regions.other': 'Other Markets: We support clients based on their specific needs.',

    // Contact Form
    'contact.form.name': 'Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.info.title': 'Contact Information',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Failed to send message. Please try again.',
  },
  de: {
    // Navigation
    'nav.about': 'Über uns',
    'nav.whyUs': 'Warum Wir',
    'nav.services': 'Dienstleistungen',
    'nav.partnership': 'Partnerschaft',
    'nav.contact': 'Kontakt',

    // About section
    'about.title': 'Über Uns',
    'about.subtitle': 'Ihr zuverlässiger Partner für Transport & Handel',
    'about.description1': 'AM Agro Trade Services e.K. ist ein innovatives Unternehmen im Bereich Transport, Logistik und Handel',
    'about.description2': 'Unsere Mission ist es, Unternehmen effizient miteinander zu vernetzen und reibungslose Abläufe entlang der gesamten Lieferkette zu gewährleisten',

    // Why Choose Us section
    'whyUs.title': 'Warum Uns Wählen?',
    'whyUs.expertise.title': 'Branchenexpertise',
    'whyUs.expertise.description': 'Jahrelange Erfahrung und fundiertes Branchenwissen für besseren Service',
    'whyUs.solutions.title': 'Flexibilität und Schnellreaktionszeiten',
    'whyUs.solutions.description': 'Maßgeschneiderte Ansätze für Ihre spezifischen Anforderungen',
    'whyUs.network.title': 'Ein starkes Netzwerk aus Partnern',
    'whyUs.network.description': 'Umfangreiche Partnerschaften für zuverlässige und effiziente Servicebereitstellung',

    // Services section
    'services.title': 'Unsere Leistungen',
    'services.transport.title': 'National und internationale Transporte',
    'services.transport.description': 'Effiziente und zuverlässige Transportlösungen über Regionen hinweg',
    'services.logistics.title': 'Logistik – Effiziente Warenströme',
    'services.logistics.description': 'Umfassendes Logistikmanagement und Lagerhaltung',
    'services.trade.title': 'Handel',
    'services.trade.description': 'Internationale Handelserleichterung und Geschäftsverbindungen',
    'services.freightForwarding.title': 'Spedition',
    'services.freightForwarding.description': 'Maßgeschneiderte Transportlösungen (See- und Luftfracht/Straßenverkehr), nationale & internationale Transporte, Direkt- und Sonderfahrten',
    'services.supplyChain.title': 'Logistik',
    'services.supplyChain.description': 'Effiziente Warenströme, Lagerhaltung & Distribution',
    'services.procurement.title': 'Handel',
    'services.procurement.description': 'Beschaffung & Vertrieb, Import & Export von Waren',
    'services.businessMatching.title': 'Vermittlung',
    'services.businessMatching.description': 'Vermittlung von Transportaufträgen, Partnernetzwerk für Spedition, Logistik und Handel',

    // Contact section
    'contact.title': 'Kontakt',

    // Hero Section
    'hero.title': 'AM Agro Trade Services',
    'hero.subtitle': 'Effiziente Verbindung von Unternehmen und Gewährleistung reibungsloser Abläufe in der gesamten Lieferkette',
    'hero.feature1.title': 'Schnelle Lieferung',
    'hero.feature1.description': 'Effiziente und pünktliche Transportdienste',
    'hero.feature2.title': 'Sicherer Transport',
    'hero.feature2.description': 'Die Sicherheit Ihrer Fracht hat Priorität',
    'hero.feature3.title': 'Globales Netzwerk',
    'hero.feature3.description': 'Verbunden über Kontinente hinweg',

    // Business Partnership Section
    'partnership.title': 'Wir verbinden Europa und Afrika – Geschäftspartner, Märkte und Chancen.',
    'partnership.intro1': 'Afrika bietet enormes wirtschaftliches Potenzial, doch oft stehen Unternehmen vor Herausforderungen, wenn sie neue Märkte erschließen wollen. Wir sind die Brücke zwischen beiden Kontinenten und helfen Ihnen, die richtigen Partner zu finden.',
    'partnership.intro2': 'Wir unterstützen Unternehmen aus Europa und Afrika dabei, erfolgreiche Geschäftsbeziehungen aufzubauen. Als Vermittler überwinden wir kulturelle, bürokratische und logistische Hürden und bringen die richtigen Partner zusammen.',
    'partnership.intro3': 'Afrika entwickelt sich dynamisch, mit neuen Rohstofffunden, wachsender Infrastruktur und steigender Nachfrage nach internationalen Kooperationen. Wir helfen Unternehmen, diese Chancen zu nutzen.',
    'partnership.value1': 'Vertrauen',
    'partnership.value2': 'Interkulturelle Kompetenz',
    'partnership.value3': 'Wirtschaftliche Entwicklung',
    'partnership.valueDescription': 'Unser Netzwerk basiert auf langjährigen Beziehungen und sorgfältiger Auswahl.',
    'partnership.service1.title': ' Vermittlung von Handelspartnern',
    'partnership.service1.description': 'Wir bringen Unternehmen aus Europa und Afrika zusammen – ob für den Import, Export oder Joint Ventures.',
    'partnership.service2.title': 'Marktanalysen und Beratung',
    'partnership.service2.description': 'Sie möchten in einen neuen Markt eintreten? Wir unterstützen Sie mit relevanten Informationen und lokalen Kontakten.',
    'partnership.service3.title': 'Logistische Dienstleistungen',
    'partnership.service3.description': 'Wir helfen bei der Vermittlung zuverlässiger Transport- und Logistiklösungen für grenzüberschreitende Geschäfte.',
    'partnership.regions.westAfrica': 'Westafrika',
    'partnership.regions.northAfrica': 'Nordafrika',
    'partnership.regions.other': 'Andere Märkte: Wir unterstützen Kunden auf ihre Bedürfnisse abgestimmt.',

    // Contact Form
    'contact.form.name': 'Name',
    'contact.form.email': 'Ihre E-Mail',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet...',
    'contact.info.title': 'Kontaktinformationen',
    'contact.form.success': 'Nachricht erfolgreich gesendet!',
    'contact.form.error': 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
  },
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.whyUs': 'Pourquoi Nous',
    'nav.services': 'Services',
    'nav.partnership': 'Partenariat',
    'nav.contact': 'Contact',

    // About section
    'about.title': 'À Propos de Nous',
    'about.subtitle': 'Votre Partenaire de Confiance en Transport et Commerce',
    'about.description1': 'AM Agro Trade Services e.K. est une entreprise innovante spécialisée dans le transport, la logistique et le commerce.',
    'about.description2': 'Notre mission : connecter efficacement les entreprises et assurer des opérations fluides tout au long de la chaîne d\'approvisionnement.',

    // Why Choose Us section
    'whyUs.title': 'Pourquoi Nous Choisir ?',
    'whyUs.expertise.title': 'Expertise Sectorielle',
    'whyUs.expertise.description': 'Des années d\'expérience et une connaissance approfondie du secteur pour mieux vous servir',
    'whyUs.solutions.title': 'Solutions Flexibles',
    'whyUs.solutions.description': 'Des approches personnalisées pour répondre à vos besoins spécifiques',
    'whyUs.network.title': 'Réseau Solide',
    'whyUs.network.description': 'Des partenariats étendus assurant un service fiable et efficace',

    // Services section
    'services.title': 'Nos Services',
    'services.transport.title': 'Transport',
    'services.transport.description': 'Solutions de transport efficaces et fiables à travers les régions',
    'services.logistics.title': 'Logistique',
    'services.logistics.description': 'Gestion logistique complète et entreposage',
    'services.trade.title': 'Commerce',
    'services.trade.description': 'Facilitation du commerce international et connexions commerciales',
    'services.freightForwarding.title': 'Transport',
    'services.freightForwarding.description': 'Solutions de transport adaptées á votre demande de service, transport national et international (maritime, aérien et routier), gestion et organisation compléte des transports',
    'services.supplyChain.title': 'Logistique',
    'services.supplyChain.description': 'Gestion efficace des flux, stockage et distribution, gestion de la chaîne d\'approvisionnement',
    'services.procurement.title': 'Commerce',
    'services.procurement.description': 'Achat et distribution, import/export de marchandises',
    'services.businessMatching.title': 'Services de Courtage',
    'services.businessMatching.description': 'Mise en relation des expéditeurs et des transporteurs, solutions commerciales personnalisées',

    // Contact section
    'contact.title': 'Contactez-nous',

    // Hero Section
    'hero.title': 'AM Agro Trade Services',
    'hero.subtitle': 'Connecter efficacement les entreprises et assurer des opérations fluides dans toute la chaîne d\'approvisionnement',
    'hero.feature1.title': 'Livraison Rapide',
    'hero.feature1.description': 'Services de transport efficaces et ponctuels',
    'hero.feature2.title': 'Transport Sécurisé',
    'hero.feature2.description': 'La sécurité de votre cargo est notre priorité',
    'hero.feature3.title': 'Réseau Global',
    'hero.feature3.description': 'Connecté à travers les continents',

    // Business Partnership Section
    'partnership.title': 'Connecter l\'Europe et l\'Afrique – Partenaires Commerciaux, Marchés & Opportunités',
    'partnership.intro1': 'Africa offre un potentiel économique immense, mais les entreprises rencontrent souvent des difficultés lorsqu\'elles entrent sur ces marchés. Nous réduisons la différence entre les deux continents et vous aidons à trouver les bons partenaires.',
    'partnership.intro2': 'Nous soutenons les entreprises d\'Europe et d\'Afrique dans la mise en place de relations commerciales réussies. En tant que médiateur, nous surmontons les barrières culturelles, bureaucratiques et logistiques pour connecter les bons partenaires.',
    'partnership.intro3': 'Afrique évolue rapidement, avec de nouvelles découvertes de ressources, des infrastructures en croissance et une demande croissante pour la coopération internationale. Nous aidons les entreprises à exploiter ces opportunités.',
    'partnership.value1': 'Confiance',
    'partnership.value2': 'Compétence interculturelle',
    'partnership.value3': 'Développement économique',
    'partnership.valueDescription': 'Notre réseau est construit sur des relations fortes et une sélection soigneuse.',
    'partnership.service1.title': 'Business Partner Matchmaking',
    'partnership.service1.description': 'Nous connectons les entreprises d\'Europe et d\'Afrique pour les importations, les exportations et les joint ventures.',
    'partnership.service2.title': 'Market Analysis & Consulting',
    'partnership.service2.description': 'Vous souhaitez entrer dans un nouveau marché ? Nous fournissons des insights clés et des contacts locaux.',
    'partnership.service3.title': 'Logistics Services',
    'partnership.service3.description': 'Nous facilitons les connexions avec des partenaires logistiques fiables pour le commerce transfrontalier.',
    'partnership.regions.westAfrica': 'West Africa',
    'partnership.regions.northAfrica': 'North Africa',
    'partnership.regions.other': 'Other Markets: We support clients based on their specific needs.',

    // Contact Form
    'contact.form.name': 'Nom',
    'contact.form.email': 'Votre Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.info.title': 'Informations de contact',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.form.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('de');

  const t = (key: string): string => {
    return translations[language as keyof typeof translations][key as keyof typeof translations['de']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 