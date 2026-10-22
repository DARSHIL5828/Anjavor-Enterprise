import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './AnimatedSection';

function highlightMatch(text, query) {
  if (!query || !query.trim()) return text;
  try {
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-ice-soft text-ice-strong px-1 py-0.5 rounded font-medium border border-ice/20">
          {part}
        </mark>
      ) : (
        part
      )
    );
  } catch {
    return text;
  }
}

function AccordionItem({ question, answer, isOpen, onToggle, searchQuery }) {
  return (
    <div className="border-b border-line">
      <button
        className="w-full flex items-center justify-between py-5 px-1 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-ice focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-lg cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-ink font-medium pr-4 group-hover:text-ice transition-colors">
          {highlightMatch(question, searchQuery)}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-muted group-hover:text-ice transition-colors"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 px-1 text-muted leading-relaxed text-sm sm:text-base">
              {highlightMatch(answer, searchQuery)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion({ items, searchQuery = '' }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <StaggerContainer className="space-y-0">
      {items.map((item, index) => (
        <StaggerItem key={index}>
          <AccordionItem
            question={item.q}
            answer={item.a}
            isOpen={openIndex === index || (searchQuery.trim().length > 0 && index === 0)}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            searchQuery={searchQuery}
          />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
