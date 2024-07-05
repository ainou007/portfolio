import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdelmounim AINOU | front end web developer ',
  description:
    'I am a junior front-end developer skilled in creating engaging and dynamic web applications. My expertise includes HTML, CSS, and JavaScript for structuring and styling web content. I use TypeScript for enhanced code quality and maintainability. Proficient in ReactJS, I build efficient and reusable UI components. Additionally, I utilize Tailwind CSS for streamlined styling and Shadcn for robust component libraries.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={cn(
          inter.className,
          'text-muted-foreground relative scroll-pt-56'
        )}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
