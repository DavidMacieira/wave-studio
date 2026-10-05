import { motion } from 'framer-motion';
import {
  Camera,
  Globe2,
  HelpCircle,
  Share2,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    id: 'website',
    number: '01',
    title: 'WEBSITE',
    description: 'A digital home for your business.',
    icon: Globe2,
  },
  {
    id: 'social-media',
    number: '02',
    title: 'SOCIAL MEDIA',
    description: 'A stronger presence where people scroll.',
    icon: Share2,
  },
  {
    id: 'content',
    number: '03',
    title: 'CONTENT',
    description: 'Photography, video and visual content.',
    icon: Camera,
  },
  {
    id: 'digital-experience',
    number: '04',
    title: 'DIGITAL EXPERIENCE',
    description: 'Something different. Something custom.',
    icon: Sparkles,
  },
  {
    id: 'not-sure',
    number: '05',
    title: "I'M NOT SURE YET",
    description: "That's fine. We'll figure it out together.",
    icon: HelpCircle,
  },
];

function ContactStepService({ value, onChange }) {
  return (
    <motion.div
      className="contact-step-service"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -35 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="contact-step__heading">
        <span className="contact-step__number">01</span>

        <div>
          <p>WHAT DO YOU NEED?</p>

          <h3>
            WHAT ARE
            <span>WE BUILDING?</span>
          </h3>
        </div>
      </div>

      <div className="contact-step-service__list">
        {services.map((service) => {
          const Icon = service.icon;
          const isActive = value === service.id;

          return (
            <motion.button
              key={service.id}
              type="button"
              className={`contact-service-option ${
                isActive
                  ? 'contact-service-option--active'
                  : ''
              }`}
              onClick={() => onChange(service.id)}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="contact-service-option__left">
                <span className="contact-service-option__number">
                  {service.number}
                </span>

                <div className="contact-service-option__icon">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <div className="contact-service-option__text">
                  <strong>{service.title}</strong>
                  <span>{service.description}</span>
                </div>
              </div>

              <motion.span
                className="contact-service-option__arrow"
                animate={{
                  x: isActive ? 5 : 0,
                  opacity: isActive ? 1 : 0.35,
                }}
              >
                ↗
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default ContactStepService;