import React, { useState } from 'react';
import styles from './Authority.module.css';
import { AUTHORITY_CONTENT } from '../../constants';
import { ArrowUpRight, Plus, Activity } from 'lucide-react';

const Authority = () => {
  const [activeMember, setActiveMember] = useState(0); // Index of active doctor

  return (
    <section className={styles.sectionContainer} id="therapies">
      <div className={styles.contentWrapper}>
        
        {/*THE ARCHITECTS Takes up the top ~50% of the screen */}
        <div className={styles.zoneHeader}>
          <span className={styles.label}>{AUTHORITY_CONTENT.sectionTitle}</span>
          <h2 className={styles.headline}>
            {AUTHORITY_CONTENT.headline} <span className={styles.italic}>{AUTHORITY_CONTENT.highlight}</span>
          </h2>
        </div>

        <div className={styles.teamAccordion}>
          {AUTHORITY_CONTENT.team.map((member, index) => (
            <div 
              key={index}
              className={`${styles.teamCard} ${activeMember === index ? styles.active : ''}`}
              onMouseEnter={() => setActiveMember(index)}
              // For mobile touch interaction
              onClick={() => setActiveMember(index)} 
            >
              {/* Background Image */}
              <div 
                className={styles.bgImage}
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className={styles.overlay}></div>

              {/* Inactive State: Vertical Text */}
              <div className={styles.inactiveContent}>
                <span className={styles.verticalName}>{member.name}</span>
                <span className={styles.verticalNum}>{member.id}</span>
              </div>

              {/* Active State: Full Details */}
              <div className={styles.activeContent}>
                <div className={styles.memberInfo}>
                  <div className={styles.credentialsBox}>
                    <span className={styles.credentials}>{member.credentials}</span>
                  </div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberSpecialty}>{member.specialty}</p>
                  
                  {/* Faux Signature */}
                  <div className={styles.signature}>
                    {member.signature}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* THE RESULTS (CAROUSEL) */}
        <div className={styles.resultsZone}>
          <div className={styles.zoneHeader}>
            <h2 className={styles.headline}>
              {AUTHORITY_CONTENT.resultsHeadline} <span className={styles.italic}>{AUTHORITY_CONTENT.resultsHighlight}</span>
            </h2>
          </div>

          <div className={styles.resultsCarousel}>
            {AUTHORITY_CONTENT.results.map((item, index) => (
              <div key={index} className={styles.resultCard}>
                
                {/* Header: ID & Icon */}
                <div className="flex justify-between items-start mb-6">
                  <span className={styles.caseId}>{item.id}</span>
                  <div className={styles.iconBox}>
                    <Activity size={16} />
                  </div>
                </div>

                {/* Main Metric */}
                <div className="space-y-1 mb-6">
                  <p className={styles.metricLabel}>{item.metric}</p>
                  <h3 className={styles.metricValue}>{item.change}</h3>
                  <p className={styles.timeframe}>in {item.timeframe}</p>
                </div>

                {/* Mini Graph (CSS) */}
                <div className={styles.miniGraph}>
                  {item.graph.map((val, i) => (
                    <div 
                      key={i} 
                      className={styles.graphBar} 
                      style={{ height: `${val}%` }}
                    ></div>
                  ))}
                </div>

                {/* Note */}
                <div className={styles.divider}></div>
                <p className={styles.note}>"{item.note}"</p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Authority;