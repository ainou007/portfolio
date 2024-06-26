'use client';
import { navbarContext } from '@/components/context';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { AboutSection } from '@/containers/about-section';
import ProjectsSection from '@/containers/projects-section';
import SkillsSection from '@/containers/skills-section';
import { cn } from '@/lib/utils';
import { useContext } from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const { isVisible } = useContext(navbarContext);
  return (
    <>
      <div
        style={{}}
        className={cn(
          'container grid grid-cols-12 gap-5',
          isVisible ? 'mt-52' : 'mt-20'
        )}>
        <main className='col-span-9 space-y-5 mb-10 '>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
        <aside className='col-span-3 sticky top-20 self-start space-y-5 '>
          <div className='shadow-main border rounded-sm p-3 text-center flex flex-col h-64 items-center justify-center '>
            <div>
              <p className='text-primary font-semibold'>Get in touche</p>
              <p className='mb-3 '>Let's work together</p>
              <Button className='px-5 text-xs gap-2'>
                <FaEnvelope /> Say Hello
              </Button>
            </div>
          </div>
          <div className='shadow-main border rounded-sm p-3 text-center flex flex-col h-64 items-center justify-center '>
            <p className='text-primary font-semibold'>Commong Soon</p>
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
}
