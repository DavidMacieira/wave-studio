import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactStepService from './ContactStepService';
import ContactStepDetails from './ContactStepDetails';
import ContactStepContact from './ContactStepContact';
import ContactStepSuccess from './ContactStepSuccess';
import './ContactExperience.css';

function ContactExperience() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    service: '',
    business: '',
    project: '',
    contactMethod: '',
    name: '',
    contact: '',
  });

  const updateFormData = (data) => {
    setFormData((current) => ({
      ...current,
      ...data,
    }));
  };

  const nextStep = () => {
    setStep((current) => Math.min(current + 1, 4));
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  const resetExperience = () => {
    setStep(1);

    setFormData({
      service: '',
      business: '',
      project: '',
      contactMethod: '',
      name: '',
      contact: '',
    });
  };

  return (
    <div className="contact-experience">
      <div className="contact-experience__header">
        <div className="contact-experience__title">
          <span>START HERE</span>
          <strong>LET'S BUILD.</strong>
        </div>

        <div className="contact-experience__progress">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`contact-experience__progress-item ${
                step >= item
                  ? 'contact-experience__progress-item--active'
                  : ''
              }`}
            >
              <span>0{item}</span>

              <div className="contact-experience__progress-line" />
            </div>
          ))}
        </div>
      </div>

      <div className="contact-experience__content">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <ContactStepService
              key="service"
              value={formData.service}
              onChange={(service) => {
                updateFormData({ service });
                setTimeout(nextStep, 350);
              }}
            />
          )}

          {step === 2 && (
            <ContactStepDetails
              key="details"
              data={formData}
              onChange={updateFormData}
              onNext={nextStep}
              onBack={previousStep}
            />
          )}

          {step === 3 && (
            <ContactStepContact
              key="contact"
              data={formData}
              onChange={updateFormData}
              onNext={nextStep}
              onBack={previousStep}
            />
          )}

          {step === 4 && (
            <ContactStepSuccess
              key="success"
              data={formData}
              onReset={resetExperience}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="contact-experience__footer">
        <span>WAVE STUDIO®</span>

        <span>
          {step === 1 && 'WHAT DO YOU NEED?'}
          {step === 2 && 'TELL US ABOUT IT.'}
          {step === 3 && 'READY TO MOVE?'}
          {step === 4 && 'YOUR WAVE IS MOVING.'}
        </span>
      </div>
    </div>
  );
}

export default ContactExperience;