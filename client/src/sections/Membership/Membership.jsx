import React, { useState } from 'react';
import styles from './Membership.module.css';
import Button from '../../component/ui/Button'; 
import { MEMBERSHIP_CONTENT } from '../../constants';
import { Check, X, ArrowRight } from 'lucide-react';

const Membership = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); 

  return (
    <section className={styles.sectionContainer} id="membership">
      <div className={styles.contentWrapper}>
        
        {/* --- HEADER & TOGGLE --- */}
        <div className={styles.header}>
          <div className="text-center space-y-4">
            <span className={styles.label}>{MEMBERSHIP_CONTENT.sectionTitle}</span>
            <h2 className={styles.headline}>
              {MEMBERSHIP_CONTENT.headline} <span className={styles.italic}>{MEMBERSHIP_CONTENT.highlight}</span>
            </h2>
            <p className={styles.description}>{MEMBERSHIP_CONTENT.description}</p>
          </div>

          {/* Toggle Switch */}
          <div className={styles.toggleContainer}>
            <button 
              className={`${styles.toggleBtn} ${billingCycle === 'monthly' ? styles.active : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              {MEMBERSHIP_CONTENT.cycles.monthly}
            </button>
            <button 
              className={`${styles.toggleBtn} ${billingCycle === 'yearly' ? styles.active : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              {MEMBERSHIP_CONTENT.cycles.yearly}
            </button>
            {/* Sliding Pill Background */}
            <div className={`${styles.slider} ${billingCycle === 'yearly' ? 'translate-x-[100%]' : 'translate-x-0'}`}></div>
          </div>
        </div>

        {/* --- PRICING CARDS --- */}
        <div className={styles.cardsGrid}>
          {MEMBERSHIP_CONTENT.plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`${styles.card} ${plan.popular ? styles.popularCard : ''}`}
            >
              {/* Popular Tag */}
              {plan.popular && <div className={styles.popularTag}>Most Selected</div>}

              {/* Card Header */}
              <div className="space-y-2 mb-6">
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceBox}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>
                    {billingCycle === 'monthly' ? plan.price.monthly.replace('$','') : plan.price.yearly.replace('$','')}
                  </span>
                  <span className={styles.period}>/mo</span>
                </div>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>

              {/* Divider */}
              <div className={styles.divider}></div>

              {/* Features List */}
              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <Check size={16} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((item, i) => (
                  <li key={i} className={`${styles.featureItem} ${styles.disabled}`}>
                    <X size={16} className={styles.xIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-auto pt-8">
                <Button 
                  variant={plan.popular ? "primary" : "outline"} 
                  className="w-full justify-center"
                  icon={<ArrowRight size={16} />}
                >
                  {plan.cta}
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Membership;