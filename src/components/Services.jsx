import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Camera,
  Globe2,
  Share2,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import './Services.css';

const services = [
  {
    id: '01',
    title: 'Websites',
    shortTitle: 'Web',
    description:
      'Websites designed to make your business look credible, modern and impossible to ignore.',
    detail:
      'From landing pages to complete business websites, we combine design, development and performance.',
    icon: Globe2,
    accent: 'blue',
  },
  {
    id: '02',
    title: 'Social Media',
    shortTitle: 'Social',
    description:
      'A consistent social presence that gives your brand a voice people actually remember.',
    detail:
      'Content planning, visual identity, posts, stories and strategy built around your business.',
    icon: Share2,
    accent: 'light',
  },
  {
    id: '03',
    title: 'Content',
    shortTitle: 'Content',
    description:
      'Photography and video content created to show your business at its best.',
    detail:
      'Visual content for websites, social media, campaigns and everything your brand needs to communicate.',
    icon: Camera,
    accent: 'dark',
  },
  {
    id: '04',
    title: 'Digital Experiences',
    shortTitle: 'Digital',
    description:
      'Digital solutions that turn simple ideas into experiences people remember.',
    detail:
      'QR menus, link-in-bio pages, interactive experiences and custom digital solutions.',
    icon: Sparkles,
    accent: 'wave',
  },
];

function ServiceVisual({ service }) {
  const Icon = service.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.id}
        className={`services__visual services__visual--${service.accent}`}
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.04, y: -10 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="services__visual-grid" />

        <div className="services__visual-circle services__visual-circle--one" />
        <div className="services__visual-circle services__visual-circle--two" />

        <div className="services__visual-content">
          <div className="services__visual-icon">
            <Icon size={28} strokeWidth={1.5} />
          </div>

          <span className="services__visual-number">
            {service.id}
          </span>

          <div className="services__visual-title">
            {service.shortTitle}
          </div>
        </div>

        <div className="services__visual-wave">
          <svg
            viewBox="0 0 600 300"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 170C90 95 160 95 240 150C330 215 385 240 470 185C520 152 555 125 600 140V300H0Z" />
          </svg>
        </div>

        <div className="services__visual-corner">
          <ArrowUpRight size={20} strokeWidth={1.5} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__header">
          <motion.div
            className="services__eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span className="services__eyebrow-line" />
            <span>What we do</span>
          </motion.div>

          <motion.div
            className="services__header-right"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span>Services</span>
            <span>03 / 06</span>
          </motion.div>
        </div>

        <div className="services__intro">
          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            WE BUILD
            <span>THE DIGITAL</span>
            <span>WAVE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Everything your business needs to build a stronger
            digital presence — without losing what makes it yours.
          </motion.p>
        </div>

        <div className="services__content">
          <div className="services__list">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService.id === service.id;

              return (
                <motion.button
                  type="button"
                  key={service.id}
                  className={`services__item ${
                    isActive ? 'services__item--active' : ''
                  }`}
                  onMouseEnter={() => setActiveService(service)}
                  onFocus={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="services__item-number">
                    {service.id}
                  </span>

                  <span className="services__item-main">
                    <span className="services__item-title">
                      {service.title}
                    </span>

                    <span className="services__item-description">
                      {service.description}
                    </span>
                  </span>

                  <span className="services__item-icon">
                    <Icon size={19} strokeWidth={1.7} />
                  </span>

                  <span className="services__item-arrow">
                    <ArrowUpRight size={20} strokeWidth={1.7} />
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="services__preview">
            <ServiceVisual service={activeService} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className="services__detail"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <span>{activeService.id}</span>
                <p>{activeService.detail}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="services__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>One studio.</span>
          <span>Multiple ways to move forward.</span>
          <div className="services__footer-line" />
        </motion.div>
      </div>
    </section>
  );
}

export default Services;