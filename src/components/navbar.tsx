import { navLinks } from '@/app/constants/nav-links';
import { technologies } from '@/app/constants/technologies';
import { ShieldCheck } from 'lucide-react';
const Navbar = () => {
  return (
    <div className='relative h-96 container'>
      <div className={'absolute -bottom-36 '}>
        <div className='flex items-end gap-8 mb-4'>
          <img className='size-52 rounded-md ' src='avatar.jpg' alt='' />
          <nav className='mb-5 hidden md:flex gap-6'>
            {navLinks.map((link, index) => {
              const { label, icon: Icon } = link;
              return (
                <a
                  key={index}
                  className='flex items-center justify-center gap-1'
                  href=''>
                  <Icon size={15} /> {label}
                </a>
              );
            })}
          </nav>
        </div>
        <div>
          <h1 className='text-2xl md:text-3xl font-semibold flex items-center gap-1 text-gray-700'>
            Abdelmounim AINOU
            <ShieldCheck size={30} className='text-blue-400' />
          </h1>
          <div className='flex gap-2 items-center'>
            {' '}
            <span className='font-light text-lg'>@fontend-developer </span>
            <ul className='flex items-center gap-1 text-2xl'>
              {technologies.map((tech, index) => {
                const { icon: Icon, color } = tech;
                return (
                  <li key={index}>
                    <Icon color={color} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
