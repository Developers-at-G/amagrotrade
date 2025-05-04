'use client';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AGB() {
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
        <h1 className="text-3xl font-bold text-emerald-800 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <div className="space-y-8 text-gray-700">
          <section className="space-y-4">
            <p className="font-semibold">Die Firma AM Agro Trade & Services e.K. beauftragt Unternehmen mit Abwicklung von Transportaufträgen.</p>
            <p>Alle Aufträge berühren auf diese AGBs. Sie sind Bestandteil alle Transportaufträgen.</p>
            <p>AM Agro Trade & Services e.K. widerspricht aller Geschäftsbedingen, Lieferbedingungen oder andere Zahlungsbedingen vom Vertragsgegner.</p>
            <p>Die Allgemeinen Deutschen Spediteurbedingungen (ADSp 2017) und sonstige Geschäftsbedingungen von Auftragnehmer finden hier keine Anwendung.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">1. Leistungen:</h2>
            <div className="space-y-2">
              <p>Mit dem Frachtpreis sind der Transport, die Sicherung und die Stückzahlmäßige Überprüfung der Ware gedeckt.</p>
              <p>Bei palettisierter Ware sind die Vertragsbedingen bezüglich Tausches oder Nichttausch der Paletten auf dem Auftrag zu vermerken.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">2. Meldepflicht:</h2>
            <div className="space-y-2">
              <p>Alle Unstimmigkeiten (Fehlmengen, Bruch oder Verspätungen) sind unverzüglich unter der Telefonnummer: 06131 88 88 802 zu melden.</p>
              <p>Alle Termine aus dem Transportauftrag sind unbedingt einzuhalten.</p>
              <p>Bei nicht rechtzeitiger oder unvollständiger Meldung, die zu Problem führen, behalten wir uns das Recht vor, unabhängig von weiteren Ansprüchen auf Schadenersatz, die vereinbarte Fracht um 20 % zu kürzen.</p>
              <p>Vorbehalte bezüglich der Ware sind auf alle Frachtdokumente zu vermerken.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">3. Palettentausch:</h2>
            <div className="space-y-2">
              <p>Soweit nicht anders vereinbart, sind alle Europaletten Eins zu Eins umzutauschen.</p>
              <p>Der Tausch muss von der Lade- und Entladestelle quittiert werden. Diese Quittung muss als Beleg zur Rechnung mitgeschickt werden.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">3.1: Rückführung und Umbuchung:</h2>
            <p>Es kann ausnahmsweise vereinbart werden, dass das Leergut innerhalb von sechs Wochen zurückgeführt oder umgebucht werden.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">4. Ablieferbelege und Rechnung:</h2>
            <div className="space-y-2">
              <p>Alle Ablieferbelege müssen datiert, vom Empfänger unterschrieben und abgestempelt werden.</p>
              <p>Das Zahlungsziel beträgt 45 Tage nach Rechnungseingang (samt quittierte Ablieferbelege, wie Frachtbrief, Lieferscheine oder CMR).</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">5. Versicherungsnachweis:</h2>
            <div className="space-y-2">
              <p>Der Auftragnehmer ist verpflichtet, einen gültigen Versicherungsnachweis gem. § 7a GüKG vorzulegen.</p>
              <p>Mit der Auftragsannahme bestätigt der Auftragnehmer, dass er eine Haftpflichtversicherung mit der Deckung der gesetzlichen Haftung abgeschlossen hat.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">6. Haftungserhöhung:</h2>
            <div className="space-y-2">
              <p>Bei innerdeutschen Transporten haftet der Auftragnehmer nach den Bestimmungen des HGBs, 3 431 HGB.</p>
              <p>Für Verluste oder Beschädigungen gilt § 449 . Abs. 1 Nr. 1 HGB mit 40 Sonderziehungsrechte pro KG.</p>
              <p>Mit der Auftragsannahme bestätigt der Auftragnehmer, dass seine Versicherung auch diese Erhöhung mitdeckt.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">7. Vertragsstrafe:</h2>
            <p>Beim Verstoß gegen die Verpflichtungen, gilt eine Frachtstrafe von 15 % neben aller anderen Ansprüchen.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">8. Gerichtsstand:</h2>
            <div className="space-y-2">
              <p>Für alle Rechtsstreitigkeiten zwischen AM Agro Trade & Service e.K. und den Auftragnehmern ist für alle Beteiligten, soweit sie Kaufleute sind, das für den Auftraggeber in Mainz zuständige Gericht.</p>
              <p>Diese Vereinbarung gilt als zusätzliche Gerichtsstandvereinbarung im Fall der Art. 31 CMR und 46 § 1 CIM.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 