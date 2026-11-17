import React from 'react';

export const HeroEdTechIllustration: React.FC = () => {
  return (
    <div
      role="img"
      aria-label="Ilustração tecnológica educativa com computador portátil a exibir criação de imagens e geração de áudio por Inteligência Artificial, livros, lápis de cor e auscultadores"
      className="relative w-full max-w-[660px] mx-auto select-none"
    >
      <svg
        viewBox="0 0 680 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_18px_42px_rgba(79,70,229,0.12)]"
      >
        <defs>
          {/* Open sweeping wave clip path matching the reference right-side curve */}
          <clipPath id="scene-wave-clip">
            <path d="M52,462 C26,386 42,262 114,162 C188,60 326,28 476,22 C568,18 632,20 676,34 L676,472 C564,462 426,480 282,476 C168,474 88,484 52,462 Z" />
          </clipPath>

          {/* Soft classroom backdrop gradients */}
          <linearGradient id="room-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5f3ff" />
            <stop offset="48%" stopColor="#fdf8ef" />
            <stop offset="100%" stopColor="#ebe8fe" />
          </linearGradient>

          <radialGradient id="sunlight-glow" cx="28%" cy="22%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#fef3c7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ede9fe" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="desk-surface" x1="0%" y1="0%" x2="100%" y2="25%">
            <stop offset="0%" stopColor="#f7dcc2" />
            <stop offset="55%" stopColor="#f3cca6" />
            <stop offset="100%" stopColor="#eab78b" />
          </linearGradient>

          {/* Flowing translucent ribbon border */}
          <linearGradient id="wave-ribbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.52" />
            <stop offset="55%" stopColor="#7c3aed" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.5" />
          </linearGradient>

          {/* Laptop chassis & screen gradients */}
          <linearGradient id="laptop-bezel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="laptop-screen-bg" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#1b2a82" />
            <stop offset="50%" stopColor="#3b26a6" />
            <stop offset="100%" stopColor="#5b21b6" />
          </linearGradient>

          <radialGradient id="screen-center-glow" cx="50%" cy="50%" r="45%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.65" />
            <stop offset="55%" stopColor="#6366f1" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#312e81" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="laptop-deck" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="70%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          <linearGradient id="chip-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>

          <linearGradient id="tile-glass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.1" />
          </linearGradient>

          {/* Books & pencils */}
          <linearGradient id="book-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="book-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          {/* Purple headphones */}
          <linearGradient id="headphone-band" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#5b21b6" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
          <linearGradient id="headphone-cup" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="60%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#3b0764" />
          </linearGradient>

          {/* Filters */}
          <filter id="soft-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter id="neon-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="desk-shadow" x="-15%" y="-15%" width="130%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#312e81" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* Outer soft ambient halo behind wave frame */}
        <path
          d="M42,468 C14,386 30,256 106,152 C184,46 326,14 480,10 C576,8 638,14 678,30 L678,480 C562,468 424,488 278,484 C162,480 80,492 42,468 Z"
          fill="#ede9fe"
          opacity="0.45"
        />

        {/* Clipped classroom studio scene */}
        <g clipPath="url(#scene-wave-clip)">
          <rect x="0" y="0" width="680" height="520" fill="url(#room-bg)" />

          {/* Out-of-focus warm bookshelf & window silhouette */}
          <g filter="url(#soft-blur)" opacity="0.65">
            <rect x="330" y="18" width="280" height="260" rx="8" fill="#e2b487" opacity="0.45" />
            <rect x="345" y="34" width="115" height="90" rx="4" fill="#fef3c7" opacity="0.7" />
            <rect x="475" y="34" width="120" height="90" rx="4" fill="#fef3c7" opacity="0.55" />
            <rect x="345" y="138" width="115" height="95" rx="4" fill="#fef3c7" opacity="0.5" />
            <rect x="475" y="138" width="120" height="95" rx="4" fill="#fef3c7" opacity="0.45" />
            {/* Books & greenery hints */}
            <rect x="488" y="68" width="16" height="56" rx="2" fill="#3b82f6" opacity="0.65" />
            <rect x="507" y="76" width="14" height="48" rx="2" fill="#f59e0b" opacity="0.65" />
            <rect x="524" y="64" width="18" height="60" rx="2" fill="#10b981" opacity="0.55" />
            <circle cx="385" cy="102" r="28" fill="#84cc16" opacity="0.45" />
            <circle cx="406" cy="84" r="22" fill="#65a30d" opacity="0.4" />
            <circle cx="628" cy="106" r="32" fill="#84cc16" opacity="0.42" />
            <ellipse cx="145" cy="175" rx="42" ry="48" fill="#84cc16" opacity="0.28" />
          </g>

          <rect x="0" y="0" width="680" height="520" fill="url(#sunlight-glow)" />

          {/* Desk surface */}
          <path d="M0,378 L680,362 L680,520 L0,520 Z" fill="url(#desk-surface)" />
          <line x1="0" y1="378" x2="680" y2="362" stroke="#f8e5d1" strokeWidth="2" opacity="0.8" />

          {/* Soft contact shadows on desk */}
          <ellipse cx="140" cy="410" rx="82" ry="15" fill="#7c2d12" opacity="0.16" />
          <ellipse cx="366" cy="436" rx="188" ry="20" fill="#1e1b4b" opacity="0.22" />
          <ellipse cx="566" cy="442" rx="74" ry="15" fill="#312e81" opacity="0.24" />

          {/* Stacked Books (Left) */}
          <g transform="translate(46, 336)">
            {/* Bottom golden hardcover */}
            <rect x="6" y="34" width="148" height="34" rx="5" fill="url(#book-gold)" />
            <rect x="14" y="38" width="132" height="26" rx="3" fill="#fef3c7" />
            <rect x="6" y="34" width="148" height="7" rx="3" fill="#fcd34d" />
            <rect x="6" y="61" width="148" height="7" rx="3" fill="#d97706" />
            {/* Top blue hardcover */}
            <rect x="16" y="4" width="136" height="30" rx="5" fill="url(#book-blue)" />
            <rect x="24" y="8" width="120" height="22" rx="3" fill="#eff6ff" />
            <rect x="16" y="4" width="136" height="6" rx="3" fill="#60a5fa" />
            <rect x="16" y="28" width="136" height="6" rx="3" fill="#1d4ed8" />
          </g>

          {/* Ceramic Cup with Colored Pencils */}
          <g transform="translate(88, 224)">
            {/* Yellow pencil */}
            <g transform="rotate(-14 34 72)">
              <rect x="28" y="18" width="10" height="72" rx="1" fill="#facc15" />
              <polygon points="28,18 38,18 33,4" fill="#fde68a" />
              <polygon points="31.5,9 34.5,9 33,4" fill="#ca8a04" />
            </g>
            {/* Sky blue pencil */}
            <g transform="rotate(-4 45 72)">
              <rect x="40" y="10" width="10" height="80" rx="1" fill="#38bdf8" />
              <polygon points="40,10 50,10 45,-4" fill="#fde68a" />
              <polygon points="43.5,1 46.5,1 45,-4" fill="#0284c7" />
            </g>
            {/* Coral red pencil */}
            <g transform="rotate(6 56 72)">
              <rect x="51" y="14" width="10" height="76" rx="1" fill="#f43f5e" />
              <polygon points="51,14 61,14 56,0" fill="#fde68a" />
              <polygon points="54.5,5 57.5,5 56,0" fill="#be123c" />
            </g>
            {/* Teal pencil */}
            <g transform="rotate(16 68 72)">
              <rect x="62" y="20" width="10" height="70" rx="1" fill="#2dd4bf" />
              <polygon points="62,20 72,20 67,6" fill="#fde68a" />
              <polygon points="65.5,11 68.5,11 67,6" fill="#0f766e" />
            </g>

            {/* White ceramic cup */}
            <path
              d="M22,64 L80,64 L75,126 C74,132 68,136 51,136 C34,136 28,132 27,126 Z"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />
            <ellipse cx="51" cy="64" rx="29" ry="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          </g>

          {/* Main Laptop */}
          <g filter="url(#desk-shadow)">
            {/* Laptop Lid & Screen */}
            <g transform="matrix(1, -0.025, 0.03, 1, 188, 174)">
              {/* Outer aluminum shell */}
              <rect x="-3" y="-3" width="332" height="214" rx="14" fill="#cbd5e1" />
              {/* Black screen bezel */}
              <rect x="0" y="0" width="326" height="208" rx="11" fill="url(#laptop-bezel)" />
              {/* Webcam dot */}
              <circle cx="163" cy="6.5" r="2" fill="#475569" />

              {/* Active Display Area */}
              <rect x="9" y="12" width="308" height="186" rx="5" fill="url(#laptop-screen-bg)" />
              <rect x="9" y="12" width="308" height="186" rx="5" fill="url(#screen-center-glow)" />

              {/* Glowing circuit pathways radiating from center IA chip */}
              <g stroke="#c4b5fd" strokeWidth="1.6" strokeLinecap="round" opacity="0.72" filter="url(#neon-glow)">
                {/* Top & bottom circuit traces */}
                <path d="M163,62 L163,34 L144,24" />
                <path d="M163,62 L163,30 L186,22" />
                <path d="M148,62 L148,42 L126,32" />
                <path d="M178,62 L178,42 L202,32" />

                <path d="M163,144 L163,172 L142,184" />
                <path d="M163,144 L163,176 L186,186" />
                <path d="M148,144 L148,164 L124,174" />
                <path d="M178,144 L178,164 L204,174" />

                {/* Left & right connectors to Image and Audio cards */}
                <path d="M122,94 L98,94" />
                <path d="M122,112 L98,112" />
                <path d="M204,94 L228,94" />
                <path d="M204,112 L228,112" />
              </g>

              {/* Glowing Circuit Terminal Nodes */}
              <g fill="#f5f3ff" filter="url(#neon-glow)">
                <circle cx="144" cy="24" r="3" />
                <circle cx="186" cy="22" r="3" />
                <circle cx="126" cy="32" r="2.5" />
                <circle cx="202" cy="32" r="2.5" />
                <circle cx="142" cy="184" r="3" />
                <circle cx="186" cy="186" r="3" />
                <circle cx="124" cy="174" r="2.5" />
                <circle cx="204" cy="174" r="2.5" />
              </g>

              {/* Left Screen Tile: Image Generation Icon */}
              <g transform="translate(26, 68)">
                <rect
                  x="0"
                  y="0"
                  width="74"
                  height="70"
                  rx="11"
                  fill="url(#tile-glass)"
                  stroke="#ddd6fe"
                  strokeWidth="1.4"
                  strokeOpacity="0.8"
                />
                {/* Inner picture frame */}
                <rect x="8" y="9" width="58" height="52" rx="7" fill="#dbeafe" />
                {/* Mountains */}
                <path d="M8,52 L25,30 L40,46 L50,35 L66,52 L66,54 C66,58 63,61 59,61 L15,61 C11,61 8,58 8,54 Z" fill="#2563eb" />
                <path d="M8,54 L25,30 L34,42 L20,61 L15,61 C11,61 8,58 8,54 Z" fill="#1d4ed8" />
                {/* Sun */}
                <circle cx="51" cy="22" r="6.5" fill="#fbbf24" />
              </g>

              {/* Central IA Microchip */}
              <g transform="translate(123, 64)">
                {/* Chip outer glow */}
                <rect
                  x="-3"
                  y="-3"
                  width="86"
                  height="86"
                  rx="16"
                  fill="none"
                  stroke="#e9d5ff"
                  strokeWidth="2.5"
                  opacity="0.7"
                  filter="url(#neon-glow)"
                />
                {/* Chip body */}
                <rect
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  rx="14"
                  fill="url(#chip-gradient)"
                  stroke="#f5f3ff"
                  strokeWidth="2.4"
                />
                <rect
                  x="6"
                  y="6"
                  width="68"
                  height="68"
                  rx="10"
                  fill="none"
                  stroke="#c4b5fd"
                  strokeWidth="1"
                  opacity="0.55"
                />
                <text
                  x="40"
                  y="52"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="Bricolage Grotesque, Plus Jakarta Sans, sans-serif"
                  fontSize="36"
                  fontWeight="800"
                  letterSpacing="1.5"
                >
                  IA
                </text>
              </g>

              {/* Right Screen Tile: Audio Generation Waveform */}
              <g transform="translate(226, 68)">
                <rect
                  x="0"
                  y="0"
                  width="74"
                  height="70"
                  rx="11"
                  fill="url(#tile-glass)"
                  stroke="#ddd6fe"
                  strokeWidth="1.4"
                  strokeOpacity="0.8"
                />
                {/* Symmetrical Audio Equalizer Bars */}
                <g fill="#f5f3ff" filter="url(#neon-glow)">
                  <rect x="11" y="31" width="3.5" height="8" rx="1.75" />
                  <rect x="17" y="25" width="3.5" height="20" rx="1.75" />
                  <rect x="23" y="19" width="3.5" height="32" rx="1.75" />
                  <rect x="29" y="27" width="3.5" height="16" rx="1.75" />
                  <rect x="35" y="13" width="4" height="44" rx="2" fill="#e0f2fe" />
                  <rect x="41.5" y="22" width="3.5" height="26" rx="1.75" />
                  <rect x="47.5" y="17" width="3.5" height="36" rx="1.75" />
                  <rect x="53.5" y="26" width="3.5" height="18" rx="1.75" />
                  <rect x="59.5" y="31" width="3.5" height="8" rx="1.75" />
                </g>
              </g>
            </g>

            {/* Laptop Keyboard Base (3D perspective) */}
            <path
              d="M196,374 L518,367 L580,418 C584,422 581,428 573,428 L124,436 C115,436 112,430 118,425 Z"
              fill="url(#laptop-deck)"
            />
            {/* Front lip */}
            <path
              d="M116,429 L582,421 L580,429 C579,433 574,436 567,436 L128,444 C121,444 116,440 116,435 Z"
              fill="#94a3b8"
            />
            {/* Keyboard well */}
            <path
              d="M204,378 L508,372 L534,398 L174,404 Z"
              fill="#334155"
              opacity="0.88"
            />
            {/* Subtle key rows */}
            <g stroke="#64748b" strokeWidth="1.2" opacity="0.55">
              <line x1="196" y1="384" x2="514" y2="378" />
              <line x1="189" y1="391" x2="521" y2="385" />
              <line x1="181" y1="398" x2="528" y2="392" />
            </g>
            {/* Trackpad */}
            <path
              d="M312,408 L406,406 L414,422 L305,424 Z"
              fill="#cbd5e1"
              stroke="#94a3b8"
              strokeWidth="1"
            />
          </g>

          {/* Purple Over-Ear Headphones (Right) */}
          <g transform="translate(486, 326)" filter="url(#desk-shadow)">
            {/* Headband arch */}
            <path
              d="M26,74 C18,30 48,0 82,2 C116,4 138,34 132,76"
              fill="none"
              stroke="url(#headphone-band)"
              strokeWidth="15"
              strokeLinecap="round"
            />
            {/* Headband inner highlight */}
            <path
              d="M34,68 C29,34 53,10 82,12 C111,14 127,36 124,68"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
            />
            {/* Left Earcup */}
            <g transform="rotate(-14 34 86)">
              <ellipse cx="38" cy="86" rx="22" ry="30" fill="#2e1065" />
              <ellipse cx="32" cy="86" rx="21" ry="29" fill="url(#headphone-cup)" />
              <ellipse cx="29" cy="83" rx="12" ry="18" fill="#8b5cf6" opacity="0.4" />
            </g>
            {/* Right Earcup */}
            <g transform="rotate(14 122 86)">
              <ellipse cx="116" cy="86" rx="22" ry="30" fill="#2e1065" />
              <ellipse cx="122" cy="86" rx="21" ry="29" fill="url(#headphone-cup)" />
              <ellipse cx="125" cy="83" rx="12" ry="18" fill="#a78bfa" opacity="0.45" />
            </g>
          </g>
        </g>

        {/* Flowing purple-blue ribbon accent tracing the curved edge */}
        <path
          d="M52,462 C26,386 42,262 114,162 C188,60 326,28 476,22 C568,18 632,20 676,34"
          fill="none"
          stroke="url(#wave-ribbon)"
          strokeWidth="9"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
