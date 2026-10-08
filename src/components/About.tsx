import { useEffect, useRef, useState } from 'react';
import { Eye } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-radial-dark opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-silver/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-foreground/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 border border-border/50 mb-8">
              <Eye className="w-7 h-7 text-silver" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gradient-silver glow-soft mb-4">
              Our Vision
            </h2>
            <div className="w-16 h-px bg-silver/50 mx-auto" />
          </div>

          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="font-body text-lg md:text-xl font-extralight leading-relaxed text-center text-foreground/90">
              At <span className="text-gradient-silver font-normal">ROVS Productions</span>, we believe that every frame tells a story. 
              Our passion lies in transforming moments into timeless visual narratives that captivate, 
              inspire, and leave lasting impressions.
            </p>

            <p className="font-body text-base md:text-lg font-extralight leading-relaxed text-center text-muted-foreground">
              With an unwavering commitment to excellence and an eye for detail, we craft 
              cinematic experiences that transcend the ordinary. From concept to final cut, 
              every project receives the meticulous attention it deserves.
            </p>

            {/* Values */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {[
                { title: 'Artistry', description: 'Creative excellence in every frame' },
                { title: 'Precision', description: 'Meticulous attention to detail' },
                { title: 'Emotion', description: 'Stories that resonate deeply' },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-xl bg-card/30 border border-border/20 hover:border-silver/20 hover:bg-card/50 transition-all duration-500"
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <h3 className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm font-extralight text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
