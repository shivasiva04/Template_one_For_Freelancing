import React from 'react';
import styles from './Services.module.css';
import { SERVICES_CONTENT } from '../../constants';
import { ArrowUpRight, Dna } from 'lucide-react';

const Services = () => {
  return (
    <section className={styles.sectionContainer} id="protocols">
      
      {/* --- MOVING DNA BACKGROUND --- */}
      <div className={styles.dnaWrapper}>
        <Dna strokeWidth={0.5} className={styles.dnaIcon} />
      </div>

      {/* Header */}
      <div className={styles.headerWrapper}>
        <div>
          <span className={styles.titleSmall}>{SERVICES_CONTENT.sectionTitle}</span>
          <h2 className={styles.headline}>{SERVICES_CONTENT.headline}</h2>
        </div>
        <p className={styles.description}>
          {SERVICES_CONTENT.description}
        </p>
      </div>

      {/* Grid */}
      <div className={styles.cardsGrid}>
        {SERVICES_CONTENT.cards.map((card) => (
          <div key={card.id} className={`${styles.card} group`}>
            
            {/* Hover Gradient */}
            <div className={`${styles.cardGradient} ${card.gradient}`}></div>

            {/* Background Icon */}
            <card.icon className={styles.bgIcon} strokeWidth={0.8} />

            {/* Arrow Icon */}
            <div className={styles.iconBox}>
              <ArrowUpRight size={18} />
            </div>

            {/* Content */}
            <div className={styles.cardContent}>
              <span className={styles.cardSubtitle}>{card.subtitle}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;