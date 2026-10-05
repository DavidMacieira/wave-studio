import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Share2,
} from 'lucide-react';
import ContactExperience from './ContactExperience';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__background">
        <div className="contact__grid" />
        <div className="contact__orb contact__orb--one" />
        <div className="contact__orb contact__orb--two" />

        <motion.div
          className="contact__wave contact__wave--one"
          animate={{
            x: ['-4%', '4%', '-4%'],
            scaleY: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            viewBox="0 0 1600 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 330C180 220 330 210 520 300C720 395 850 450 1060 330C1240 225 1390 190 1600 260V600H0Z" />
          </svg>
        </motion.div>

        <motion.div
          className="contact__wave contact__wave--two"
          animate={{
            x: ['5%', '-5%', '5%'],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            viewBox="0 0 1600 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 400C220 300 380 300 580 360C790 425 920 470 1120 350C1310 235 1430 250 1600 300V600H0Z" />
          </svg>
        </motion.div>
      </div>

      <div className="contact__container">
        <div className="contact__top">
          <div className="contact__eyebrow">
            <span className="contact__eyebrow-line" />
            <span>Let's talk</span>
          </div>

          <div className="contact__section-number">
            <span>Contact</span>
            <span>06 / 06</span>
          </div>
        </div>

        <div className="contact__hero">
          <motion.div
            className="contact__hero-copy"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="contact__mini-label">
              HAVE SOMETHING IN MIND?
            </p>

            <h2>
              HAVE AN
              <span>IDEA?</span>
            </h2>

            <h3>LET'S MOVE IT.</h3>
          </motion.div>

          <motion.div
            className="contact__hero-side"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <p>
              Tell us what you're working on.
              We'll figure out the rest together.
            </p>

            <motion.button
              type="button"
              className="contact__start"
              onClick={() => {
                document
                  .querySelector('.contact-experience')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              }}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <span>START A CONVERSATION</span>

              <motion.span
                className="contact__start-icon"
                variants={{
                  hover: {
                    x: 5,
                    y: -5,
                  },
                }}
              >
                <ArrowUpRight size={22} />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        <ContactExperience />

        <div className="contact__footer">
          <div className="contact__footer-brand">
            <span>WAVE®</span>
            <small>DIGITAL STUDIO</small>
          </div>

          <div className="contact__footer-location">
            <span>PÓVOA DE VARZIM</span>
            <span>PORTUGAL · 2026</span>
          </div>

          <div className="contact__footer-links">
            <a href="#instagram">
              <Share2 size={17} />
              <span>Instagram</span>
            </a>

            <a href="#email">
              <Mail size={17} />
              <span>Email</span>
            </a>

            <a href="#whatsapp">
              <MessageCircle size={17} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="contact__bottom">
          <span>BUILD SOMETHING THAT MOVES.</span>
          <ArrowDownRight size={20} strokeWidth={1.5} />
          <span>WAVE STUDIO®</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
