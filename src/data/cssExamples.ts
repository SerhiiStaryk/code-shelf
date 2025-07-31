export const cssExamples = {
  flexboxCenter: `
    .flexbox-center {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 200px;
    }
  `,

  gridLayout: `
    .grid-layout {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
  `,

  customScrollbar: `
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `,

  textGradient: `
    .text-gradient {
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: bold;
    }
  `,

  hoverEffects: `
    .hover-card {
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .hover-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
  `,

  responsiveImages: `
    .responsive-image {
      max-width: 100%;
      height: auto;
      display: block;
    }
    
    /* Aspect ratio container */
    .aspect-ratio {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%; /* 16:9 ratio */
    }
    
    .aspect-ratio img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  darkMode: `
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :root {
        --bg-color: #1a1a1a;
        --text-color: #ffffff;
        --card-bg: #2d2d2d;
      }
    }
    
    /* Light mode */
    :root {
      --bg-color: #ffffff;
      --text-color: #333333;
      --card-bg: #f5f5f5;
    }
    
    body {
      background-color: var(--bg-color);
      color: var(--text-color);
    }
  `,

  animations: `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .fade-in {
      animation: fadeIn 0.6s ease-out;
    }
    
    .stagger-children > * {
      animation: fadeIn 0.6s ease-out;
    }
    
    .stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
    .stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
    .stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
  `,

  accessibility: `
    /* Focus styles for accessibility */
    .accessible-button:focus {
      outline: 2px solid #007bff;
      outline-offset: 2px;
    }
    
    /* Skip link for screen readers */
    .skip-link {
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: white;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
    }
    
    .skip-link:focus {
      top: 6px;
    }
    
    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .button {
        border: 2px solid currentColor;
      }
    }
  `,

  performance: `
    /* Use transform instead of top/left for animations */
    .optimized-animation {
      transform: translateX(0);
      transition: transform 0.3s ease;
    }
    
    .optimized-animation:hover {
      transform: translateX(10px);
    }
    
    /* Use will-change sparingly */
    .will-change {
      will-change: transform;
    }
    
    /* Optimize paint operations */
    .paint-optimized {
      transform: translateZ(0); /* Force hardware acceleration */
    }
  `,

  modernCSS: `
    /* CSS Grid with auto-fit */
    .auto-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }
    
    /* Container queries (modern browsers) */
    @container (min-width: 400px) {
      .container-responsive {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
    
    /* Logical properties */
    .logical-props {
      margin-block: 1rem;
      padding-inline: 1rem;
      border-block-end: 1px solid #ccc;
    }
    
    /* CSS custom properties with fallbacks */
    .custom-props {
      color: #333; /* Fallback */
      color: var(--text-color, #333);
    }
  `,
};
