import React from 'react';
import styles from './Process.module.css';
import { PROCESS_CONTENT } from "../../constants";

const Process = () => {
  return (
    <section className={styles.sectionContainer} id="process">
      <div className={styles.contentWrapper}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.label}>{PROCESS_CONTENT.sectionTitle}</span>
          <h2 className={styles.headline}>
            {PROCESS_CONTENT.headline} <span className={styles.italic}>{PROCESS_CONTENT.highlight}</span>
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className={styles.timelineGrid}>
          {/* Connector Line (Desktop Only) */}
          <div className={styles.connectorLine}></div>

          {PROCESS_CONTENT.steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              
              {/* Number & Icon */}
              <div className={styles.markerWrapper}>
                <div className={styles.markerCircle}>
                  {/* Note: Ensure 'step.icon' is a valid component from constants */}
                  <step.icon size={24} strokeWidth={1.5} />
                </div>
                <span className={styles.stepNumber}>{step.id}</span>
              </div>

              {/* Text */}
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;