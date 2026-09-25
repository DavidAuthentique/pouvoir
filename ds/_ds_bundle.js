/* @ds-bundle: {"format":4,"namespace":"MilieNaturelleDesignSystem_3a33d9","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CourseCard","sourcePath":"components/core/CourseCard.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"NavBar","sourcePath":"components/core/NavBar.jsx"},{"name":"OfferCard","sourcePath":"components/core/OfferCard.jsx"},{"name":"OrganicPhotoFrame","sourcePath":"components/core/OrganicPhotoFrame.jsx"},{"name":"PillarRow","sourcePath":"components/core/PillarRow.jsx"},{"name":"Ticker","sourcePath":"components/core/Ticker.jsx"}],"sourceHashes":{"components/core/Button.jsx":"b2ff1cdb8cbd","components/core/CourseCard.jsx":"29cd102391ba","components/core/Eyebrow.jsx":"7f0e15489518","components/core/NavBar.jsx":"d8b49ac188b5","components/core/OfferCard.jsx":"287e50e84a80","components/core/OrganicPhotoFrame.jsx":"ea5d8ae92141","components/core/PillarRow.jsx":"bf22f06f34ce","components/core/Ticker.jsx":"6311fa19d1f1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MilieNaturelleDesignSystem_3a33d9 = window.MilieNaturelleDesignSystem_3a33d9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
const VARIANTS = {
  primary: {
    bg: 'var(--color-orange)',
    bgHover: 'var(--color-orange-fonce)',
    color: '#fff',
    shadow: 'var(--shadow-button)'
  },
  dark: {
    bg: 'var(--color-encre)',
    bgHover: '#4b3d5e',
    color: '#fff',
    shadow: 'none'
  },
  highlight: {
    bg: 'var(--color-jaune)',
    bgHover: 'var(--color-jaune)',
    color: 'var(--color-encre)',
    shadow: 'none'
  },
  nav: {
    bg: 'var(--color-encre)',
    bgHover: 'var(--color-encre)',
    color: 'var(--color-creme)',
    shadow: 'none'
  }
};
function Button({
  children,
  variant = 'primary',
  href = '#',
  showArrow = true,
  onClick
}) {
  const [hover, setHover] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.8rem',
      borderRadius: 'var(--radius-pill)',
      padding: variant === 'nav' ? '.72rem 1.1rem' : '1rem 1.35rem',
      background: hover ? v.bgHover : v.bg,
      color: v.color,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: variant === 'nav' ? '.78rem' : '.83rem',
      letterSpacing: variant === 'nav' ? 'var(--tracking-nav)' : 'var(--tracking-button)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      boxShadow: v.shadow,
      transition: 'transform .2s, background .2s',
      transform: hover ? 'translateY(-3px)' : 'none'
    }
  }, children, showArrow && variant !== 'nav' ? /*#__PURE__*/React.createElement("span", null, '>') : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  color
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 1rem',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 'var(--text-eyebrow-size)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      lineHeight: 1.2,
      color: color || 'inherit'
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/CourseCard.jsx
try { (() => {
function CourseCard({
  index = 'i',
  eyebrow = 'Porte 01',
  title,
  copy,
  linkLabel = 'Découvrir cette porte',
  image,
  imageAlt = '',
  reverse = false,
  isPortrait = false
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: reverse ? '1.1fr .9fr' : '.9fr 1.1fr',
      minHeight: 430,
      background: '#fff',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 2 : 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(2rem, 5vw, 5rem)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: "var(--color-encre)"
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 1.4rem',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      letterSpacing: 'var(--letter-heading)',
      lineHeight: 'var(--lh-display)',
      fontSize: 'var(--size-h3)',
      color: 'var(--color-encre)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 420,
      margin: 0,
      fontFamily: 'var(--font-body)',
      color: 'var(--color-encre)',
      lineHeight: 'var(--lh-body)'
    }
  }, copy), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      marginTop: '1.3rem',
      color: 'var(--color-orange)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '.75rem',
      letterSpacing: 'var(--tracking-ticker)',
      textTransform: 'uppercase',
      textDecoration: 'none'
    }
  }, linkLabel, " ", '>')), /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 0 : 2,
      position: 'relative',
      overflow: 'hidden',
      height: 430,
      background: isPortrait ? 'var(--color-lavande)' : 'var(--color-vert-clair)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '1.2rem',
      left: '1.2rem',
      zIndex: 1,
      display: 'grid',
      placeItems: 'center',
      width: '2.7rem',
      height: '2.7rem',
      borderRadius: '50%',
      background: 'var(--color-jaune)',
      color: 'var(--color-encre)',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.2rem'
    }
  }, index), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: isPortrait ? 'contain' : 'cover'
    }
  })));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/core/NavBar.jsx
