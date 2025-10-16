import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-base' },
    md: { icon: 'w-10 h-10', text: 'text-lg' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl' }
  };

  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon with Hexagon Shape */}
      <div className={`${sizes[size].icon} relative group`}>
        {/* Outer hexagon with gradient */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="50%" stopColor="#374151" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* Main hexagon shape */}
          <polygon 
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
            fill="url(#logoGradient)" 
            filter="url(#shadow)"
            className="transition-all duration-300 group-hover:opacity-90"
          />
          
          {/* Inner design - Letter F stylized */}
          <g fill="white" className="transition-all duration-300 group-hover:scale-110" transform-origin="center">
            {/* Abstract F/H letter design */}
            <rect x="30" y="30" width="8" height="40" rx="2" />
            <rect x="30" y="30" width="25" height="8" rx="2" />
            <rect x="30" y="46" width="20" height="8" rx="2" />
            <rect x="62" y="30" width="8" height="40" rx="2" />
            
            {/* Decorative dots */}
            <circle cx="44" cy="62" r="3" opacity="0.8" />
            <circle cx="56" cy="62" r="3" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`${sizes[size].text} font-semibold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent`}>
            FreelanceHub
          </span>
          <span className="text-xs text-gray-500 -mt-0.5">
            Creative Community
          </span>
        </div>
      )}
    </Link>
  );
}

// Simple icon-only version
export function LogoIcon({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  return (
    <div className={`${sizes[size]} ${className} relative group`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1f2937" />
            <stop offset="50%" stopColor="#374151" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          <filter id="iconShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        <polygon 
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
          fill="url(#iconGradient)" 
          filter="url(#iconShadow)"
          className="transition-all duration-300 group-hover:opacity-90"
        />
        
        <g fill="white" className="transition-all duration-300 group-hover:scale-110" transform-origin="center">
          <rect x="30" y="30" width="8" height="40" rx="2" />
          <rect x="30" y="30" width="25" height="8" rx="2" />
          <rect x="30" y="46" width="20" height="8" rx="2" />
          <rect x="62" y="30" width="8" height="40" rx="2" />
          <circle cx="44" cy="62" r="3" opacity="0.8" />
          <circle cx="56" cy="62" r="3" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
