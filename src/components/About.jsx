import { motion } from 'framer-motion';
import davidImage from '../assets/images/David.jpeg';
import {
  ArrowUpRight,
  Camera,
  Code2,
  Database,
  Video,
} from 'lucide-react';
import './About.css';

const people = [
  {
    name: 'David',
    role: 'Development · Backend · Photography',
    description:
      'More focused on the technical side of things, from building websites and working with backend systems to creating the visual content that brings them to life.',
    image: davidImage,
    tags: ['Development', 'Backend', 'Photography'],
  },
  {
    name: 'Olímpio',
    role: 'Development · Social Media · Content',
    description:
      'With a stronger focus on visual content, social media and video, while also working alongside David on the development side of every project.',
    image: '/src/assets/olimpio.jpg',
    tags: ['Development', 'Social Media', 'Content'],
  },
];

const capabilities = [
  {
    icon: Code2,
    label: 'CODE',
  },
  {
    icon: Camera,
    label: 'CAMERA',
  },
  {
    icon: Video,
    label: 'CONTENT',
  },
  {
    icon: Database,
    label: 'DIGITAL',
  },
];

function PersonCard({ person, index }) {
  return (
    <motion.article
      className="about__person"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="about__person-image">
        <img
          src={person.image}
          alt={`${person.name} — WAVE Studio`}
        />

        <div className="about__person-image-overlay" />

        <span className="about__person-index">
          0{index + 1}
        </span>

        <div className="about__person-image-arrow">
          <ArrowUpRight size={22} strokeWidth={1.5} />
        </div>
      </div>

      <div className="about__person-info">
        <div className="about__person-heading">
          <div>
            <span className="about__person-label">
              WAVE STUDIO
            </span>

            <h3>{person.name}</h3>
          </div>

          <span className="about__person-number">
            0{index + 1}
          </span>
        </div>

        <p className="about__person-role">
          {person.role}
        </p>

        <p className="about__person-description">
          {person.description}
        </p>

        <div className="about__person-tags">
          {person.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about__background">
        <div className="about__grid" />

        <div className="about__orb about__orb--one" />
        <div className="about__orb about__orb--two" />

        <div className="about__wave">
          <svg
            viewBox="0 0 1600 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 320C180 220 320 210 500 290C700 380 850 430 1060 310C1240 205 1370 170 1600 240V500H0Z" />
          </svg>
        </div>
      </div>

      <div className="about__container">
        <div className="about__header">
          <motion.div
            className="about__eyebrow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about__eyebrow-line" />
            <span>Who we are</span>
          </motion.div>

          <motion.div
            className="about__section-number"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>About</span>
            <span>05 / 06</span>
          </motion.div>
        </div>

        <div className="about__intro">
          <motion.h2
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            TWO PEOPLE.
            <span>ONE WAVE.</span>
          </motion.h2>

          <motion.div
            className="about__intro-copy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <p>
              WAVE is a small studio built by two people with
              different strengths and the same direction.
            </p>

            <p>
              We build digital experiences, create content and
              work closely with the businesses behind them.
            </p>
          </motion.div>
        </div>

        <div className="about__people">
          {people.map((person, index) => (
            <PersonCard
              key={person.name}
              person={person}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="about__statement"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about__statement-top">
            <span>Different strengths.</span>
            <span>Same direction.</span>
          </div>

          <div className="about__statement-main">
            <span>FROM THE CODE</span>
            <span>TO THE CONTENT.</span>
          </div>

          <p>
            We don't just build what people see online.
            We can also create what gets them there.
          </p>
        </motion.div>

        <motion.div
          className="about__capabilities"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="about__capability"
                key={item.label}
              >
                <Icon size={19} strokeWidth={1.5} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>

        <div className="about__team-photo">
          <div className="about__team-photo-placeholder">
            <span>WAVE STUDIO</span>
            <strong>DAVID × OLÍMPIO</strong>
            <small>TEAM PHOTO</small>
          </div>

          <div className="about__team-photo-caption">
            <span>THE PEOPLE BEHIND THE WAVE</span>
            <span>PT · 2026</span>
          </div>
        </div>

        <motion.div
          className="about__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>Small studio.</span>

          <div className="about__bottom-line" />

          <span>Big ambition.</span>
        </motion.div>
      </div>
    </section>
  );
}

export default About;