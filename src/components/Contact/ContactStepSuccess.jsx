import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  RotateCcw,
} from 'lucide-react';

const serviceLabels = {
  website: 'Website',
  'social-media': 'Social Media',
  content: 'Content',
  'digital-experience': 'Digital Experience',
  'not-sure': 'A digital project',
};

const projectLabels = {
  'new-project': 'a new project',
  improve: 'improving an existing project',
  idea: 'finding the right idea',
  exploring: 'exploring what is possible',
};

function ContactStepSuccess({ data, onReset }) {
  const [revealed, setRevealed] = useState(false);

  const service = serviceLabels[data.service] || 'a project';

  const project =
    projectLabels[data.project] || 'a project';

  const message = useMemo(() => {
    const greeting = data.name
      ? `Olá WAVE! Sou ${data.name}`
      : 'Olá WAVE!';

    const business = data.business
      ? `, da ${data.business}.`
      : '.';

    return `${greeting}${business} Estou interessado em ${service.toLowerCase()} para o meu negócio. Estou a procurar ${project}. Gostava de falar convosco sobre o projeto.`;
  }, [
    data.name,
    data.business,
    service,
    project,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = '351936018970';

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="contact-step-success"
      initial={{
        opacity: 0,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="contact-success__wave">
        <motion.div
          className="contact-success__wave-inner"
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: revealed ? 1 : 0.5,
            opacity: revealed ? 1 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      <div className="contact-success__content">
        <motion.div
          className="contact-success__check"
          initial={{
            scale: 0,
            rotate: -45,
          }}
          animate={{
            scale: revealed ? 1 : 0,
            rotate: revealed ? 0 : -45,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            type: 'spring',
            stiffness: 180,
            damping: 14,
          }}
        >
          <Check size={22} />
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: revealed ? 1 : 0,
            y: revealed ? 0 : 15,
          }}
          transition={{
            delay: 0.35,
          }}
        >
          THANKS, {data.name?.toUpperCase() || 'THERE'}.
        </motion.p>

        <motion.h3
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: revealed ? 1 : 0,
            y: revealed ? 0 : 30,
          }}
          transition={{
            delay: 0.45,
            duration: 0.7,
          }}
        >
          YOUR WAVE
          <span>IS ON ITS WAY.</span>
        </motion.h3>

        <motion.div
          className="contact-success__summary"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: revealed ? 1 : 0,
            y: revealed ? 0 : 20,
          }}
          transition={{
            delay: 0.6,
            duration: 0.7,
          }}
        >
          <div>
            <span>PROJECT</span>
            <strong>{service}</strong>
          </div>

          <div>
            <span>GOAL</span>
            <strong>{project}</strong>
          </div>
        </motion.div>

        <motion.div
          className="contact-success__actions"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: revealed ? 1 : 0,
            y: revealed ? 0 : 20,
          }}
          transition={{
            delay: 0.75,
            duration: 0.7,
          }}
        >
          <button
            type="button"
            className="contact-success__whatsapp"
            onClick={handleWhatsApp}
          >
            <MessageCircle size={19} />

            <span>OPEN WHATSAPP</span>

            <ArrowUpRight size={18} />
          </button>

          <button
            type="button"
            className="contact-success__reset"
            onClick={onReset}
          >
            <RotateCcw size={15} />

            START AGAIN
          </button>
        </motion.div>
      </div>

      <motion.div
        className="contact-success__message"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: revealed ? 1 : 0,
        }}
        transition={{
          delay: 0.9,
        }}
      >
        <span>MESSAGE READY</span>

        <p>{message}</p>
      </motion.div>
    </motion.div>
  );
}

export default ContactStepSuccess;