import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, MoveRight } from 'lucide-react';
import { useRef } from 'react';
import './Problem.css';

function ProblemWave() {
  return (
    <svg
      className="problem__wave"
      viewBox="0 0 1600 500"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 290C190 170 350 170 540 275C730 380 860 430 1050 335C1250 235 1410 135 1600 210V500H0Z" />
    </svg>
  );
}

function Problem() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const waveX = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const titleY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const numberY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="problem" id="problem">
      <div className="problem__background">
        <div className="problem__noise" />
        <div className="problem__grid" />

        <motion.div
          className="problem__wave-wrapper"
          style={{ x: waveX }}
        >
          <ProblemWave />
        </motion.div>

        <div className="problem__glow problem__glow--one" />
        <div className="problem__glow problem__glow--two" />
      </div>

      <div className="problem__container">
        <div className="problem__top">
          <motion.div
            className="problem__label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <span className="problem__label-line" />
            <span>The problem</span>
          </motion.div>

          <motion.div
            className="problem__number"
            style={{ y: numberY }}
          >
            02 / 06
          </motion.div>
        </div>

        <div className="problem__main">
          <motion.div
            className="problem__title-wrapper"
            style={{ y: titleY }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              YOUR BUSINESS
              <span>SHOULDN'T</span>
              <span>STAY STILL.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="problem__statement"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p>
              Your business is moving.
              <br />
              Your digital presence should too.
            </p>

            <div className="problem__statement-line" />

            <span>
              Strategy, design and technology working together
              to turn attention into action.
            </span>
          </motion.div>
        </div>

        <div className="problem__bottom">
          <motion.div
            className="problem__scroll-mark"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ArrowDownRight size={20} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            className="problem__bottom-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span>From presence</span>
            <MoveRight size={16} strokeWidth={1.5} />
            <span>to impact</span>
          </motion.div>

          <motion.div
            className="problem__index"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span>WAVE STUDIO</span>
            <span>ATLANTIC / PT</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Problem;