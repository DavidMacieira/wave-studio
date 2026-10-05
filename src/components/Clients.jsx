import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Clients.css';

const clientTypes = [
  {
    number: '01',
    name: 'BARBERSHOP',
    category: 'Website',
  },
  {
    number: '02',
    name: 'GYM',
    category: 'Digital presence',
  },
  {
    number: '03',
    name: 'RESTAURANT',
    category: 'Digital experience',
  },
  {
    number: '04',
    name: 'LOCAL BUSINESS',
    category: 'Social media',
  },
];

function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="clients__background">
        <div className="clients__grid" />
        <div className="clients__glow clients__glow--one" />
        <div className="clients__glow clients__glow--two" />
      </div>

      <div className="clients__container">
        {/* HEADER */}
        <div className="clients__header">
          <motion.div
            className="clients__eyebrow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="clients__eyebrow-line" />
            <span>Who we work with</span>
          </motion.div>

          <motion.div
            className="clients__section-number"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>Clients</span>
            <span>04 / 06</span>
          </motion.div>
        </div>

        {/* INTRO */}
        <div className="clients__intro">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            BUILT FOR
            <span>REAL</span>
            <span>BUSINESS.</span>
          </motion.h2>

          <motion.div
            className="clients__intro-copy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p>
              From local businesses to growing brands, we create digital
              experiences that help businesses move forward.
            </p>

            <span className="clients__intro-note">
              Real people. Real businesses. Real work.
            </span>
          </motion.div>
        </div>

        {/* CLIENTS */}
        <div className="clients__list">
          {clientTypes.map((client, index) => (
            <motion.div
              className="clients__item"
              key={client.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <span className="clients__item-number">
                {client.number}
              </span>

              <div className="clients__item-main">
                <span className="clients__item-name">
                  {client.name}
                </span>

                <span className="clients__item-category">
                  {client.category}
                </span>
              </div>

              <div className="clients__item-arrow">
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.5}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* MARQUEE */}
        <div className="clients__marquee">
          <div className="clients__marquee-track">
            <span>LOCAL BRANDS</span>
            <i />
            <span>GROWING BUSINESSES</span>
            <i />
            <span>CREATIVE PROJECTS</span>
            <i />
            <span>DIGITAL EXPERIENCES</span>
            <i />

            <span>LOCAL BRANDS</span>
            <i />
            <span>GROWING BUSINESSES</span>
            <i />
            <span>CREATIVE PROJECTS</span>
            <i />
            <span>DIGITAL EXPERIENCES</span>
            <i />
          </div>
        </div>

        {/* BOTTOM */}
        <motion.div
          className="clients__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>Small businesses.</span>

          <div className="clients__bottom-line" />

          <span>Big ambitions.</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Clients;