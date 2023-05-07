import { NavLink } from 'react-router-dom';
import { links } from '../../data';

export default function NavBar() {
  const isMobile = screen.width <= 760;

  return (
    <>
      {isMobile && (
        <section className="w-full bg-slate-400 text-center flex justify-evenly pt-4 pb-10 lg:pb-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.route}
              className={({ isActive }) =>
                'font-bold text-xl my-auto ' +
                (isActive ? 'text-white bg-slate-800 p-2 rounded' : '')
              }
            >
              {link.name}
            </NavLink>
          ))}
        </section>
      )}
    </>
  );
}
