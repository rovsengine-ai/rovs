import { useEffect, useRef, useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
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
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-background" />
      
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-silver/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div
            className={`mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 border border-border/50 mb-8">
              <Mail className="w-7 h-7 text-silver" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gradient-silver glow-soft mb-4">
              Let's Create
            </h2>
            <div className="w-16 h-px bg-silver/50 mx-auto mb-6" />
            <p className="font-body text-lg font-extralight tracking-wider text-muted-foreground max-w-xl mx-auto">
              Ready to bring your vision to life? Let's craft something extraordinary together.
            </p>
          </div>

          {/* CTA */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <a
              href="mailto:veeje.prod@icloud.com"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background rounded-full font-body text-sm font-light tracking-widest uppercase hover:bg-silver hover:text-primary-foreground transition-all duration-500 box-glow"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Additional contact info */}
          <div
            className={`mt-16 pt-16 border-t border-border/30 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="font-body text-sm font-extralight tracking-wider text-muted-foreground">
              Or reach us directly at
            </p>
            <a
              href="mailto:veeje.prod@icloud.com"
              className="font-body text-lg font-light tracking-wide text-foreground hover:text-silver transition-colors duration-300 mt-2 inline-block"
            >
              veeje.prod@icloud.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