try { (() => {
function NavBar({
  links = ['Le parcours', "L'univers", 'Émilie'],
  ctaLabel = 'Entrer',
  overlay = false
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.2rem var(--gutter)',
      color: overlay ? 'var(--color-encre)' : 'var(--text-primary)',
      position: overlay ? 'absolute' : 'static',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 5,
      fontFamily: 'var(--font-body)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-wordmark)',
      letterSpacing: '-.04em',
      textDecoration: 'none',
      color: 'inherit'
    }
  }, "\xC9milie Naturelle."), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(1rem, 2.5vw, 2.4rem)',
      fontSize: '.78rem',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "nav",
    showArrow: false
  }, ctaLabel)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/core/OfferCard.jsx
try { (() => {
function OfferCard({
  eyebrow = 'Formation en ligne',
  title,
  copy,
  meta,
  ctaLabel = 'Voir le parcours'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-creme)',
      color: 'var(--color-encre)',
      padding: 'clamp(2rem, 5vw, 4rem)',
      borderRadius: 'var(--radius-card)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 1rem',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2.1rem, 4vw, 4rem)',
      letterSpacing: 'var(--letter-heading)',
      lineHeight: 'var(--lh-display)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 500,
      fontFamily: 'var(--font-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, copy), meta ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700
    }
  }, meta) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "dark"
  }, ctaLabel)));
}
Object.assign(__ds_scope, { OfferCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/OfferCard.jsx", error: String((e && e.message) || e) }); }

// components/core/OrganicPhotoFrame.jsx
try { (() => {
function OrganicPhotoFrame({
  src,
  alt = '',
  rotate = -4,
  width = 390
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: `min(${width}px, 100%)`,
      margin: 'auto',
      overflow: 'hidden',
      borderRadius: 'var(--radius-photo-organic)',
      transform: `rotate(${rotate}deg)`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { OrganicPhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/OrganicPhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/PillarRow.jsx
try { (() => {
function PillarRow({
  number = 'i',
  title,
  copy
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr 1.2fr 40px',
      gap: '1.5rem',
      alignItems: 'center',
      padding: '1.7rem 0',
      borderBottom: '1px solid var(--border-inverse-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-jaune)',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '2rem'
    }
  }, number), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
      letterSpacing: 'var(--letter-heading)',
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 450,
      fontFamily: 'var(--font-body)',
      color: '#fff',
      lineHeight: 'var(--lh-body)'
    }
  }, copy), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.6rem',
      textAlign: 'right',
      color: '#fff'
    }
  }, '>'));
}
Object.assign(__ds_scope, { PillarRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PillarRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Ticker.jsx
try { (() => {
function Ticker({
  items = ['Lire les signaux', 'retrouver ton rythme', 'habiter ta santé'],
  background = 'var(--color-orange)',
  speed = 24
}) {
  const text = items.join(' · ') + ' · ';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background,
      color: '#fff',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '.9rem 0'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes emilie-ticker-slide{to{transform:translateX(-50%)}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: '2.8rem',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '.8rem',
      letterSpacing: 'var(--tracking-ticker)',
      textTransform: 'uppercase',
      animation: `emilie-ticker-slide ${speed}s linear infinite`
    }
  }, /*#__PURE__*/React.createElement("span", null, text, text)));
}
Object.assign(__ds_scope, { Ticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Ticker.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.OfferCard = __ds_scope.OfferCard;

__ds_ns.OrganicPhotoFrame = __ds_scope.OrganicPhotoFrame;

__ds_ns.PillarRow = __ds_scope.PillarRow;

__ds_ns.Ticker = __ds_scope.Ticker;

})();
