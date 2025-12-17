import React, { useRef, useState } from 'react';
import styles from './Technology.module.css';
import { TECH_CONTENT } from '../../constants';
import { Wifi, Battery, Bell, Zap, Rotate3d, Signal } from 'lucide-react';

const Technology = () => {
  const systemRef = useRef(null);
  const [is360Active, setIs360Active] = useState(false);

  // --- MOUSE MOVE HANDLER ---
  const handleMouseMove = (e) => {
    if (!is360Active || !systemRef.current) return;

  
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) - 0.5;
    const y = (e.clientY / innerHeight) - 0.5;

  
    const rotateX = y * -30; 
    const rotateY = x * 60; 

    systemRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  // --- TOGGLE HANDLER ---
  const toggle360Mode = () => {
    const newState = !is360Active;
    setIs360Active(newState);

    if (!newState && systemRef.current) {
      // Reset to default on disable
      systemRef.current.style.transform = '';
    }
  };

  return (
    <section 
      className={styles.sectionContainer} 
      id="performance"
      onMouseMove={handleMouseMove}
    >
      <div className={styles.contentWrapper}>
        
        {/* --- VISUAL COLUMN (Now Order-1 on Mobile via CSS) --- */}
        <div className={styles.visualColumn}>
          
          <div className={styles.glowEffect}></div>

          {/* CHARGING SYSTEM WRAPPER */}
          <div 
            className={styles.chargingSystem} 
            ref={systemRef}
            data-interactive={is360Active}
          >
            
            {/* 1. THE POWER BANK */}
            <div className={styles.powerBank}>
              <div className={styles.pbIndicators}>
                <div className={styles.pbLight}></div>
                <div className={styles.pbLight}></div>
                <div className={styles.pbLight}></div>
                <div className={`${styles.pbLight} opacity-50`}></div>
              </div>
              <Zap size={20} className={styles.chargingIcon} />
              <div className={styles.outputPort}></div>
            </div>

            {/* 2. THE CABLE */}
            <svg className={styles.cableSvg} viewBox="0 0 250 150" preserveAspectRatio="none">
              <path 
                d="M 20,30 C 100,30 120,140 230,140" 
                className={styles.cableGlow} 
              />
              <path 
                d="M 20,30 C 100,30 120,140 230,140" 
                className={styles.cableWire} 
              />
            </svg>

            {/* 3. PHONE FRAME */}
            <div className={styles.phoneFrame}>
              
              {/* Status Bar */}
              <div className={styles.statusBar}>
                <span className="text-[10px] font-bold">9:41</span>
                <div className="flex gap-2 items-center">
                  <Signal size={10} />
                  <Wifi size={10} />
                  <div className={styles.chargingBolt}>
                    <Zap size={8} fill="currentColor" />
                  </div>
                  <Battery size={12} />
                </div>
              </div>

              {/* App Header */}
              <div className={styles.appHeader}>
                <div>
                  <span className={styles.greeting}>Welcome Back</span>
                  <h3 className={styles.userName}>{TECH_CONTENT.appScreen.user}</h3>
                </div>
                <button className={styles.notificationBtn}>
                  <Bell size={16} />
                  <div className={styles.redDot}></div>
                </button>
              </div>

              {/* Score Card */}
              <div className={styles.scoreCard}>
                <div className={styles.scoreCircle}>
                  <span className={styles.scoreValue}>{TECH_CONTENT.appScreen.score}</span>
                  <span className={styles.scoreLabel}>AQI</span>
                </div>
                <div className="flex-1">
                  <h4 className={styles.cardTitle}>{TECH_CONTENT.appScreen.scoreLabel}</h4>
                  <p className={styles.cardSub}>Optimization sequence active.</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className={styles.statsGrid}>
                {TECH_CONTENT.appScreen.stats.map((stat, i) => (
                  <div key={i} className={styles.statBox}>
                    <span className={styles.statLabel}>{stat.label}</span>
                    <div className="flex items-baseline gap-1">
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statUnit}>{stat.unit}</span>
                    </div>
                    <span className={styles.statTrend}>{stat.trend}</span>
                  </div>
                ))}
              </div>

              {/* Graph Area */}
              <div className={styles.graphCard}>
                <div className="flex justify-between mb-4">
                  <div>
                    <span className={styles.cardTitle}>Performance</span>
                    <p className={styles.cardSub}>Last 7 Days</p>
                  </div>
                  <span className={styles.statTrend}>+24%</span>
                </div>
                <div className={styles.graphContainer}>
                  {[35, 45, 40, 60, 55, 70, 85].map((h, i) => (
                    <div key={i} className={styles.bar} style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>

              <div className={styles.homeIndicator}></div>
            </div>
          </div>
        </div>

        {/* --- TEXT COLUMN (Now Order-2 on Mobile via CSS) --- */}
        <div className={styles.textColumn}>
          <span className={styles.label}>{TECH_CONTENT.sectionTitle}</span>
          <h2 className={styles.headline}>
            {TECH_CONTENT.headline} <br />
            <span className={styles.italic}>{TECH_CONTENT.highlight}</span>
          </h2>
          <p className={styles.description}>
            {TECH_CONTENT.description}
          </p>

          <div className={styles.featureGrid}>
            {TECH_CONTENT.features.map((feat, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.iconBox}>
                  <feat.icon size={20} />
                </div>
                <div>
                  <h4 className={styles.featTitle}>{feat.title}</h4>
                  <p className={styles.featDesc}>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={toggle360Mode}
            className={`${styles.viewToggleBtn} ${is360Active ? styles.active : ''}`}
          >
            <Rotate3d size={18} className={is360Active ? 'animate-spin' : ''} />
            {is360Active ? 'Disable 360°' : 'Interactive 3D'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Technology;