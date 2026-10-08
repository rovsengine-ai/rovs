import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Film, Video, Camera } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Dynamic Edits',
    category: 'Videography',
    description: 'High-energy visuals driven by rhythm and motion',
    icon: Video,
    link: '/dynamic-edits',
  },
  {
    id: 2,
    title: 'Client Work',
    category: 'Content Creation',
    description: 'Compelling brand stories that resonate with your audience',
    icon: Camera,
    link: '/brand-films',
  },
  {
    id: 3,
    title: 'Commercial Projects',
    category: 'Production',
    description: 'High-end productions that elevate your brand presence',
    icon: Play,
  },
  {
    id: 4,
    title: 'Cinematic Narratives',
    category: 'Cinematography',
    description: 'Immersive visual storytelling that captures emotion and atmosphere',
    icon: Film,
  },
];

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gradient-silver glow-soft mb-4">
            Our Craft
          </h2>
          <div className="w-16 h-px bg-silver/50 mx-auto mb-6" />
          <p className="font-body text-lg font-extralight tracking-wider text-muted-foreground max-w-xl mx-auto">
            Where vision meets excellence
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={item.id}
                data-index={index}
                onClick={() => item.link && navigate(item.link)}
                className={`group relative p-8 md:p-10 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm transition-all duration-700 hover:bg-card hover:border-silver/30 hover:box-glow-silver cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/50 border border-border/50 group-hover:border-silver/30 group-hover:bg-silver/10 transition-all duration-500">
                  <Icon className="w-6 h-6 text-silver group-hover:text-silver-light transition-colors duration-300" />
                </div>

                {/* Category */}
                <span className="block font-body text-xs font-light tracking-widest uppercase text-silver/70 mb-2">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl font-light tracking-wide text-foreground mb-3 group-hover:text-gradient-silver transition-all duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm font-extralight leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-silver/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
