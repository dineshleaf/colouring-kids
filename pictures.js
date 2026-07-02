/*
 * Picture library for the coloring app.
 *
 * Each picture is line art built from SVG shapes. Any element that a child can
 * tap and fill carries class="z" (a "zone"). Everything else — eyes, whiskers,
 * outlines drawn on top — is decoration that stays put while coloring.
 *
 * Kept as plain data (no build step) so the whole app is one folder you can
 * AirDrop to an iPhone and open in Safari, offline.
 */
window.PICTURES = [
  {
    id: 'cat',
    name: 'Cat',
    svg: `
      <path class="z" d="M188 196 C232 190 226 120 196 118 C182 150 182 180 190 196 Z"/>
      <path class="z" d="M62 210 C52 150 84 138 120 138 C156 138 188 150 178 210 Z"/>
      <path class="z" d="M78 56 L70 8 L120 48 Z"/>
      <path class="z" d="M162 56 L170 8 L120 48 Z"/>
      <path class="z" d="M92 44 L88 20 L112 42 Z" fill="#ffd1dc"/>
      <path class="z" d="M148 44 L152 20 L128 42 Z" fill="#ffd1dc"/>
      <circle class="z" cx="120" cy="92" r="58"/>
      <circle cx="100" cy="86" r="7" fill="#222"/>
      <circle cx="140" cy="86" r="7" fill="#222"/>
      <path class="z" d="M112 108 L128 108 L120 118 Z" fill="#ffb3c6"/>
      <path d="M120 118 L120 128 M120 128 C112 128 108 124 106 120 M120 128 C128 128 132 124 134 120" fill="none"/>
      <path d="M60 96 L92 100 M58 110 L92 108 M180 96 L148 100 M182 110 L148 108" fill="none"/>
    `,
  },
  {
    id: 'fish',
    name: 'Fish',
    svg: `
      <circle class="z" cx="44" cy="60" r="10" fill="#bfe9ff"/>
      <circle class="z" cx="40" cy="188" r="14" fill="#bfe9ff"/>
      <circle class="z" cx="196" cy="196" r="11" fill="#bfe9ff"/>
      <path class="z" d="M170 120 L228 78 L228 162 Z"/>
      <path class="z" d="M110 60 C90 70 92 96 108 100 Z"/>
      <path class="z" d="M110 180 C90 170 92 144 108 140 Z"/>
      <path class="z" d="M30 120 C30 74 96 64 150 74 C186 82 200 104 200 120 C200 136 186 158 150 166 C96 176 30 166 30 120 Z"/>
      <path class="z" d="M70 120 C70 96 84 84 84 84 C84 84 92 104 92 120 C92 136 84 156 84 156 C84 156 70 144 70 120 Z" fill="#ffe08a"/>
      <path class="z" d="M110 120 C110 96 124 84 124 84 C124 84 132 104 132 120 C132 136 124 156 124 156 C124 156 110 144 110 120 Z" fill="#ffb3c6"/>
      <circle cx="58" cy="110" r="8" fill="#222"/>
      <path d="M46 132 C52 138 62 138 68 132" fill="none"/>
    `,
  },
  {
    id: 'butterfly',
    name: 'Butterfly',
    svg: `
      <path d="M120 60 C120 40 108 20 96 12 M120 60 C120 40 132 20 144 12" fill="none"/>
      <circle cx="96" cy="10" r="6" fill="#222"/>
      <circle cx="144" cy="10" r="6" fill="#222"/>
      <path class="z" d="M116 70 C70 30 20 44 26 92 C30 122 78 120 116 108 Z"/>
      <path class="z" d="M124 70 C170 30 220 44 214 92 C210 122 162 120 124 108 Z"/>
      <path class="z" d="M116 116 C80 118 44 138 58 178 C76 214 116 190 118 150 Z"/>
      <path class="z" d="M124 116 C160 118 196 138 182 178 C164 214 124 190 122 150 Z"/>
      <circle class="z" cx="64" cy="82" r="14" fill="#ffd1dc"/>
      <circle class="z" cx="176" cy="82" r="14" fill="#ffd1dc"/>
      <circle class="z" cx="82" cy="166" r="12" fill="#bfe9ff"/>
      <circle class="z" cx="158" cy="166" r="12" fill="#bfe9ff"/>
      <path class="z" d="M112 66 C104 100 104 140 112 190 L128 190 C136 140 136 100 128 66 Z" fill="#c9a227"/>
    `,
  },
  {
    id: 'turtle',
    name: 'Turtle',
    svg: `
      <ellipse class="z" cx="120" cy="196" rx="14" ry="18"/>
      <ellipse class="z" cx="66" cy="196" rx="16" ry="20"/>
      <ellipse class="z" cx="174" cy="196" rx="16" ry="20"/>
      <path class="z" d="M198 132 C230 128 232 158 206 162 C196 152 194 140 198 132 Z"/>
      <ellipse class="z" cx="120" cy="128" rx="96" ry="72"/>
      <ellipse class="z" cx="120" cy="118" rx="52" ry="40" fill="#8fd694"/>
      <path class="z" d="M120 78 L150 96 L138 128 L102 128 L90 96 Z" fill="#5cb85c"/>
      <path class="z" d="M78 62 C60 62 52 82 62 96 C74 90 82 78 84 70 Z" fill="#a7e3a7"/>
      <path class="z" d="M162 62 C180 62 188 82 178 96 C166 90 158 78 156 70 Z" fill="#a7e3a7"/>
      <circle cx="108" cy="90" r="5" fill="#222"/>
      <circle cx="132" cy="90" r="5" fill="#222"/>
    `,
  },
  {
    id: 'ladybug',
    name: 'Ladybug',
    svg: `
      <path d="M120 60 C114 44 100 34 92 32 M120 60 C126 44 140 34 148 32" fill="none"/>
      <circle cx="90" cy="30" r="6" fill="#222"/>
      <circle cx="150" cy="30" r="6" fill="#222"/>
      <path d="M40 120 L20 108 M40 150 L18 150 M46 178 L28 192 M200 120 L220 108 M200 150 L222 150 M194 178 L212 192" fill="none"/>
      <ellipse class="z" cx="120" cy="150" rx="82" ry="70"/>
      <path class="z" d="M120 84 C74 84 44 112 42 148 L198 148 C196 112 166 84 120 84 Z" fill="#222"/>
      <path d="M120 82 L120 220" fill="none"/>
      <circle class="z" cx="86" cy="140" r="12" fill="#222"/>
      <circle class="z" cx="154" cy="140" r="12" fill="#222"/>
      <circle class="z" cx="72" cy="186" r="11" fill="#222"/>
      <circle class="z" cx="120" cy="196" r="11" fill="#222"/>
      <circle class="z" cx="168" cy="186" r="11" fill="#222"/>
    `,
  },
  {
    id: 'flower',
    name: 'Flower',
    svg: `
      <path class="z" d="M116 150 C110 190 108 214 112 232 L128 232 C132 214 130 190 124 150 Z" fill="#7bc47f"/>
      <path class="z" d="M120 196 C150 176 186 182 196 196 C170 214 138 210 120 196 Z" fill="#8fd694"/>
      <path class="z" d="M120 176 C92 158 56 164 46 178 C72 196 104 190 120 176 Z" fill="#8fd694"/>
      <ellipse class="z" cx="120" cy="40" rx="26" ry="34" fill="#ff9ec4"/>
      <ellipse class="z" cx="184" cy="72" rx="34" ry="26" fill="#ffb3c6"/>
      <ellipse class="z" cx="160" cy="132" rx="26" ry="34" fill="#ff9ec4"/>
      <ellipse class="z" cx="80" cy="132" rx="26" ry="34" fill="#ff9ec4"/>
      <ellipse class="z" cx="56" cy="72" rx="34" ry="26" fill="#ffb3c6"/>
      <circle class="z" cx="120" cy="86" r="30" fill="#ffe08a"/>
      <circle cx="112" cy="82" r="4" fill="#222"/>
      <circle cx="128" cy="82" r="4" fill="#222"/>
      <path d="M110 96 C116 102 124 102 130 96" fill="none"/>
    `,
  },
  {
    id: 'snail',
    name: 'Snail',
    svg: `
      <path class="z" d="M40 196 C40 172 60 160 96 160 C150 160 176 168 196 176 C210 182 208 196 196 200 Z" fill="#bfe9ff"/>
      <path class="z" d="M188 96 C120 96 96 148 120 176 M188 96 C220 128 208 178 168 186 C130 194 112 158 132 138 C150 120 178 128 180 150 C182 166 166 172 158 162" fill="none" class="z"/>
      <circle class="z" cx="176" cy="150" r="56" fill="#ffcf87"/>
      <circle class="z" cx="176" cy="150" r="38" fill="#ffe08a" fill-rule="evenodd"/>
      <circle class="z" cx="176" cy="150" r="20" fill="#ffcf87"/>
      <path d="M60 160 C50 120 58 108 66 104 M78 156 C74 124 82 110 92 106" fill="none"/>
      <circle cx="66" cy="102" r="5" fill="#222"/>
      <circle cx="92" cy="104" r="5" fill="#222"/>
      <circle cx="70" cy="186" r="6" fill="#222"/>
    `,
  },
  {
    id: 'star',
    name: 'Star',
    svg: `
      <path class="z" d="M120 20 L146 88 L218 92 L162 138 L182 208 L120 168 L58 208 L78 138 L22 92 L94 88 Z" fill="#ffe08a"/>
      <circle cx="100" cy="120" r="7" fill="#222"/>
      <circle cx="140" cy="120" r="7" fill="#222"/>
      <circle class="z" cx="88" cy="140" r="9" fill="#ffb3c6"/>
      <circle class="z" cx="152" cy="140" r="9" fill="#ffb3c6"/>
      <path d="M104 146 C112 156 128 156 136 146" fill="none"/>
    `,
  },
  {
    id: 'mushroom',
    name: 'Mushroom',
    svg: `
      <path class="z" d="M84 138 C82 178 78 206 74 224 L166 224 C162 206 158 178 156 138 Z" fill="#fff3e0"/>
      <path class="z" d="M28 132 C28 74 70 34 120 34 C170 34 212 74 212 132 C212 140 204 146 196 146 L44 146 C36 146 28 140 28 132 Z" fill="#ff6b6b"/>
      <circle class="z" cx="80" cy="86" r="16" fill="#fff3e0"/>
      <circle class="z" cx="150" cy="72" r="20" fill="#fff3e0"/>
      <circle class="z" cx="150" cy="120" r="13" fill="#fff3e0"/>
      <circle class="z" cx="102" cy="120" r="11" fill="#fff3e0"/>
      <circle cx="104" cy="178" r="6" fill="#222"/>
      <circle cx="136" cy="178" r="6" fill="#222"/>
      <path d="M108 196 C116 204 124 204 132 196" fill="none"/>
    `,
  },
];
