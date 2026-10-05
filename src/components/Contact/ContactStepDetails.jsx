import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projectTypes = [
  {
    id: 'new-project',
    title: 'NEW PROJECT',
    description: 'I want to build something from scratch.',
  },
  {
    id: 'improve',
    title: 'IMPROVE WHAT I HAVE',
    description: 'I already have something that needs a refresh.',
  },
  {
    id: 'idea',
    title: 'I NEED AN IDEA',
    description: 'I know I need something, but not exactly what.',
  },
  {
    id: 'exploring',
    title: 'JUST EXPLORING',
    description: 'I want to see what could be possible.',
  },
];

function ContactStepDetails({
  data,
  onChange,
  onNext,
  onBack,
}) {
  const canContinue =
    data.business.trim() !== '' &&
    data.project !== '';

  return (
    <motion.div
      className="contact-step-details"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -35 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="contact-step__heading">
        <span className="contact-step__number">02</span>

        <div>
          <p>TELL US ABOUT IT.</p>

          <h3>
            WHAT'S
            <span>THE IDEA?</span>
          </h3>
        </div>
      </div>

      <div className="contact-details__body">
        <label className="contact-field">
          <span>01 — BUSINESS / BRAND</span>

          <input
            type="text"
            value={data.business}
            onChange={(event) =>
              onChange({
                business: event.target.value,
              })
            }
            placeholder="Your business name"
            autoComplete="organization"
          />
        </label>

        <div className="contact-project">
          <span className="contact-project__label">
            02 — WHAT ARE YOU LOOKING FOR?
          </span>

          <div className="contact-project__options">
            {projectTypes.map((project) => {
              const active = data.project === project.id;

              return (
                <motion.button
                  key={project.id}
                  type="button"
                  className={`contact-project-option ${
                    active
                      ? 'contact-project-option--active'
                      : ''
                  }`}
                  onClick={() =>
                    onChange({
                      project: project.id,
                    })
                  }
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="contact-project-option__radio">
                    {active ? '×' : ''}
                  </span>

                  <span className="contact-project-option__content">
                    <strong>{project.title}</strong>
                    <small>{project.description}</small>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="contact-step-actions">
        <button
          type="button"
          className="contact-step-actions__back"
          onClick={onBack}
        >
          <ArrowLeft size={17} />
          <span>BACK</span>
        </button>

        <button
          type="button"
          className="contact-step-actions__next"
          onClick={onNext}
          disabled={!canContinue}
        >
          <span>NEXT</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}

export default ContactStepDetails;