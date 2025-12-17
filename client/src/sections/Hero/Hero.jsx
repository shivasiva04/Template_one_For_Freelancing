import React from 'react';
import styles from './Hero.module.css';
import Navbar from "../../component/layout/navbar/Navbar"; 
import Button from "../../component/ui/Button";
import { HERO_CONTENT, STATS, ASSETS } from "../../constants";
import { ArrowRight, ChevronsDown } from 'lucide-react'; 

const Hero = () => {

  // Function to handle smooth scrolling
  const handleScrollDown = () => {
  
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroSection}>
      
      {/* Background Image - Visible in BOTH modes */}
      <div 
        className={styles.bgLayer}
        style={{
          backgroundImage: `url(${ASSETS.bgImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content Grid */}
      <div className={styles.contentWrapper}>
        
        {/* Left Column: Text */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-20 md:pt-0">
          
          {/* Tagline */}
          <div className={styles.tagBox}>
            <HERO_CONTENT.tagIcon size={14} className={styles.tagIcon} />
            <span className={styles.tagText}>
              {HERO_CONTENT.tagline}
            </span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            {HERO_CONTENT.headline.start} <br />
            <span className={styles.italicText}>
              {HERO_CONTENT.headline.highlight}
            </span>
          </h1>

          {/* Subtext */}
          <p className={styles.subtext}>
            {HERO_CONTENT.subtext}
          </p>

          {/* Primary CTA */}
          <div className="pt-2">
            <Button variant="primary" className="h-12 px-6 text-base" icon={<ArrowRight size={18} />}>
              {HERO_CONTENT.ctaPrimary}
            </Button>
          </div>
        </div>

        {/* Right Column: Stats */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:items-end justify-end pb-12 md:pb-20 h-full">
          <div className="flex flex-col gap-6">
             {STATS.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className="flex items-center gap-4">
                  <span className={styles.statValue}>
                    {stat.value}
                  </span>
                  <div className={styles.statLine}></div>
                </div>
                <p className={styles.statDesc}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- SCROLL BUTTON --- */}
      <button 
        onClick={handleScrollDown} 
        className={styles.scrollBtn}
        aria-label="Scroll to next section"
      >
        <ChevronsDown size={32} strokeWidth={1.5} />
      </button>

    </section>
  );
};

export default Hero;