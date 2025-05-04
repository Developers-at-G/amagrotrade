'use client';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Impressum() {
  const { t } = useLanguage();
  const router = useRouter();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };

  return (
    <main className="min-h-screen bg-emerald-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <button 
            onClick={handleBack}
            className="inline-flex items-center text-emerald-700 hover:text-emerald-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            {t('back')}
          </button>
        </div>
        <h1 className="text-3xl font-bold text-emerald-800 mb-8">IMPRESSUM</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">Angaben gemäß § 5 TMG:</h2>
            <div className="space-y-2">
              <p><strong>Unternehmensname:</strong> AM Agro Trade & Services e.K.</p>
              <p><strong>Inhaber:</strong> El Hadji Abdoul Aziz Mbaye</p>
              <p><strong>Anschrift:</strong> Am Schleifweg 16, D-55128 Mainz</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">Kontakt:</h2>
            <div className="space-y-2">
              <p><strong>Tel.:</strong> +49 6131 88 88 802</p>
              <p><strong>eMail:</strong> info@am-agrotradeservices.de</p>
              <p><strong>Handelsregister:</strong> HRA 44827 / Registergericht Mainz</p>
              <p><strong>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</strong> DE453257861</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">Verantwortlich für den Inhalt nach §55 Abs. 2 RstV:</h2>
            <div className="space-y-2">
              <p>El Hadji Abdoul Aziz Mbaye</p>
              <p>Am Schleifweg 16, D-55128 Mainz</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">Haftungsausschluss:</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-emerald-600">• Inhaltliche Verantwortung:</h3>
                <p>Der Autor übernimmt keinerlei Haftung oder Garantie für die Aktualität, Richtigkeit, Vollständigkeit oder Qualität der auf dieser Internetseite gestellten Informationen.</p>
                <p>Haftungsansprüche gegen den Autor durch materielle oder immaterielle Art sind grundsätzlich ausgeschlossen.</p>
                <p>Alle Daten werden nach den Bestimmungen des Bundesdatenschutzgesetzes verwendet und nicht an Dritte weitergegeben.</p>
                <p>Am Agro Trade Services haftet nicht für direkte oder indirekte Schäden oder entgangenen Gewinn, die durch die Nutzung von Informationen entstanden sind.</p>
              </div>

              <div>
                <h3 className="font-semibold text-emerald-600">• Haftung für Links:</h3>
                <p>Wir haften auch nicht für Verbindungen oder Preis- bzw. Leistungsangaben, die direkt oder indirekt auf diese Internetseite verweisen.</p>
              </div>

              <div>
                <h3 className="font-semibold text-emerald-600">• Urheberrechtshinweise:</h3>
                <p>Die Inhalte dieser Internetseite unterliegen dem deutschen Urheberrecht.</p>
                <p>AM Agro Trade ist bestrebt, auf selbst erstelltes Material oder lizenzfreie Grafiken, Dokumente zurückzugreifen.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 