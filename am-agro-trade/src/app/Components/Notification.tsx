import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface NotificationProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

export default function Notification({ show, message, onClose }: NotificationProps) {
  const { t } = useLanguage();
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 right-4 bg-emerald-600 text-white px-6 py-4 rounded-lg shadow-lg z-50"
        >
          <div className="flex items-center gap-3">
            <span>{t(message)}</span>
            <button onClick={onClose} className="text-white hover:text-emerald-100">
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 