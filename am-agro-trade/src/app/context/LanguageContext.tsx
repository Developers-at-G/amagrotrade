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
    'nav.about': 'About Us',
    'nav.whyUs': 'Why Us',
    'nav.services': 'Services',
    'nav.partnership': 'Partnership',
    'nav.contact': 'Contact',
    'back': 'Back',

    // About section
    'about.title': 'About Us',
    'about.subtitle': 'Your Reliable Partner in Transport & Trade',
    'about.description1': 'AM Agro Trade Services e.K. is an innovative company specializing in transport, logistics, and trade.',
    'about.description2': 'Our mission: efficiently connecting businesses and ensuring smooth operations across the entire supply chain.',

    // Why Choose Us section
    'whyUs.title': 'Why Choose Us',
    'whyUs.expertise.title': 'Industry Expertise & Experience',
    'whyUs.solutions.title': 'Flexibility in Finding the Best Solution',
    'whyUs.network.title': 'A Strong Network of Partners',
    'whyUs.expertise.description': 'Years of experience and deep industry knowledge to serve you better',
    'whyUs.solutions.description': 'Customized approaches to meet your specific requirements',
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
    'services.freightForwarding.description': 'Tailor-made transport solutions for your specific needs',
    'services.freightForwarding.shipping': 'National & international shipping (air and sea freight)',
    'services.freightForwarding.management': 'Comprehensive freight management',
    'services.freightForwarding.express': 'Direct and express deliveries',
    'services.freightForwarding.brokerage': 'Business brokerage',
    'services.supplyChain.title': 'Logistics & Supply Chain',
    'services.supplyChain.description': 'Efficient supply chain management solutions',
    'services.supplyChain.warehousing': 'Warehousing services',
    'services.supplyChain.distribution': 'Distribution management',
    'services.supplyChain.optimization': 'Supply chain optimization',
    'services.procurement.title': 'Trade & Procurement',
    'services.procurement.description': 'Complete import/export and business matching services',
    'services.procurement.import': 'Import services',
    'services.procurement.export': 'Export services',
    'services.businessMatching.title': 'Business Matching',
    'services.businessMatching.description': 'Matching shippers with carriers, customized business solutions',

    // Contact section
    'contact.title': 'Contact Us',

    // Hero Section
    'hero.title': 'AM Agro Trade',
    'hero.subtitle': 'Efficiently connecting businesses and ensuring smooth operations across the entire supply chain',
    'hero.feature1.title': 'Fast Delivery',
    'hero.feature1.description': 'Efficient and timely transportation services',
    'hero.feature2.title': 'Secure Transport',
    'hero.feature2.description': 'Your cargo\'s safety is our priority',
    'hero.feature3.title': 'Global Network',
    'hero.feature3.description': 'Connected across continents',
    'hero.services.freight': 'Freight Forwarding: National & international transport',
    'hero.services.logistics': 'Logistics: Warehousing, distribution, supply chain management',
    'hero.services.trade': 'Trade: Procurement & sales of goods',
    'hero.services.brokerage': 'Brokerage: Connecting businesses in the industry',
    'hero.description': 'Your trusted partner in freight forwarding, logistics, trade, and brokerage. We provide customized transport solutions, optimize trade processes, and ensure smooth business connections.',

    // Business Partnership Section
    'partnership.title': 'Connecting Europe and Africa – Business Partners, Markets & Opportunities',
    'partnership.intro1': 'Africa offers immense economic potential, but businesses often face challenges when entering these markets. We bridge the gap between the two continents and help you find the right partners.',
    'partnership.intro2': 'We support companies from Europe and Africa in establishing successful business relationships. As an intermediary, we overcome cultural, bureaucratic, and logistical barriers to connect the right partners.',
    'partnership.intro3': 'Africa is rapidly evolving, with new resource discoveries, growing infrastructure, and increasing demand for international cooperation. We help businesses seize these opportunities.',
    'partnership.value1': 'Trust',
    'partnership.value1.description': 'Our network is built on strong relationships and careful selection.',
    'partnership.value2': 'Intercultural Competence',
    'partnership.value2.description': 'We understand the challenges on both sides.',
    'partnership.value3': 'Economic Development',
    'partnership.value3.description': 'We contribute to sustainable and mutually beneficial cooperation.',
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
    'contact.info.title': 'Contact',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Failed to send message. Please try again.',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.fax': 'Fax',
    'contact.info.partner': 'Your trusted partner for agricultural logistics',
  },
  de: {
    // Navigation
    'nav.about': 'Über uns',
    'nav.whyUs': 'Warum Wir',
    'nav.services': 'Dienstleistungen',
    'nav.partnership': 'Partnerschaft',
    'nav.contact': 'Kontakt',
    'back': 'Zurück',

    // About section
    'about.title': 'Über Uns',
    'about.subtitle': 'Ihr zuverlässiger Partner für Transport & Handel',
    'about.description1': 'AM Agro Trade Services e.K. ist ein innovatives Unternehmen im Bereich Transport, Logistik und Handel',
    'about.description2': 'Unsere Mission ist es, Unternehmen effizient miteinander zu vernetzen und reibungslose Abläufe entlang der gesamten Lieferkette zu gewährleisten',

    // Why Choose Us section
    'whyUs.title': 'Warum Uns Wählen?',
    'whyUs.expertise.title': 'Branchenwissen & langjährige Erfahrungen',
    'whyUs.solutions.title': 'Flexibilität und schnelle Reaktionszeiten',
    'whyUs.network.title': 'Ein starkes Netzwerk aus Partnern',
    'whyUs.expertise.description': 'Jahrelange Erfahrung und fundiertes Branchenwissen für besseren Service',
    'whyUs.solutions.description': 'Maßgeschneiderte Ansätze für Ihre spezifischen Anforderungen',
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
    'services.freightForwarding.description': 'Maßgeschneiderte Transportlösungen für Ihre Bedürfnisse',
    'services.freightForwarding.shipping': 'Nationale & internationale Transporte (See- und Luftfracht)',
    'services.freightForwarding.management': 'Umfassendes Frachtmanagement',
    'services.freightForwarding.express': 'Direkt- und Sonderfahrten',
    'services.freightForwarding.brokerage': 'Vermittlung von Handelspartnern',
    'services.supplyChain.title': 'Logistik',
    'services.supplyChain.description': 'Effiziente Warenströme und Logistikmanagement',
    'services.supplyChain.warehousing': 'Lagerhaltung',
    'services.supplyChain.distribution': 'Distribution',
    'services.supplyChain.optimization': 'Optimierung der Lieferkette',
    'services.procurement.title': 'Handel & Vermittlung',
    'services.procurement.description': 'Import/Export und Geschäftsvermittlung',
    'services.procurement.import': 'Import von Waren',
    'services.procurement.export': 'Export von Waren',
    'services.businessMatching.title': 'Vermittlung',
    'services.businessMatching.description': 'Vermittlung von Transportaufträgen, Partnernetzwerk für Spedition, Logistik und Handel',

    // Contact section
    'contact.title': 'Kontakt',

    // Hero Section
    'hero.title': 'AM Agro Trade',
    'hero.subtitle': 'Ihr Partner für Spedition, Logistik, Handel und Vermittlung – zuverlässig, flexibel und effizient. Wir verbinden Unternehmen mit maßgeschneiderten Transport- und Logistiklösungen, optimieren Handelsprozesse und sorgen für eine reibungslose Vermittlung in der Branche.',
    'hero.feature1.title': 'Schnelle Lieferung',
    'hero.feature1.description': 'Effiziente und pünktliche Transportdienste',
    'hero.feature2.title': 'Sicherer Transport',
    'hero.feature2.description': 'Die Sicherheit Ihrer Fracht hat Priorität',
    'hero.feature3.title': 'Globales Netzwerk',
    'hero.feature3.description': 'Verbunden über Kontinente hinweg',
    'hero.services.freight': 'Spedition: Nationale & internationale Transporte (auch Luft- und Seefracht)',
    'hero.services.logistics': 'Logistik: Lagerung, Distribution',
    'hero.services.trade': 'Handel: Wareneinkauf & Vertrieb',
    'hero.services.brokerage': 'Vermittlung: Verbindung zwischen Transport- und Handelsunternehmen',
    'hero.description': 'Ihr Partner für Spedition, Logistik, Handel und Vermittlung – zuverlässig, flexibel und effizient. Wir verbinden Unternehmen mit maßgeschneiderten Transport- und Logistiklösungen, optimieren Handelsprozesse und sorgen für eine reibungslose Vermittlung in der Branche.',

    // Business Partnership Section
    'partnership.title': 'Wir verbinden Europa und Afrika – Geschäftspartner, Märkte und Chancen.',
    'partnership.intro1': 'Afrika bietet enormes wirtschaftliches Potenzial, doch oft stehen Unternehmen vor Herausforderungen, wenn sie neue Märkte erschließen wollen. Wir sind die Brücke zwischen beiden Kontinenten und helfen Ihnen, die richtigen Partner zu finden.',
    'partnership.intro2': 'Wir unterstützen Unternehmen aus Europa und Afrika dabei, erfolgreiche Geschäftsbeziehungen aufzubauen. Als Vermittler überwinden wir kulturelle, bürokratische und logistische Hürden und bringen die richtigen Partner zusammen.',
    'partnership.intro3': 'Afrika entwickelt sich dynamisch, mit neuen Rohstofffunden, wachsender Infrastruktur und steigender Nachfrage nach internationalen Kooperationen. Wir helfen Unternehmen, diese Chancen zu nutzen.',
    'partnership.value1': 'Vertrauen',
    'partnership.value1.description': 'Unser Netzwerk basiert auf langjährigen Beziehungen und sorgfältiger Auswahl.',
    'partnership.value2': 'Interkulturelle Kompetenz',
    'partnership.value2.description': 'Wir verstehen die Herausforderungen beider Seiten.',
    'partnership.value3': 'Wirtschaftliche Entwicklung',
    'partnership.value3.description': 'Wir tragen zur nachhaltigen Zusammenarbeit bei.',
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
    'contact.info.title': 'Kontakt',
    'contact.form.success': 'Nachricht erfolgreich gesendet!',
    'contact.form.error': 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'E-Mail',
    'contact.info.fax': 'Fax',
    'contact.info.partner': 'Ihr zuverlässiger Partner für Agrarlogistik',
  },
  fr: {
    // Navigation
    'nav.about': 'À Propos de Nous',
    'nav.whyUs': 'Pourquoi Nous',
    'nav.services': 'Services',
    'nav.partnership': 'Partenariat',
    'nav.contact': 'Contact',
    'back': 'Retour',

    // About section
    'about.title': 'À Propos de Nous',
    'about.subtitle': 'Votre Partenaire de Confiance en Transport et Commerce',
    'about.description1': 'AM Agro Trade Services e.K. est une entreprise innovante spécialisée dans le transport, la logistique et le commerce.',
    'about.description2': 'Notre mission : connecter efficacement les entreprises et assurer des opérations fluides tout au long de la chaîne d\'approvisionnement.',

    // Why Choose Us section
    'whyUs.title': 'Pourquoi Nous Choisir ?',
    'whyUs.expertise.title': 'Expertise Sectorielle',
    'whyUs.solutions.title': 'Solutions Flexibles',
    'whyUs.network.title': 'Réseau Solide',
    'whyUs.expertise.description': 'Des années d\'expérience et une connaissance approfondie du secteur pour mieux vous servir',
    'whyUs.solutions.description': 'Des approches personnalisées pour répondre à vos besoins spécifiques',
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
    'services.freightForwarding.description': 'Solutions de transport adaptées à votre demande',
    'services.freightForwarding.shipping': 'Transport national et international (maritime et aérien)',
    'services.freightForwarding.management': 'Gestion complète des transports',
    'services.freightForwarding.express': 'Livraisons directes et express',
    'services.freightForwarding.brokerage': 'Courtage commercial',
    'services.supplyChain.title': 'Logistique',
    'services.supplyChain.description': 'Gestion efficace des flux logistiques',
    'services.supplyChain.warehousing': 'Services de stockage',
    'services.supplyChain.distribution': 'Gestion de la distribution',
    'services.supplyChain.optimization': 'Optimisation de la chaîne logistique',
    'services.procurement.title': 'Commerce',
    'services.procurement.description': 'Services complets d\'import/export',
    'services.procurement.import': 'Services d\'importation',
    'services.procurement.export': 'Services d\'exportation',
    'services.procurement.brokerage': 'Courtage commercial',
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
    'hero.services.freight': 'Expédition : Transport national et international',
    'hero.services.logistics': 'Logistique : Stockage, distribution, gestion des flux',
    'hero.services.trade': 'Commerce : Achat et vente de marchandises',
    'hero.services.brokerage': 'Courtage : Mise en relation entre entreprises',
    'hero.description': 'Votre partenaire de confiance dans les domaines de transport, logistique, commerce et courtage. Nous offrons des solutions de transport sur mesure, optimisons les processus commerciaux et assurons une intermédiation efficace dans le secteur.',
    
    // Business Partnership Section
    'partnership.title': 'Connecter l\'Europe et l\'Afrique – Partenaires Commerciaux, Marchés & Opportunités',
    'partnership.intro1': 'L\'Afrique offre un potentiel économique immense, mais les entreprises rencontrent souvent des difficultés lorsqu\'elles entrent sur ces marchés. Nous réduisons la différence entre les deux continents et vous aidons à trouver les bons partenaires.',
    'partnership.intro2': 'Nous soutenons les entreprises d\'Europe et d\'Afrique dans la mise en place de relations commerciales réussies. En tant que médiateur, nous surmontons les barrières culturelles, bureaucratiques et logistiques pour connecter les bons partenaires.',
    'partnership.intro3': 'L\'Afrique évolue rapidement, avec de nouvelles découvertes de ressources, des infrastructures en croissance et une demande croissante pour la coopération internationale. Nous aidons les entreprises à exploiter ces opportunités.',
    'partnership.value1': 'La Confiance',
    'partnership.value1.description': 'Notre réseau repose sur des relations solides et une sélection rigoureuse.',
    'partnership.value2': 'La Compétence interculturelle',
    'partnership.value2.description': 'Nous comprenons les défis des deux parties.',
    'partnership.value3': 'Le Développement économique',
    'partnership.value3.description': 'Nous contribuons à une collaboration durable et mutuellement bénéfique.',
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
    'contact.info.title': 'Contact',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.form.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'E-mail',
    'contact.info.fax': 'Fax',
    'contact.info.partner': 'Votre partenaire fiable en logistique agricole',
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