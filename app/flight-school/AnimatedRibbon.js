import React from 'react';

const AnimatedRibbon = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center bg-gray-900">
      <svg viewBox="0 0 900 300" className="w-full h-full max-w-4xl">
        <defs>
          {/* Enhanced shimmering ribbon gradient */}
          <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ff6666', stopOpacity: 1}}>
              <animate attributeName="stop-color" dur="2.5s" repeatCount="indefinite" 
                       values="#ff6666;#ff3333;#cc1111;#ff4444;#ff6666"/>
            </stop>
            <stop offset="30%" style={{stopColor: '#dd3333', stopOpacity: 1}}>
              <animate attributeName="stop-color" dur="2.5s" repeatCount="indefinite" 
                       values="#dd3333;#bb2222;#991111;#cc2222;#dd3333"/>
            </stop>
            <stop offset="70%" style={{stopColor: '#cc2222', stopOpacity: 1}}>
              <animate attributeName="stop-color" dur="2.5s" repeatCount="indefinite" 
                       values="#cc2222;#aa1111;#881111;#bb1111;#cc2222"/>
            </stop>
            <stop offset="100%" style={{stopColor: '#991111', stopOpacity: 1}}>
              <animate attributeName="stop-color" dur="2.5s" repeatCount="indefinite" 
                       values="#991111;#771111;#550000;#881111;#991111"/>
            </stop>
          </linearGradient>
          
          {/* Moving glossy highlight */}
          <linearGradient id="glossHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'rgba(255,255,255,0)', stopOpacity: 0}}/>
            <stop offset="20%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}}/>
            <stop offset="40%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}}/>
            <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0)', stopOpacity: 0}}/>
            <animateTransform attributeName="gradientTransform" type="translate" dur="3s" repeatCount="indefinite"
                              values="0 0; 900 0; 0 0"/>
          </linearGradient>
          
          {/* Light streak gradient */}
          <radialGradient id="lightStreak" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.9}}/>
            <stop offset="50%" style={{stopColor: '#ffcccc', stopOpacity: 0.6}}/>
            <stop offset="100%" style={{stopColor: '#ff6666', stopOpacity: 0}}/>
          </radialGradient>
          
          {/* Particle gradient for magical trail */}
          <radialGradient id="particleGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{stopColor: '#ffaaaa', stopOpacity: 0.9}}/>
            <stop offset="100%" style={{stopColor: '#ff3333', stopOpacity: 0}}/>
          </radialGradient>

          {/* Secondary wave gradient */}
          <linearGradient id="secondaryWave" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'rgba(255,255,255,0.3)', stopOpacity: 1}}/>
            <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0)', stopOpacity: 0}}/>
          </linearGradient>
        </defs>

        {/* Main ribbon with enhanced wave animation */}
        <path fill="url(#ribbonGradient)" stroke="none">
          <animate attributeName="d" dur="4s" repeatCount="indefinite" 
                   values="M50,150 
                           Q120,110 180,130 
                           Q240,150 300,120 
                           Q360,90 420,140 
                           Q480,170 540,130 
                           Q600,100 660,150 
                           Q720,180 780,120 
                           Q820,100 850,110 
                           L850,130 
                           Q820,120 780,140 
                           Q720,200 660,170 
                           Q600,120 540,150 
                           Q480,190 420,160 
                           Q360,110 300,140 
                           Q240,170 180,150 
                           Q120,130 50,170 Z;
                           
                           M50,150 
                           Q120,170 180,140 
                           Q240,110 300,160 
                           Q360,190 420,130 
                           Q480,100 540,170 
                           Q600,200 660,120 
                           Q720,90 780,160 
                           Q820,180 850,130 
                           L850,150 
                           Q820,200 780,180 
                           Q720,110 660,140 
                           Q600,220 540,190 
                           Q480,120 420,150 
                           Q360,210 300,180 
                           Q240,130 180,160 
                           Q120,190 50,170 Z;
                           
                           M50,150 
                           Q120,130 180,160 
                           Q240,180 300,140 
                           Q360,110 420,170 
                           Q480,200 540,140 
                           Q600,110 660,180 
                           Q720,210 780,140 
                           Q820,110 850,150 
                           L850,170 
                           Q820,130 780,160 
                           Q720,230 660,200 
                           Q600,130 540,160 
                           Q480,220 420,190 
                           Q360,130 300,160 
                           Q240,200 180,180 
                           Q120,150 50,170 Z;
                           
                           M50,150 
                           Q120,110 180,130 
                           Q240,150 300,120 
                           Q360,90 420,140 
                           Q480,170 540,130 
                           Q600,100 660,150 
                           Q720,180 780,120 
                           Q820,100 850,110 
                           L850,130 
                           Q820,120 780,140 
                           Q720,200 660,170 
                           Q600,120 540,150 
                           Q480,190 420,160 
                           Q360,110 300,140 
                           Q240,170 180,150 
                           Q120,130 50,170 Z"/>
        </path>

        {/* Secondary wave layer for more depth */}
        <path fill="url(#secondaryWave)" opacity="0.4">
          <animate attributeName="d" dur="3s" repeatCount="indefinite" 
                   values="M50,150 
                           Q130,125 200,145 
                           Q270,165 340,135 
                           Q410,105 480,155 
                           Q550,185 620,145 
                           Q690,115 760,165 
                           Q820,185 850,155 
                           L850,165 
                           Q820,195 760,175 
                           Q690,125 620,155 
                           Q550,195 480,165 
                           Q410,115 340,145 
                           Q270,175 200,155 
                           Q130,135 50,160 Z;
                           
                           M50,150 
                           Q130,165 200,135 
                           Q270,115 340,155 
                           Q410,185 480,135 
                           Q550,105 620,165 
                           Q690,195 760,135 
                           Q820,105 850,135 
                           L850,145 
                           Q820,115 760,145 
                           Q690,205 620,175 
                           Q550,115 480,145 
                           Q410,195 340,165 
                           Q270,125 200,145 
                           Q130,175 50,160 Z;
                           
                           M50,150 
                           Q130,125 200,145 
                           Q270,165 340,135 
                           Q410,105 480,155 
                           Q550,185 620,145 
                           Q690,115 760,165 
                           Q820,185 850,155 
                           L850,165 
                           Q820,195 760,175 
                           Q690,125 620,155 
                           Q550,195 480,165 
                           Q410,115 340,145 
                           Q270,175 200,155 
                           Q130,135 50,160 Z"/>
        </path>

        {/* Glossy highlight overlay */}
        <path fill="url(#glossHighlight)" opacity="0.7">
          <animate attributeName="d" dur="4s" repeatCount="indefinite" 
                   values="M50,150 
                           Q120,110 180,130 
                           Q240,150 300,120 
                           Q360,90 420,140 
                           Q480,170 540,130 
                           Q600,100 660,150 
                           Q720,180 780,120 
                           Q820,100 850,110 
                           L850,120 
                           Q820,110 780,130 
                           Q720,190 660,160 
                           Q600,110 540,140 
                           Q480,180 420,150 
                           Q360,100 300,130 
                           Q240,160 180,140 
                           Q120,120 50,160 Z;
                           
                           M50,150 
                           Q120,170 180,140 
                           Q240,110 300,160 
                           Q360,190 420,130 
                           Q480,100 540,170 
                           Q600,200 660,120 
                           Q720,90 780,160 
                           Q820,180 850,130 
                           L850,140 
                           Q820,190 780,170 
                           Q720,100 660,130 
                           Q600,210 540,180 
                           Q480,110 420,140 
                           Q360,200 300,170 
                           Q240,120 180,150 
                           Q120,180 50,160 Z;
                           
                           M50,150 
                           Q120,130 180,160 
                           Q240,180 300,140 
                           Q360,110 420,170 
                           Q480,200 540,140 
                           Q600,110 660,180 
                           Q720,210 780,140 
                           Q820,110 850,150 
                           L850,160 
                           Q820,120 780,150 
                           Q720,220 660,190 
                           Q600,120 540,150 
                           Q480,210 420,180 
                           Q360,120 300,150 
                           Q240,190 180,170 
                           Q120,140 50,160 Z;
                           
                           M50,150 
                           Q120,110 180,130 
                           Q240,150 300,120 
                           Q360,90 420,140 
                           Q480,170 540,130 
                           Q600,100 660,150 
                           Q720,180 780,120 
                           Q820,100 850,110 
                           L850,120 
                           Q820,110 780,130 
                           Q720,190 660,160 
                           Q600,110 540,140 
                           Q480,180 420,150 
                           Q360,100 300,130 
                           Q240,160 180,140 
                           Q120,120 50,160 Z"/>
        </path>

        {/* Multiple light streaks traveling along ribbon */}
        <circle r="12" fill="url(#lightStreak)" opacity="0.8">
          <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
            <mpath href="#ribbonPath"/>
          </animateMotion>
        </circle>
        
        <circle r="8" fill="url(#lightStreak)" opacity="0.6">
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" begin="2s">
            <mpath href="#ribbonPath"/>
          </animateMotion>
        </circle>
        
        {/* Hidden path for light streak motion */}
        <path id="ribbonPath" d="M50,160 Q130,120 200,140 Q270,160 340,130 Q410,100 480,150 Q550,180 620,140 Q690,110 760,150 Q820,170 850,130" 
              fill="none" stroke="none"/>

        {/* Enhanced flutter particles at left end */}
        <g opacity="0.8">
          {[...Array(6)].map((_, i) => (
            <circle key={`left-${i}`} cx="50" cy="150" r="3" fill="url(#particleGrad)">
              <animate attributeName="cx" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" 
                       values={`50;${30 - i * 3};${40 - i * 2};${35 - i};50`}/>
              <animate attributeName="cy" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" 
                       values={`${150 + i * 5};${140 + i * 3};${160 + i * 4};${155 + i * 2};${150 + i * 5}`}/>
              <animate attributeName="r" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" 
                       values={`${3 - i * 0.3};${1 + i * 0.2};${4 - i * 0.4};${2 + i * 0.1};${3 - i * 0.3}`}/>
              <animate attributeName="opacity" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" 
                       values="0.8;0.3;0.9;0.5;0.8"/>
            </circle>
          ))}
        </g>

        {/* Enhanced flutter particles at right end */}
        <g opacity="0.8">
          {[...Array(6)].map((_, i) => (
            <circle key={`right-${i}`} cx="850" cy="120" r="3" fill="url(#particleGrad)">
              <animate attributeName="cx" dur={`${2.2 + i * 0.4}s`} repeatCount="indefinite" 
                       values={`850;${870 + i * 3};${860 + i * 2};${865 + i};850`}/>
              <animate attributeName="cy" dur={`${2.2 + i * 0.4}s`} repeatCount="indefinite" 
                       values={`${120 + i * 4};${110 + i * 2};${130 + i * 3};${125 + i};${120 + i * 4}`}/>
              <animate attributeName="r" dur={`${2.2 + i * 0.4}s`} repeatCount="indefinite" 
                       values={`${3 - i * 0.2};${1 + i * 0.3};${4 - i * 0.3};${2 + i * 0.2};${3 - i * 0.2}`}/>
              <animate attributeName="opacity" dur={`${2.2 + i * 0.4}s`} repeatCount="indefinite" 
                       values="0.8;0.4;0.9;0.6;0.8"/>
            </circle>
          ))}
        </g>

        {/* Enhanced sparkle effects along the ribbon */}
        <g opacity="0.6">
          {[200, 350, 500, 650, 750].map((x, i) => (
            <circle key={`sparkle-${i}`} cx={x} cy="140" r="1" fill="#ffffff">
              <animate attributeName="opacity" dur="5s" repeatCount="indefinite" 
                       values={`0;${i === 0 ? '1' : '0'};${i === 1 ? '1' : '0'};${i === 2 ? '1' : '0'};${i === 3 ? '1' : '0'};${i === 4 ? '1' : '0'}`}/>
              <animate attributeName="r" dur="5s" repeatCount="indefinite" 
                       values={`1;${i === 0 ? '4' : '1'};${i === 1 ? '4' : '1'};${i === 2 ? '4' : '1'};${i === 3 ? '4' : '1'};${i === 4 ? '4' : '1'}`}/>
              <animate attributeName="cy" dur="4s" repeatCount="indefinite" 
                       values={`${140 + i * 5};${130 + i * 3};${150 + i * 4};${145 + i * 2};${140 + i * 5}`}/>
            </circle>
          ))}
        </g>

        {/* Micro ripples for extra wave detail */}
        <path fill="rgba(255,255,255,0.2)" stroke="none" opacity="0.5">
          <animate attributeName="d" dur="1.5s" repeatCount="indefinite" 
                   values="M50,150 Q150,145 250,155 Q350,150 450,160 Q550,155 650,165 Q750,160 850,170;
                           M50,150 Q150,155 250,145 Q350,160 450,150 Q550,165 650,155 Q750,170 850,160;
                           M50,150 Q150,145 250,155 Q350,150 450,160 Q550,155 650,165 Q750,160 850,170"/>
        </path>
      </svg>
    </div>
  );
};

export default AnimatedRibbon;
