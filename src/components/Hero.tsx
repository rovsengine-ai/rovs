import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-radial-dark" />
      
      {/* Subtle animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-silver/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-foreground/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Wordmark */}
        <h1
          className={`font-display font-light tracking-wide mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <span className="block text-6xl md:text-8xl lg:text-9xl text-gradient-silver glow-soft tracking-[0.18em]">
            ROVS
          </span>
          <span className="block text-foreground/90 text-3xl md:text-4xl lg:text-5xl mt-4 font-extralight tracking-widest">
            Productions
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`font-body text-lg md:text-xl font-extralight tracking-wider text-muted-foreground max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Crafting visual stories that transcend the ordinary
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#portfolio"
            className="inline-block px-8 py-3 border border-silver/30 rounded-full font-body text-sm font-light tracking-widest uppercase text-foreground hover:bg-silver/10 hover:border-silver/50 hover:box-glow-silver transition-all duration-500"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="#portfolio"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span className="font-body text-xs tracking-widest uppercase">Explore</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
