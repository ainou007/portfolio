import Footer from '@/components/footer';
import Header from '@/components/header';
import { buttonVariants } from '@/components/ui/button';
import { AboutSection } from '@/containers/about-section';
import ProjectsSection from '@/containers/projects-section';
import SkillsSection from '@/containers/skills-section';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
export const revalidate = 0; // revalidate at most every hour

export default function Home() {
  return (
    <>
      <Header />

      <div className='container gap-4 grid grid-cols-12 mt-8 '>
        <main className='col-span-full lg:col-span-8 xl:col-span-10 space-y-5 '>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
        <aside className='col-span-full lg:col-span-4 xl:col-span-2 static md:sticky top-20 self-start space-y-5'>
          <div className='shadow-main border rounded-sm p-3 text-center flex flex-col h-64 items-center justify-center '>
            <div>
              <p className='text-primary font-semibold'>Get in touche</p>
              <p className='mb-3 '>Let&apos;s work together</p>
              <Link
                href={'mailto:ainou.abdelmounim@gmail.com'}
                className={cn(buttonVariants({ variant: 'default' }))}>
                <FaEnvelope /> Say Hello
              </Link>
            </div>
          </div>
          <div className='shadow-main border rounded-sm p-3 text-center flex flex-col h-64 items-center justify-center '>
            <p className='text-primary font-semibold'>Comming Soon</p>
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
}
