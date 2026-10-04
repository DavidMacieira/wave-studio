import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import './Hero.css';

function HeroWave({ className = '' }) {
  return (
    <svg
      className={`hero__wave ${className}`}
      viewBox="0 0 1600 700"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 300C180 180 340 170 520 270C720 380 830 470 1040 390C1240 315 1390 150 1600 220V700H0Z"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__background">
        <div className="hero__grid" />

        <motion.div
          className="hero__wave-layer hero__wave-layer--back"
          animate={{
            x: [0, -35, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <HeroWave />
        </motion.div>

        <motion.div
          className="hero__wave-layer hero__wave-layer--middle"
          animate={{
            x: [0, 45, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <HeroWave />
        </motion.div>

        <motion.div
          className="hero__wave-layer hero__wave-layer--front"
          animate={{
            x: [0, -25, 0],
            y: [0, 7, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <HeroWave />
        </motion.div>

        <div className="hero__orb hero__orb--one" />
        <div className="hero__orb hero__orb--two" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <motion.div
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="hero__eyebrow-line" />
            <span>Digital studio · Póvoa de Varzim</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
          >
            DIGITAL
            <span>THAT MOVES.</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Websites, social media and digital experiences built to make
            businesses move forward.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a href="#projects" className="hero__button hero__button--primary">
              <span>See our work</span>
              <ArrowUpRight size={17} strokeWidth={2} />
            </a>

            <a href="#contact" className="hero__button hero__button--secondary">
              Let's talk
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__side"
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <span className="hero__side-number">01</span>

          <div className="hero__side-line" />

          <span className="hero__side-text">
            Ride the
            <br />
            digital wave.
          </span>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span>Scroll to explore</span>
        <ArrowDown size={15} strokeWidth={1.8} />
      </motion.a>

      <div className="hero__bottom-fade" />
    </section>
  );
}

export default Hero;