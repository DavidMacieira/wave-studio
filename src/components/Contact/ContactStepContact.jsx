import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  MessageCircle,
  Share2,
} from 'lucide-react';

const contactMethods = [
  {
    id: 'whatsapp',
    title: 'WHATSAPP',
    description: 'The fastest way to talk to us.',
    icon: MessageCircle,
  },
  {
    id: 'instagram',
    title: 'INSTAGRAM',
    description: 'Start the conversation through DM.',
    icon: Share2,
  },
  {
    id: 'email',
    title: 'EMAIL',
    description: 'For something a little more detailed.',
    icon: Mail,
  },
];

function ContactStepContact({
  data,
  onChange,
  onNext,
  onBack,
}) {
  const canContinue =
    data.name.trim() !== '' &&
    data.contactMethod !== '' &&
    data.contact.trim() !== '';

  return (
    <motion.div
      className="contact-step-contact"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -35 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="contact-step__heading">
        <span className="contact-step__number">03</span>

        <div>
          <p>ALMOST THERE.</p>

          <h3>
            READY TO
            <span>MOVE?</span>
          </h3>
        </div>
      </div>

      <div className="contact-contact__body">
        <div className="contact-contact__fields">
          <label className="contact-field">
            <span>01 — YOUR NAME</span>

            <input
              type="text"
              value={data.name}
              onChange={(event) =>
                onChange({
                  name: event.target.value,
                })
              }
              placeholder="Your name"
              autoComplete="name"
            />
          </label>

          <label className="contact-field">
            <span>
              02 —{' '}
              {data.contactMethod === 'email'
                ? 'EMAIL'
                : data.contactMethod === 'instagram'
                  ? 'INSTAGRAM USERNAME'
                  : 'PHONE NUMBER'}
            </span>

            <input
              type={
                data.contactMethod === 'email'
                  ? 'email'
                  : 'text'
              }
              value={data.contact}
              onChange={(event) =>
                onChange({
                  contact: event.target.value,
                })
              }
              placeholder={
                data.contactMethod === 'email'
                  ? 'you@example.com'
                  : data.contactMethod === 'instagram'
                    ? '@yourusername'
                    : '+351 9XX XXX XXX'
              }
              autoComplete={
                data.contactMethod === 'email'
                  ? 'email'
                  : 'tel'
              }
            />
          </label>
        </div>

        <div className="contact-method">
          <span className="contact-method__label">
            03 — HOW SHOULD WE TALK?
          </span>

          <div className="contact-method__options">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const active =
                data.contactMethod === method.id;

              return (
                <motion.button
                  key={method.id}
                  type="button"
                  className={`contact-method-option ${
                    active
                      ? 'contact-method-option--active'
                      : ''
                  }`}
                  onClick={() =>
                    onChange({
                      contactMethod: method.id,
                      contact: '',
                    })
                  }
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                  />

                  <strong>{method.title}</strong>

                  <small>{method.description}</small>
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
          <span>SEND TO WAVE</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}

export default ContactStepContact;
