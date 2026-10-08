import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const dynamicEditsLinks = [
  'https://www.instagram.com/p/DPHCDfGCV0j/',
  'https://www.instagram.com/p/DIl8iXosAcr/',
  'https://www.instagram.com/p/DEkKF1Xy6mS/',
  'https://www.instagram.com/p/DHF1bzRzW3W/',
  'https://www.instagram.com/p/DQi8VJ9E-zS/',
  'https://www.instagram.com/p/DQ1y3guiQaT/',
];

const DynamicEdits = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 font-body text-sm font-light tracking-wider text-muted-foreground hover:text-silver transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gradient-silver glow-soft mb-4">
              Dynamic Edits
            </h1>
            <div className="w-16 h-px bg-silver/50 mb-6" />
            <p className="font-body text-lg font-extralight tracking-wider text-muted-foreground max-w-2xl">
              High-energy visuals driven by rhythm and motion
            </p>
          </div>

          {/* Instagram Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {dynamicEditsLinks.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm transition-all duration-500 hover:bg-card hover:border-silver/30 hover:box-glow-silver overflow-hidden"
              >
                {/* Placeholder content - Instagram preview */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center mb-4 group-hover:border-silver/30 group-hover:bg-silver/10 transition-all duration-500">
                    <svg
                      className="w-8 h-8 text-silver group-hover:text-silver-light transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <p className="font-body text-xs font-light tracking-wider text-muted-foreground">
                    View on Instagram
                  </p>
                  <p className="font-body text-xs font-extralight tracking-wider text-muted-foreground/70 mt-2">
                    Post {index + 1}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DynamicEdits;
