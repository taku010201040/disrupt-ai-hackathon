/* --------------------------------------------------
 * JS Interactive Logic: Cyber Kawaii Pop Theme
 * For DISRUPT AI Hackathon Special Landing Page
 * -------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

  // ========== 50-Theme Preset Data ==========
  // Each theme: { name, nameJa, bg, p (pink/accent1), c (cyan/accent2), y (yellow/accent3), isDark }
  const THEME_PRESETS = [
    { name: "Lavender Pop", nameJa: "ラベンダー・ポップ", bg: "#faf9fe", p: "#ff4b91", c: "#00abec", y: "#ffd166", isDark: false },
    { name: "Sakura Milk", nameJa: "サクラ・ミルク", bg: "#fff7fa", p: "#ff6b9e", c: "#a288f3", y: "#ffc300", isDark: false },
    { name: "Mint City-Pop", nameJa: "ミント・シティポップ", bg: "#f2fbf9", p: "#ff3377", c: "#06d6a0", y: "#118ab2", isDark: false },
    { name: "Citrus Sorbet", nameJa: "シトラス・ソルベ", bg: "#fffbf2", p: "#ff5d00", c: "#00b4d8", y: "#ffd166", isDark: false },
    { name: "Berry Blend", nameJa: "ベリー・ブレンド", bg: "#fbf2fb", p: "#d90429", c: "#7209b7", y: "#ffb703", isDark: false },
    { name: "Matcha Latte", nameJa: "抹茶ラテ", bg: "#f7f9f3", p: "#e65c00", c: "#4f772d", y: "#90a955", isDark: false },
    { name: "Unicorn Pastel", nameJa: "ユニコーン・パステル", bg: "#fdf9ff", p: "#f15bb5", c: "#00f5d4", y: "#fee440", isDark: false },
    { name: "Vanilla Caramel", nameJa: "バニラ・キャラメル", bg: "#faf6f0", p: "#b07d62", c: "#7f5539", y: "#e6a15c", isDark: false },
    { name: "Ocean Breeze", nameJa: "オーシャン・ブリーズ", bg: "#f0f8ff", p: "#ff2a85", c: "#0077b6", y: "#00b4d8", isDark: false },
    { name: "Peach Fizz", nameJa: "ピーチ・フィズ", bg: "#fff8f3", p: "#ff70a6", c: "#70d6ff", y: "#ffd670", isDark: false },
    { name: "Choco Mint", nameJa: "チョコミント", bg: "#f4faf7", p: "#8d5b4c", c: "#2ec4b6", y: "#ff9f1c", isDark: false },
    { name: "Cosmic Nebula", nameJa: "コズミック・ネビュラ", bg: "#faf9ff", p: "#e0115f", c: "#6f00ff", y: "#ff00aa", isDark: false },
    { name: "Strawberry Soda", nameJa: "ストロベリー・ソーダ", bg: "#fff5f5", p: "#ff003c", c: "#00b894", y: "#fdcb6e", isDark: false },
    { name: "Desert Sage", nameJa: "デザート・セージ", bg: "#f6f8f5", p: "#d94e34", c: "#606c38", y: "#dda15e", isDark: false },
    { name: "Cotton Candy", nameJa: "コットンキャンディ", bg: "#fff8fd", p: "#ff8da1", c: "#8ecae6", y: "#ffb703", isDark: false },
    { name: "Lemon Sherbet", nameJa: "レモン・シャーベット", bg: "#fffffa", p: "#ff3838", c: "#00cec9", y: "#ffeaa7", isDark: false },
    { name: "Teddy Bear", nameJa: "テディベア", bg: "#f9f7f4", p: "#a67c52", c: "#6d4c41", y: "#c2b280", isDark: false },
    { name: "Sweet Bubblegum", nameJa: "スウィート・バブルガム", bg: "#fff9fc", p: "#ff5c8a", c: "#70d6ff", y: "#ffd166", isDark: false },
    { name: "Grapefruit Soda", nameJa: "グレープフルーツ・ソーダ", bg: "#fff8f6", p: "#ff6f59", c: "#2ec4b6", y: "#ffb703", isDark: false },
    { name: "Pistachio Cream", nameJa: "ピスタチオ・クリーム", bg: "#f8faf4", p: "#e07a5f", c: "#81b29a", y: "#f2cc8f", isDark: false },
    { name: "Plum Blossom", nameJa: "梅の花", bg: "#fdf8fb", p: "#800840", c: "#d9a0d1", y: "#8b8589", isDark: false },
    { name: "Sunset Glow", nameJa: "サンセット・グロウ", bg: "#fff7f3", p: "#f77f00", c: "#fcbf49", y: "#eae2b7", isDark: false },
    { name: "Lavender Honey", nameJa: "ラベンダー・ハニー", bg: "#faf9ff", p: "#8338ec", c: "#3a86c8", y: "#ffbe0b", isDark: false },
    { name: "Blueberry Yogurt", nameJa: "ブルーベリー・ヨーグルト", bg: "#f4f7fe", p: "#4361ee", c: "#4cc9f0", y: "#f72585", isDark: false },
    { name: "Forest Path", nameJa: "フォレスト・パス", bg: "#f7faf5", p: "#bc4749", c: "#386641", y: "#a7c957", isDark: false },
    { name: "Aqua Marine", nameJa: "アクアマリン", bg: "#f0faf9", p: "#f15bb5", c: "#00b4d8", y: "#00f5d4", isDark: false },
    { name: "Caramel Macchiato", nameJa: "キャラメル・マキアート", bg: "#faf7f2", p: "#8b5e3c", c: "#a06f4c", y: "#e6ccb2", isDark: false },
    { name: "Mango Tango", nameJa: "マンゴー・タンゴ", bg: "#fffaf0", p: "#ff007f", c: "#ff9f1c", y: "#2ec4b6", isDark: false },
    { name: "Wisteria Garden", nameJa: "藤の庭", bg: "#fbfbfe", p: "#7209b7", c: "#b5179e", y: "#4cc9f0", isDark: false },
    { name: "Pumpkin Spice", nameJa: "パンプキン・スパイス", bg: "#fdf7f2", p: "#d65a31", c: "#8b4513", y: "#f4f4f4", isDark: false },
    { name: "Electric Lemonade", nameJa: "エレクトリック・レモネード", bg: "#f0f5ff", p: "#ff0055", c: "#00a2ff", y: "#ffd600", isDark: false },
    { name: "Cranberry Spritz", nameJa: "クランベリー・スプリッツ", bg: "#fff2f4", p: "#9e0031", c: "#8e9aaf", y: "#cbc0d3", isDark: false },
    { name: "Winter Frost", nameJa: "ウィンター・フロスト", bg: "#f7faff", p: "#8a1c7b", c: "#90e0ef", y: "#caf0f8", isDark: false },
    { name: "Taro Boba", nameJa: "タロ・ボバ", bg: "#faf7fc", p: "#a370f7", c: "#c8b6ff", y: "#ffd3e8", isDark: false },
    { name: "Bubble Tea", nameJa: "バブルティー", bg: "#f8f3eb", p: "#7f5539", c: "#9c6644", y: "#ddb892", isDark: false },
    { name: "Cherry Blossom", nameJa: "チェリーブロッサム", bg: "#fff5f6", p: "#ffb3c1", c: "#ff85a1", y: "#ffe5ec", isDark: false },
    { name: "Autumn Maple", nameJa: "オータム・メープル", bg: "#fff8f2", p: "#9e2a2b", c: "#3e5c76", y: "#e9d8a6", isDark: false },
    { name: "Ice Cream Sundae", nameJa: "アイスクリーム・サンデー", bg: "#fffbf9", p: "#ff2a85", c: "#7f5539", y: "#f8ad9d", isDark: false },
    { name: "Candy Cane", nameJa: "キャンディケイン", bg: "#fff5f5", p: "#ff0000", c: "#00b894", y: "#f1f2f6", isDark: false },
    { name: "Gold Rush", nameJa: "ゴールドラッシュ", bg: "#faf9f5", p: "#d4af37", c: "#aa7c11", y: "#f3e5ab", isDark: false },
    // Dark themes (10)
    { name: "Cyber Dark", nameJa: "サイバー・ダーク", bg: "#07050f", p: "#ff007f", c: "#00f0ff", y: "#fffb00", isDark: true },
    { name: "Magma Neon", nameJa: "マグマ・ネオン", bg: "#0b0505", p: "#ff3b00", c: "#ff9f00", y: "#ff0055", isDark: true },
    { name: "Matrix Green", nameJa: "マトリックス・グリーン", bg: "#030704", p: "#00ff41", c: "#008f11", y: "#adff2f", isDark: true },
    { name: "Midnight Neon", nameJa: "ミッドナイト・ネオン", bg: "#040410", p: "#ff007f", c: "#7209b7", y: "#4cc9f0", isDark: true },
    { name: "Glitch Cyber", nameJa: "グリッチ・サイバー", bg: "#050b10", p: "#00ff66", c: "#ff00ff", y: "#00ffff", isDark: true },
    { name: "Vampire Red", nameJa: "ヴァンパイア・レッド", bg: "#0a0204", p: "#ff0838", c: "#6b0014", y: "#300008", isDark: true },
    { name: "Royal Gold", nameJa: "ロイヤル・ゴールド", bg: "#0a0214", p: "#d4af37", c: "#aa7c11", y: "#4b0082", isDark: true },
    { name: "Deep Sea", nameJa: "ディープシー", bg: "#020a14", p: "#0077b6", c: "#00b4d8", y: "#90e0ef", isDark: true },
    { name: "Poison Ivy", nameJa: "ポイズン・アイビー", bg: "#020c04", p: "#386641", c: "#bc4749", y: "#a7c957", isDark: true },
    { name: "Synthwave Dream", nameJa: "シンセウェイブ・ドリーム", bg: "#0f0515", p: "#ff007f", c: "#00f0ff", y: "#ffb703", isDark: true }
  ];

  // ========== Hex-to-RGB Helper ==========
  function hexToRgb(hex) {
    const h = hex.replace('#', '');
    return {
      r: parseInt(h.substring(0, 2), 16),
      g: parseInt(h.substring(2, 4), 16),
      b: parseInt(h.substring(4, 6), 16)
    };
  }

  // ========== Apply Theme (CSS Variable Injection) ==========
  function applyTheme(themeIndex) {
    const theme = THEME_PRESETS[themeIndex];
    if (!theme) return;

    const root = document.documentElement;
    const pRgb = hexToRgb(theme.p);
    const cRgb = hexToRgb(theme.c);
    const yRgb = hexToRgb(theme.y);

    // Build the variables map
    const varsMap = {};

    if (theme.isDark) {
      varsMap['--bg-color'] = theme.bg;
      const bgRgb = hexToRgb(theme.bg);
      varsMap['--bg-color-rgb'] = `${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b}`;
      varsMap['--bg-card'] = `rgba(${bgRgb.r + 11}, ${bgRgb.g + 9}, ${bgRgb.b + 18}, 0.7)`;
      varsMap['--bg-card-hover'] = `rgba(${bgRgb.r + 19}, ${bgRgb.g + 15}, ${bgRgb.b + 33}, 0.85)`;
      varsMap['--bg-header'] = theme.bg;
      varsMap['--bg-overlay'] = theme.bg;
      varsMap['--bg-timeline-stack'] = `rgba(${bgRgb.r + 11}, ${bgRgb.g + 9}, ${bgRgb.b + 18}, 0.9)`;
      varsMap['--bg-timeline-active'] = `rgba(${bgRgb.r + 18}, ${bgRgb.g + 15}, ${bgRgb.b + 32}, 0.7)`;
      varsMap['--bg-venue-showcase'] = `rgba(${bgRgb.r + 11}, ${bgRgb.g + 9}, ${bgRgb.b + 18}, 0.75)`;
      varsMap['--bg-body-scrolled'] = `rgba(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b}, 0.92)`;
      varsMap['--bg-footer'] = `#${Math.max(0, bgRgb.r - 3).toString(16).padStart(2,'0')}${Math.max(0, bgRgb.g - 2).toString(16).padStart(2,'0')}${Math.max(0, bgRgb.b - 5).toString(16).padStart(2,'0')}`;
      varsMap['--text-primary'] = '#ffffff';
      varsMap['--text-secondary'] = '#acafc0';
      varsMap['--text-muted'] = '#6e7282';
      varsMap['--border-glass'] = 'rgba(255, 255, 255, 0.07)';
      varsMap['--shadow-ambient'] = 'rgba(0, 0, 0, 0.4)';
      varsMap['--bg-card-alt'] = 'rgba(255, 255, 255, 0.03)';
      varsMap['--grid-color-1'] = `rgba(${pRgb.r}, ${pRgb.g}, ${pRgb.b}, 0.08)`;
      varsMap['--grid-color-2'] = `rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b}, 0.08)`;
      varsMap['--blob-color-1'] = `rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b}, 0.85)`;
      varsMap['--blob-color-2'] = `rgba(${pRgb.r}, ${pRgb.g}, ${pRgb.b}, 0.80)`;
      varsMap['--blob-color-3'] = `rgba(${yRgb.r}, ${yRgb.g}, ${yRgb.b}, 0.70)`;
      varsMap['--blob-color-4'] = `rgba(168, 85, 247, 0.70)`;
      varsMap['--blob-color-5'] = `rgba(0, 255, 127, 0.60)`;
    } else {
      varsMap['--bg-color'] = theme.bg;
      const bgRgb = hexToRgb(theme.bg);
      varsMap['--bg-color-rgb'] = `${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b}`;
      varsMap['--bg-card'] = 'rgba(255, 255, 255, 0.85)';
      varsMap['--bg-card-hover'] = 'rgba(255, 255, 255, 0.95)';
      varsMap['--bg-header'] = 'rgba(255, 255, 255, 0.95)';
      varsMap['--bg-overlay'] = theme.bg;
      varsMap['--bg-timeline-stack'] = 'rgba(255, 255, 255, 0.95)';
      varsMap['--bg-timeline-active'] = `rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b}, 0.08)`;
      varsMap['--bg-venue-showcase'] = 'rgba(255, 255, 255, 0.9)';
      varsMap['--bg-body-scrolled'] = 'rgba(255, 255, 255, 0.95)';
      varsMap['--bg-footer'] = '#1a1a2e';
      varsMap['--text-primary'] = '#1a1a2e';
      varsMap['--text-secondary'] = '#3b3f5c';
      varsMap['--text-muted'] = '#626780';
      varsMap['--border-glass'] = 'rgba(0, 0, 0, 0.06)';
      varsMap['--shadow-ambient'] = 'rgba(0, 0, 0, 0.06)';
      varsMap['--bg-card-alt'] = theme.bg;
      varsMap['--grid-color-1'] = `rgba(${pRgb.r}, ${pRgb.g}, ${pRgb.b}, 0.025)`;
      varsMap['--grid-color-2'] = `rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b}, 0.025)`;
      varsMap['--blob-color-1'] = `rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b}, 0.38)`;
      varsMap['--blob-color-2'] = `rgba(${pRgb.r}, ${pRgb.g}, ${pRgb.b}, 0.35)`;
      varsMap['--blob-color-3'] = `rgba(${yRgb.r}, ${yRgb.g}, ${yRgb.b}, 0.32)`;
      varsMap['--blob-color-4'] = 'rgba(168, 85, 247, 0.32)';
      varsMap['--blob-color-5'] = 'rgba(6, 214, 160, 0.28)';
    }

    // Accent colors (always set)
    varsMap['--neon-pink'] = theme.p;
    varsMap['--neon-pink-glow'] = `rgba(${pRgb.r}, ${pRgb.g}, ${pRgb.b}, ${theme.isDark ? 0.35 : 0.15})`;
    varsMap['--neon-pink-rgb'] = `${pRgb.r}, ${pRgb.g}, ${pRgb.b}`;
    varsMap['--neon-cyan'] = theme.c;
    varsMap['--neon-cyan-glow'] = `rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b}, ${theme.isDark ? 0.35 : 0.15})`;
    varsMap['--neon-cyan-rgb'] = `${cRgb.r}, ${cRgb.g}, ${cRgb.b}`;
    varsMap['--neon-yellow'] = theme.y;
    varsMap['--neon-yellow-glow'] = `rgba(${yRgb.r}, ${yRgb.g}, ${yRgb.b}, ${theme.isDark ? 0.3 : 0.15})`;
    varsMap['--neon-yellow-rgb'] = `${yRgb.r}, ${yRgb.g}, ${yRgb.b}`;
    varsMap['--border-neon-pink'] = `rgba(${pRgb.r}, ${pRgb.g}, ${pRgb.b}, ${theme.isDark ? 0.4 : 0.25})`;
    varsMap['--border-neon-cyan'] = `rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b}, ${theme.isDark ? 0.4 : 0.25})`;

    // Apply all CSS variables
    for (const [key, val] of Object.entries(varsMap)) {
      root.style.setProperty(key, val);
    }

    // Persist for flash-free reload
    localStorage.setItem('theme-preset-variables', JSON.stringify(varsMap));
    localStorage.setItem('theme-preset-index', String(themeIndex));

    // Sync dark-theme body class
    if (theme.isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }

    // Update dark/light toggle icon
    const toggleIcon = document.querySelector('#theme-toggle i');
    if (toggleIcon) {
      toggleIcon.className = theme.isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    // Cache active colors for canvas drawing
    currentColors.pink = theme.p;
    currentColors.cyan = theme.c;
    currentColors.yellow = theme.y;
    currentColors.pinkAlpha = `rgba(${pRgb.r}, ${pRgb.g}, ${pRgb.b}, 0.4)`;
    currentColors.cyanAlpha = `rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b}, 0.4)`;
    currentColors.yellowAlpha = `rgba(${yRgb.r}, ${yRgb.g}, ${yRgb.b}, 0.4)`;
    currentColors.isDark = theme.isDark;
  }

  // Canvas color cache (avoids getComputedStyle per frame)
  const currentColors = {
    pink: '#ff4b91', cyan: '#00abec', yellow: '#ffd166',
    pinkAlpha: 'rgba(255, 75, 145, 0.4)', cyanAlpha: 'rgba(0, 171, 236, 0.4)', yellowAlpha: 'rgba(255, 209, 102, 0.4)',
    isDark: false
  };

  // Initialise from saved index (or default 0 = Lavender Pop)
  let currentThemeIndex = parseInt(localStorage.getItem('theme-preset-index') || '0', 10);
  if (currentThemeIndex < 0 || currentThemeIndex >= THEME_PRESETS.length) currentThemeIndex = 0;
  // Apply on load (re-applies CSS vars that the inline <script> already set, plus syncs canvas cache)
  applyTheme(currentThemeIndex);

  /* ==================================================
   * 1. Cyber Loader & Zoom Mask (Automatic Opening Sequence)
   * ================================================== */
  const zoomMask = document.getElementById('zoom-mask');
  const maskText = document.getElementById('mask-text');
  const loadingContainer = document.getElementById('loading-container');
  const loadingBar = document.getElementById('loading-bar');
  const loadingPercent = document.getElementById('loading-percent');

  let loadingProgress = 0;
  
  if (zoomMask && loadingContainer && loadingBar && loadingPercent) {
    const loadInterval = setInterval(() => {
      // Slightly variable steps to make it feel organic
      const step = Math.floor(Math.random() * 8) + 4; // 4% to 12% progress per tick
      loadingProgress = Math.min(loadingProgress + step, 100);
      
      loadingBar.style.width = `${loadingProgress}%`;
      loadingPercent.textContent = `${loadingProgress}%`;
      
      if (loadingProgress >= 100) {
        clearInterval(loadInterval);
        
        // Step 1: Fade out the loading container
        loadingContainer.style.opacity = '0';
        loadingContainer.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
          loadingContainer.style.display = 'none';
          
          // Step 2: Show and trigger neon "AI" zoom-in animation
          if (maskText) {
            maskText.classList.add('zoom-active');
          }
          
          // Step 3: Fade out the overlay itself
          setTimeout(() => {
            zoomMask.style.opacity = '0';
            
            // Step 4: Hide overlay completely
            setTimeout(() => {
              zoomMask.style.display = 'none';
              zoomMask.style.visibility = 'hidden';
              
              // Trigger hero typing animation after loader overlay has completely disappeared
              if (typeof startTypingAnimation === 'function') {
                startTypingAnimation();
              }
            }, 600);
          }, 750);
          
        }, 400);
      }
    }, 80); // updates every 80ms (takes ~1.0-1.2s total)
  }

  /* ==================================================
   * 2. Background Particle System (Canvas with Connections & Mouse Aura)
   * ================================================== */
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  
  let width = canvas ? (canvas.width = window.innerWidth) : 0;
  let height = canvas ? (canvas.height = window.innerHeight) : 0;

  window.addEventListener('resize', () => {
    if (canvas) {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

  });

  // Track Mouse for Interactive Particle Repulsion & Aura Glow
  let mX = -9999;
  let mY = -9999;
  window.addEventListener('mousemove', (e) => {
    mX = e.clientX;
    mY = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mX = -9999;
    mY = -9999;
  });

  // Particle Class (Elegant Cyber Dust with Binary and Code Elements)
  class Particle {
    constructor() {
      this.reset();
      this.y = Math.random() * height; // Start at random positions initially
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + 20; // Start below the screen
      this.size = Math.random() * 3.5 + 1.5; // Brighter and larger (1.5px - 5px) for gorgeousness
      this.speedY = -(Math.random() * 0.35 + 0.1); // Slow upward speed
      this.speedX = Math.random() * 0.25 - 0.125; // Drifting horizontal speed
      this.colorType = Math.floor(Math.random() * 3); // 0: Pink, 1: Cyan, 2: Yellow
      this.alpha = Math.random() * 0.45 + 0.15; // Low opacity for elegance
      this.type = Math.floor(Math.random() * 5); // 0: Star, 1: Heart, 2: Sparkle, 3: Binary, 4: Code
      this.rotation = Math.random() * Math.PI;
      this.rotSpeed = Math.random() * 0.015 - 0.0075; // Slow rotation
      
      // Select characters for Binary / Code types
      if (this.type === 3) {
        this.text = Math.random() > 0.5 ? '0' : '1';
      } else if (this.type === 4) {
        const symbols = ['{', '}', '</>', '+', '-', '*', '[', ']'];
        this.text = symbols[Math.floor(Math.random() * symbols.length)];
      }
    }

    update() {
      // Mouse interaction (gentle repulsion)
      if (mX !== -9999 && mY !== -9999) {
        const dx = this.x - mX;
        const dy = this.y - mY;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x += (dx / dist) * force * 1.5;
          this.y += (dy / dist) * force * 1.5;
        }
      }

      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;

      // Fade out near the top
      if (this.y < 120) {
        this.alpha -= 0.005;
      }

      // Reset when off-screen or faded out
      if (this.y < -20 || this.x < -20 || this.x > width + 20 || this.alpha <= 0) {
        this.reset();
      }
    }

    draw(isDark) {
      if (!ctx || this.alpha <= 0) return;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.alpha;

      let color = '';
      if (this.colorType === 0) color = currentColors.isDark ? currentColors.pink : currentColors.pinkAlpha;
      else if (this.colorType === 1) color = currentColors.isDark ? currentColors.cyan : currentColors.cyanAlpha;
      else color = currentColors.isDark ? currentColors.yellow : currentColors.yellowAlpha;

      ctx.fillStyle = color;
      // Disabled shadowBlur entirely for maximum rendering speed on both modes

      if (this.type === 0) {
        this.drawStar(0, 0, 5, this.size, this.size / 2);
      } else if (this.type === 1) {
        this.drawHeart(0, 0, this.size);
      } else if (this.type === 2) {
        this.drawSparkle(0, 0, this.size);
      } else {
        // Draw Binary/Code text
        ctx.font = `900 ${this.size * 2 + 5}px var(--font-cyber)`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text, 0, 0);
      }
      ctx.restore();
    }

    drawStar(cx, cy, spikes, outerRadius, innerRadius) {
      if (!ctx) return;
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    }

    drawHeart(x, y, size) {
      if (!ctx) return;
      const topCurveHeight = size * 0.3;
      ctx.beginPath();
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(
        x - size / 2, y - size / 2, 
        x - size, y + topCurveHeight, 
        x, y + size
      );
      ctx.bezierCurveTo(
        x + size, y + topCurveHeight, 
        x + size / 2, y - size / 2, 
        x, y + topCurveHeight
      );
      ctx.closePath();
      ctx.fill();
    }

    drawSparkle(x, y, size) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.quadraticCurveTo(x, y, x + size, y);
      ctx.quadraticCurveTo(x, y, x, y + size);
      ctx.quadraticCurveTo(x, y, x - size, y);
      ctx.quadraticCurveTo(x, y, x, y - size);
      ctx.closePath();
      ctx.fill();
    }
  }

  const particleCount = 25; // Reduced further to 25 for absolute lag-free dark mode connections
  const particles = [];
  if (canvas) {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  /* ==================================================
   * 3. Confetti Particle System (Submit Explosion)
   * ================================================== */
  class ConfettiParticle {
    constructor(startX, startY) {
      this.x = startX;
      this.y = startY;
      this.size = Math.random() * 6 + 4;
      
      const angle = Math.random() * Math.PI * 1.4 + Math.PI * 1.8; // Burst directions
      const speed = Math.random() * 10 + 6;
      
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.gravity = 0.25;
      
      this.colorType = Math.floor(Math.random() * 3);
      this.type = Math.floor(Math.random() * 3); // Star, Heart, Sparkle
      this.alpha = 1;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = Math.random() * 0.15 - 0.075;
    }

    update() {
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotSpeed;
      this.alpha -= 0.015;
    }

    draw(isDark) {
      if (!ctx || this.alpha <= 0) return;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.alpha;

      let color = '';
      if (this.colorType === 0) color = currentColors.pink;
      else if (this.colorType === 1) color = currentColors.cyan;
      else color = currentColors.yellow;

      ctx.fillStyle = color;
      // Disabled shadowBlur entirely for maximum rendering speed

      if (this.type === 0) {
        this.drawStar(0, 0, 5, this.size, this.size / 2);
      } else if (this.type === 1) {
        this.drawHeart(0, 0, this.size);
      } else {
        this.drawSparkle(0, 0, this.size);
      }
      ctx.restore();
    }

    drawStar(cx, cy, spikes, outerRadius, innerRadius) {
      if (!ctx) return;
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    }

    drawHeart(x, y, size) {
      if (!ctx) return;
      const topCurveHeight = size * 0.3;
      ctx.beginPath();
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + topCurveHeight, x, y + size);
      ctx.bezierCurveTo(x + size, y + topCurveHeight, x + size / 2, y - size / 2, x, y + topCurveHeight);
      ctx.closePath();
      ctx.fill();
    }

    drawSparkle(x, y, size) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.quadraticCurveTo(x, y, x + size, y);
      ctx.quadraticCurveTo(x, y, x, y + size);
      ctx.quadraticCurveTo(x, y, x - size, y);
      ctx.quadraticCurveTo(x, y, x, y - size);
      ctx.closePath();
      ctx.fill();
    }
  }

  let confetti = [];
  
  function triggerConfettiBurst() {
    const startX = width / 2;
    const startY = height * 0.85;
    
    for (let i = 0; i < 80; i++) {
      confetti.push(new ConfettiParticle(startX, startY));
    }
  }



  // Animation Loop (Runs Canvas background particles & updates active confetti)
  function animate() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    const isDark = document.body.classList.contains('dark-theme');

    // Draw Mouse Glowing Neon Aura Glow (Dynamic Light)
    if (mX !== -9999 && mY !== -9999) {
      const auraGrad = ctx.createRadialGradient(mX, mY, 0, mX, mY, 150);
      if (isDark) {
        auraGrad.addColorStop(0, 'rgba(0, 240, 255, 0.09)');
        auraGrad.addColorStop(0.5, 'rgba(255, 0, 127, 0.03)');
      } else {
        auraGrad.addColorStop(0, 'rgba(12, 140, 233, 0.06)');
        auraGrad.addColorStop(0.5, 'rgba(230, 57, 117, 0.02)');
      }
      auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(mX, mY, 150, 0, Math.PI * 2);
      ctx.fill();

      // Draw connection lines from mouse cursor to nearby particles (interactive neural connection!)
      particles.forEach(p => {
        const dx = p.x - mX;
        const dy = p.y - mY;
        const dist = Math.hypot(dx, dy);
        if (dist < 125) {
          ctx.beginPath();
          ctx.moveTo(mX, mY);
          ctx.lineTo(p.x, p.y);
          
          let alpha = (1 - dist / 125) * 0.16 * p.alpha;
          if (isDark) {
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 1.5})`;
          } else {
            ctx.strokeStyle = `rgba(12, 140, 233, ${alpha})`;
          }
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });
    }

    // Update & draw background particles
    particles.forEach(p => {
      p.update();
      p.draw(isDark);
    });

    // Draw connection lines (only in dark theme for performance and cleaner light mode aesthetics!)
    if (isDark) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);
          
          if (dist < 80) { // Reduced from 115 to draw fewer lines and optimize CPU
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            let color = '';
            if (p1.colorType === 0) color = 'rgba(255, 0, 127, ';
            else if (p1.colorType === 1) color = 'rgba(0, 240, 255, ';
            else color = 'rgba(255, 251, 0, ';
            
            const alpha = (1 - dist / 80) * 0.22 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = color + alpha + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    }

    // Update & draw active confetti
    confetti = confetti.filter(c => c.alpha > 0);
    confetti.forEach(c => {
      c.update();
      c.draw(isDark);
    });

    requestAnimationFrame(animate);
  }
  
  if (canvas) {
    animate();
  }

  /* ==================================================
   * 5. HIGH-PERFORMANCE UNIFIED SCROLL ENGINE
   * ================================================== */
  const scrollCircuitPath = document.getElementById('scroll-circuit-path');

  // Initialize SVG Path length
  let pathLength = 0;
  if (scrollCircuitPath) {
    pathLength = scrollCircuitPath.getTotalLength();
    scrollCircuitPath.style.strokeDasharray = pathLength;
    scrollCircuitPath.style.strokeDashoffset = pathLength;
  }

  function handleScrollAnimations() {
    const sY = window.scrollY;
    const wH = window.innerHeight;
    const totalScroll = document.documentElement.scrollHeight - wH;
    const scrollPercent = totalScroll > 0 ? sY / totalScroll : 0;

    // --- A. SVG Path Drawing ---
    if (scrollCircuitPath) {
      scrollCircuitPath.style.strokeDashoffset = pathLength * (1 - scrollPercent);
    }

    // --- B. 空間ダイブ (Z-Axis Dive in Vision) ---
    const visionSection = document.querySelector('.vision-section');
    if (visionSection && window.innerWidth > 992) {
      const visionRect = visionSection.getBoundingClientRect();
      const visionTop = sY + visionRect.top;
      const diveViewport = visionSection.querySelector('.dive-viewport');
      const viewportHeight = diveViewport ? diveViewport.offsetHeight : wH;
      
      const visionProgress = Math.min(Math.max((sY - visionTop) / (viewportHeight - wH), 0), 1);

      // Rotate and slide vision header
      const header = visionSection.querySelector('.section-header');
      if (header) {
        if (visionProgress <= 0.22) {
          const lp = visionProgress / 0.22;
          const hz = -300 + lp * 900;
          header.style.transform = `translate3d(-50%, 0, ${hz}px)`;
          header.style.opacity = lp < 0.2 ? lp / 0.2 : 1 - (lp - 0.7) / 0.3;
          header.style.display = 'block';
        } else {
          header.style.display = 'none';
        }
      }

      // Fly dive cards on Z axis (separate ranges to avoid overlap)
      const diveCards = visionSection.querySelectorAll('.dive-card');
      const ranges = [
        { start: 0.08, end: 0.38 },   // Problem Box
        { start: 0.33, end: 0.63 },  // USP 1
        { start: 0.58, end: 0.85 },  // USP 2
        { start: 0.78, end: 1.0 }    // USP 3
      ];

      diveCards.forEach((card, index) => {
        const range = ranges[index];
        if (range && visionProgress >= range.start && visionProgress <= range.end) {
          const lp = (visionProgress - range.start) / (range.end - range.start); // local progress 0 to 1
          const hz = -1200 + lp * 1600; // Z-axis translate (Max depth +400px to prevent flyoff)

          card.style.transform = `translate3d(-50%, -44%, ${hz}px)`;
          card.style.display = 'block';

          // Fade in and out
          if (lp < 0.25) {
            card.style.opacity = lp / 0.25;
          } else if (lp > 0.75) {
            card.style.opacity = (1 - lp) / 0.25;
          } else {
            card.style.opacity = 1;
          }
        } else {
          card.style.display = 'none';
          card.style.opacity = 0;
        }
      });
    }

    // --- C. スクロールハイジャック / 縦横変換 (Horizontal Tracks) ---
    const tracksWrap = document.getElementById('tracks');
    if (tracksWrap && window.innerWidth > 992) {
      const tracksRect = tracksWrap.getBoundingClientRect();
      const tracksTop = sY + tracksRect.top;
      const tracksProgress = Math.min(Math.max((sY - tracksTop) / (tracksWrap.offsetHeight - wH), 0), 1);
      
      // Calculate translateX (4 slides = translate 75% of total width 400vw)
      const translateX = -tracksProgress * 75;
      const container = document.getElementById('tracks-horizontal-container');
      if (container) {
        container.style.transform = `translate3d(${translateX}%, 0, 0)`;
      }
    }

    // --- D. Experience Flow Progress ---
    const flowSteps = document.querySelectorAll('.flow-step');
    const flowFill = document.getElementById('flow-progress-fill');
    if (flowSteps.length > 0) {
      let maxProgress = 0;
      flowSteps.forEach(step => {
        const rect = step.getBoundingClientRect();
        if (rect.top < wH * 0.75) {
          step.classList.add('is-visible');
          const stepIdx = parseInt(step.getAttribute('data-step')) || 1;
          maxProgress = Math.max(maxProgress, stepIdx / flowSteps.length);
        }
      });
      if (flowFill) {
        flowFill.style.height = (maxProgress * 100) + '%';
      }
    }

    // --- E. 3Dカードスタック (Timeline Section) ---
    const stackCards = document.querySelectorAll('.timeline-step-stack');
    if (stackCards.length > 0 && window.innerWidth > 992) {
      stackCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const computedTop = parseFloat(window.getComputedStyle(card).top);
        const stickyTop = isNaN(computedTop) ? wH * 0.18 : computedTop;
        const distPassed = stickyTop - rect.top;

        if (distPassed > 0) {
          const progress = Math.min(distPassed / (wH * 0.4), 1);
          const scale = 1 - progress * 0.03; // Shinks less to maintain readability
          const opacity = 1 - progress * 0.15; // Keeps previous card highly visible (minimum opacity 0.85)

          card.style.transform = `scale(${scale}) translateY(-${progress * 12}px)`;
          card.style.opacity = opacity;
        } else {
          card.style.transform = 'scale(1) translateY(0px)';
          card.style.opacity = 1;
        }
      });
    }

    // --- F. クリップパス・リビール (Venue Section) ---


    // --- G. 爆発・飛散 (Members Scatter Convergence) ---
    const memSec = document.querySelector('.members-container-section');
    if (memSec) {
      const memRect = memSec.getBoundingClientRect();
      const memTop = sY + memRect.top;
      const memProgress = Math.min(Math.max((sY - (memTop - wH * 0.75)) / (wH * 0.55), 0), 1);

      const scatterCards = document.querySelectorAll('.scroll-scatter-card');
      scatterCards.forEach(card => {
        const sx = parseFloat(card.style.getPropertyValue('--scatter-x')) || 0;
        const sy = parseFloat(card.style.getPropertyValue('--scatter-y')) || 0;
        const srot = parseFloat(card.style.getPropertyValue('--scatter-rot')) || 0;

        const cx = sx * (1 - memProgress);
        const cy = sy * (1 - memProgress);
        const crot = srot * (1 - memProgress);
        const opacity = memProgress;

        card.style.transform = `translate3d(${cx}px, ${cy}px, 0) rotate(${crot}deg)`;
        card.style.opacity = opacity;
      });
    }
  }

  // Bind scroll handler with requestAnimationFrame optimization
  let isScrolling = false;
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        handleScrollAnimations();
        isScrolling = false;
      });
      isScrolling = true;
    }
  }, { passive: true });

  // Initial draw on DOM Load (with timeout offset to allow loading sequence to start)
  setTimeout(handleScrollAnimations, 150);

  /* ==================================================
   * 6. Navigation Links & Mobile Menu Toggle
   * ================================================== */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-btn-apply');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  /* ==================================================
   * 7. RPG Character Member Grid Filter
   * ================================================== */
  const filterButtons = document.querySelectorAll('.unit-btn');
  const memberCards = document.querySelectorAll('.member-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedUnit = btn.getAttribute('data-unit');

      memberCards.forEach(card => {
        if (selectedUnit === 'all' || card.classList.contains(selectedUnit)) {
          card.classList.remove('hide');
          card.style.display = 'block';
        } else {
          card.classList.add('hide');
          card.style.display = 'none';
        }
      });
      
      // Re-trigger scroll positions on layout change
      handleScrollAnimations();
    });
  });

  /* ==================================================
   * 8. Interactive Form Validation & Console Submit
   * ================================================== */
  const form = document.getElementById('hackathon-form');
  const successOverlay = document.getElementById('success-overlay');
  const closeSuccessBtn = document.getElementById('close-success-btn');

  const inputName = document.getElementById('user-name');
  const inputUni = document.getElementById('user-university');
  const selectGrade = document.getElementById('user-grade');
  const inputEmail = document.getElementById('user-email');
  
  const errorName = document.getElementById('name-error');
  const errorUni = document.getElementById('uni-error');
  const errorGrade = document.getElementById('grade-error');
  const errorEmail = document.getElementById('email-error');
  const errorRoles = document.getElementById('roles-error');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (errorName) errorName.textContent = '';
      if (errorUni) errorUni.textContent = '';
      if (errorGrade) errorGrade.textContent = '';
      if (errorEmail) errorEmail.textContent = '';
      if (errorRoles) errorRoles.textContent = '';
      
      if (inputName) inputName.classList.remove('invalid');
      if (inputUni) inputUni.classList.remove('invalid');
      if (selectGrade) selectGrade.classList.remove('invalid');
      if (inputEmail) inputEmail.classList.remove('invalid');

      if (inputName && !inputName.value.trim()) {
        if (errorName) errorName.textContent = '※お名前を入力してください';
        inputName.classList.add('invalid');
        isValid = false;
      }

      if (inputUni && !inputUni.value.trim()) {
        if (errorUni) errorUni.textContent = '※大学名を入力してください';
        inputUni.classList.add('invalid');
        isValid = false;
      }

      if (selectGrade && !selectGrade.value) {
        if (errorGrade) errorGrade.textContent = '※学年を選択してください';
        selectGrade.classList.add('invalid');
        isValid = false;
      }

      if (inputEmail && !inputEmail.value.trim()) {
        if (errorEmail) errorEmail.textContent = '※メールアドレスを入力してください';
        inputEmail.classList.add('invalid');
        isValid = false;
      } else if (inputEmail && !validateEmail(inputEmail.value.trim())) {
        if (errorEmail) errorEmail.textContent = '※有効なメールアドレスを入力してください';
        inputEmail.classList.add('invalid');
        isValid = false;
      }

      const checkedRoles = form.querySelectorAll('input[name="roles"]:checked');
      if (checkedRoles.length === 0) {
        if (errorRoles) errorRoles.textContent = '※希望ロールを1つ以上選択してください';
        isValid = false;
      }

      if (isValid) {
        triggerConfettiBurst();
        setTimeout(triggerConfettiBurst, 250);
        if (successOverlay) successOverlay.classList.add('show');
        form.reset();
      }
    });
  }

  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', () => {
      if (successOverlay) successOverlay.classList.remove('show');
    });
  }

  // --- Hero Application Scroll Event ---
  const heroBtnApply = document.getElementById('hero-btn-apply');
  if (heroBtnApply) {
    heroBtnApply.addEventListener('click', () => {
      const applySection = document.getElementById('apply');
      if (applySection) {
        applySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // --- Boot-up Typing Animation for Hero Title ---
  const heroTitleMain = document.getElementById('hero-title-main');
  let textToType = "DISRUPT AI HACKATHON";
  if (heroTitleMain) {
    textToType = heroTitleMain.textContent || textToType;
    heroTitleMain.innerHTML = ''; // Clear text immediately to prevent flash/layout shift
  }

  function startTypingAnimation() {
    if (heroTitleMain) {
      heroTitleMain.innerHTML = ''; // Make sure it's clear
      
      const textSpan = document.createElement('span');
      textSpan.className = 'typing-text';
      const cursorSpan = document.createElement('span');
      cursorSpan.className = 'typing-cursor';
      cursorSpan.textContent = '_';
      
      heroTitleMain.appendChild(textSpan);
      heroTitleMain.appendChild(cursorSpan);
      
      let charIndex = 0;
      function typeNextChar() {
        if (charIndex < textToType.length) {
          textSpan.textContent += textToType.charAt(charIndex);
          charIndex++;
          const delay = Math.random() * 40 + 40;
          setTimeout(typeNextChar, delay);
        }
      }
      setTimeout(typeNextChar, 200);
    }
  }

  /* ==================================================
   * 9. Countdown Timer
   * ================================================== */
  const targetDate = new Date('2026-07-19T10:00:00+09:00').getTime();
  const cdDays = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMins = document.getElementById('cd-mins');
  const cdSecs = document.getElementById('cd-secs');

  function updateCountdown() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      if (cdDays) cdDays.textContent = '00';
      if (cdHours) cdHours.textContent = '00';
      if (cdMins) cdMins.textContent = '00';
      if (cdSecs) cdSecs.textContent = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (cdDays) cdDays.textContent = String(d).padStart(2, '0');
    if (cdHours) cdHours.textContent = String(h).padStart(2, '0');
    if (cdMins) cdMins.textContent = String(m).padStart(2, '0');
    if (cdSecs) cdSecs.textContent = String(s).padStart(2, '0');
  }

  if (cdDays) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ==================================================
   * 10. FAQ Accordion
   * ================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all other items
        faqItems.forEach(other => other.classList.remove('open'));
        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        } else {
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  /* ==================================================
   * 11. Header Scroll Effect
   * ================================================== */
  const mainHeader = document.querySelector('.main-header');
  if (mainHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ==================================================
   * 12. Intersection Observer for Fade-in Animations
   * ================================================== */
  const fadeTargets = document.querySelectorAll('.fade-in-target, .fade-in-mobile');
  if (fadeTargets.length > 0 && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    fadeTargets.forEach(el => fadeObserver.observe(el));
  }

  /* ==================================================
   * 13. Theme Dropdown Selector & Dark/Light Toggle
   * ================================================== */
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    const isDark = document.body.classList.contains('dark-theme');
    if (icon) {
      icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    themeToggle.addEventListener('click', () => {
      // Toggle between current light preset's dark counterpart
      const currentTheme = THEME_PRESETS[currentThemeIndex];
      if (currentTheme && !currentTheme.isDark) {
        // Switch to Cyber Dark (index 40)
        currentThemeIndex = 40;
        applyTheme(currentThemeIndex);
        updateActiveDot();
      } else {
        // Switch back to Lavender Pop (index 0)
        currentThemeIndex = 0;
        applyTheme(currentThemeIndex);
        updateActiveDot();
      }
    });
  }

  // --- Theme Dropdown: Generate 50 dots dynamically ---
  const themeGrid = document.getElementById('theme-grid');
  const dropdownTrigger = document.getElementById('theme-dropdown-trigger');
  const dropdownMenu = document.getElementById('theme-dropdown-menu');

  function updateActiveDot() {
    if (!themeGrid) return;
    const allDots = themeGrid.querySelectorAll('.palette-dot');
    allDots.forEach((d, i) => {
      d.classList.toggle('active', i === currentThemeIndex);
    });
  }

  if (themeGrid) {
    THEME_PRESETS.forEach((theme, index) => {
      const dot = document.createElement('button');
      dot.className = 'palette-dot';
      dot.setAttribute('data-index', String(index));
      dot.setAttribute('data-name-ja', theme.nameJa);
      dot.setAttribute('aria-label', theme.name);
      dot.title = theme.name;
      // Set the dot gradient background from the theme's accent colors
      dot.style.background = `linear-gradient(135deg, ${theme.c}, ${theme.p})`;
      if (index === currentThemeIndex) {
        dot.classList.add('active');
      }

      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        currentThemeIndex = index;
        applyTheme(currentThemeIndex);
        updateActiveDot();
      });

      themeGrid.appendChild(dot);
    });
  }

  // Toggle dropdown open/close
  if (dropdownTrigger && dropdownMenu) {
    dropdownTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdownMenu.contains(e.target) && e.target !== dropdownTrigger) {
        dropdownMenu.classList.remove('show');
      }
    });

    // Close dropdown on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdownMenu.classList.remove('show');
      }
    });
  }

});
