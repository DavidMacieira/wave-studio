import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects';
import './ProjectDetails.css';

function PhoneMockup({ image, alt }) {
  return (
    <div className="project-phone">
      <div className="project-phone__frame">
        <div className="project-phone__button project-phone__button--left" />
        <div className="project-phone__button project-phone__button--right" />

        <div className="project-phone__screen">
          <div className="project-phone__island" />

          {image ? (
            <img src={image} alt={alt} />
          ) : (
            <div className="project-phone__empty">
              <span>Mobile</span>
              <small>Screenshot</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LaptopMockup({ image, alt }) {
  return (
    <div className="project-laptop">
      <div className="project-laptop__screen">
        <div className="project-laptop__camera" />

        <div className="project-laptop__display">
          <div className="project-laptop__bar">
            <span />
            <span />
            <span />

            <div className="project-laptop__address">
              <span />
            </div>
          </div>

          {image ? (
            <img src={image} alt={alt} />
          ) : (
            <div className="project-laptop__empty">
              <span>Desktop</span>
              <small>Screenshot</small>
            </div>
          )}
        </div>
      </div>

      <div className="project-laptop__base">
        <div className="project-laptop__hinge" />
        <div className="project-laptop__notch" />
      </div>
    </div>
  );
}

function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="project-not-found">
        <span>404</span>
        <h1>Projeto não encontrado.</h1>
        <Link to="/">
          <ArrowLeft size={18} />
          Voltar ao início
        </Link>
      </main>
    );
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const mobileImage = project.images?.[0];
  const desktopImage = project.images?.[1];
  const galleryImages = project.images?.slice(2) || [];

  return (
    <main className="project-page">
      {/* HEADER */}
      <header className="project-header">
        <Link to="/" className="project-back">
          <ArrowLeft size={17} />
          <span>Voltar</span>
        </Link>

        <div className="project-header__info">
          <span className="project-header__number">
            {project.number}
          </span>

          <div>
            <p>{project.category}</p>
            <h1>{project.name}</h1>
          </div>
        </div>

        <span className="project-header__year">
          {project.year}
        </span>
      </header>

      <section className="project-intro" aria-labelledby="project-intro-title">
        <div className="project-intro__copy">
          <span className="project-intro__eyebrow">Sobre o projeto</span>
          <h2 id="project-intro-title">{project.description}</h2>
        </div>

        <ul className="project-intro__services" aria-label="Serviços">
          {project.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      {/* MOBILE */}
      <section className="project-mobile">
        <div className="project-mobile__label">
          <span>01</span>
          <span>Mobile experience</span>
        </div>

        <PhoneMockup
          image={mobileImage}
          alt={`${project.name} versão mobile`}
        />
      </section>

      {/* DESKTOP */}
      <section className="project-desktop">
        <div className="project-desktop__heading">
          <span>02</span>
          <h2>Desktop experience</h2>
        </div>

        <LaptopMockup
          image={desktopImage}
          alt={`${project.name} versão desktop`}
        />
      </section>

      {/* GALLERY */}
      {galleryImages.length > 0 && (
        <section className="project-gallery">
          <div className="project-gallery__heading">
            <span>03</span>
            <h2>Detalhes do projeto</h2>
          </div>

          {galleryImages.map((image, index) => (
            <div className="project-gallery__item" key={image}>
              <img
                src={image}
                alt={`${project.name} screenshot ${index + 3}`}
              />
            </div>
          ))}
        </section>
      )}

      {/* EMPTY GALLERY / EXTRA SCREENSHOTS */}
      {galleryImages.length === 0 && (
        <section className="project-gallery project-gallery--empty">
          <div className="project-gallery__heading">
            <span>03</span>
            <h2>Detalhes do projeto</h2>
          </div>

          <div className="project-gallery__placeholder">
            <p>Mais do projeto</p>
          </div>
        </section>
      )}

      {/* FOOTER ACTIONS */}
      <section className="project-footer">
        <div className="project-footer__links">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="project-footer__link"
            >
              <span>Visitar website</span>
              <ArrowUpRight size={20} />
            </a>
          )}

          {project.instagram && (
            <a
              href={project.instagram}
              target="_blank"
              rel="noreferrer"
              className="project-footer__link"
            >
              <span>Ver Instagram</span>
              <ExternalLink size={19} />
            </a>
          )}
        </div>

        <Link
          to={`/projects/${nextProject.slug}`}
          className="project-next"
        >
          <div>
            <span>Próximo projeto</span>
            <h2>{nextProject.name}</h2>
          </div>

          <div className="project-next__arrow">
            <ArrowRight size={28} />
          </div>
        </Link>
      </section>
    </main>
  );
}

export default ProjectDetails;  