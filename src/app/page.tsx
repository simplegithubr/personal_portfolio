import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import GitHubStats from '@/components/GitHubStats';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sagar Hussain Sheikh | Full-Stack Developer & AI Engineer',
  description: 'Personal portfolio of Sagar Hussain Sheikh - A passionate full-stack developer specializing in Next.js, FastAPI, AI/ML, and cloud-native technologies.',
  keywords: ['portfolio', 'full-stack developer', 'AI engineer', 'Next.js', 'FastAPI', 'Python', 'React'],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubStats />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
