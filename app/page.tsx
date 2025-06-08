'use client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/header';
import SocialIcons from './components/socialIcons';
import Footer from './components/footer';
import Image from 'next/image';
import GarImg from '@/public/images/gartunz.jpeg';
import Memories from './components/memories';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '15';
    canvas.style.pointerEvents = 'none';

    const parent = document.querySelector('.relative');
    if (!parent) return;

    parent.appendChild(canvas);

    let ctx: CanvasRenderingContext2D | null = null;
    let animationId: number;

    const init = () => {
      ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;

        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 0.5;
          this.speedX = Math.random() * 1 - 0.5;
          this.speedY = Math.random() * 1 - 0.5;
          this.color = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
          if (!ctx) return;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }

      const particles: Particle[] = Array.from({ length: 100 }, () => new Particle());

      const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          p.update();
          p.draw();
        });
        animationId = requestAnimationFrame(animate);
      };
      animate();

      const handleResize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };

      window.addEventListener('resize', handleResize);

      cleanup = () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
        canvas.remove();
      };
    };

    let cleanup = () => {};
    requestAnimationFrame(init);

    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-[#000]/90
 text-[#f1f1f1]">
      <Head>
        <title>Gar Tunz | Musician</title>
        <meta name="description" content="Official portfolio of musician Gar Tunz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <Header />

        <main className="min-h-[80vh] flex flex-col items-center justify-center text-center mt-4">
          <div className="relative">
            <Image
              src={GarImg}
              alt="Gar Tunz"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-accent shadow-2xl transition-transform hover:scale-105"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-8 mb-4 gradient-text">
            GarTunso
          </h1>

          <p className="text-xl sm:text-2xl font-light text-secondary/80 mb-8 max-w-2xl mx-auto leading-relaxed tracking-wide">
            I'm Gartunso, Naija born and raised, I make soundscapes that hit deep and move the soul.
            Mixing vibes, pain, and truth into every track. Just getting started, but the grind is
            real and the vision clear.
          </p>

          <Memories />
          <SocialIcons />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
