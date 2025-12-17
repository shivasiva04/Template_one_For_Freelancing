import React from 'react';
import styles from './Footer.module.css';
import { FOOTER_CONTENT } from "../../../constants";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.contentWrapper}>
        
        {/* Brand Section */}
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            {FOOTER_CONTENT.brand.logo} <span className={styles.logoHighlight}>{FOOTER_CONTENT.brand.highlight}</span>
          </div>
          <p className={styles.description}>
            {FOOTER_CONTENT.brand.description}
          </p>
        </div>

        {/* Dynamic Link Columns */}
        {FOOTER_CONTENT.links.map((column, index) => (
          <div key={index} className={styles.linkCol}>
            <h4 className={styles.columnTitle}>{column.title}</h4>
            <ul className={styles.linkList}>
              {column.items.map((link, lIndex) => (
                <li key={lIndex}>
                  <a href={link.href} className={styles.linkItem}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Section */}
        <div className={styles.newsletterCol}>
          <h4 className={styles.columnTitle}>{FOOTER_CONTENT.newsletter.title}</h4>
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              placeholder={FOOTER_CONTENT.newsletter.placeholder} 
              className={styles.input} 
            />
            <button className={styles.submitBtn}>
              {FOOTER_CONTENT.newsletter.button}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Socials */}
      <div className={styles.bottomBar}>
        <span className={styles.copyright}>{FOOTER_CONTENT.copyright}</span>
        
        <div className={styles.socialWrapper}>
          {FOOTER_CONTENT.socials.map((social, index) => (
            <a key={index} href={social.href} aria-label={social.label} className={styles.socialIcon}>
              <social.icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;