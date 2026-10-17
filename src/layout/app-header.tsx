import { NavLink } from "react-router";
import { Gamepad2 } from "lucide-react";
import { SquarePlus } from "lucide-react";

const links = [
  {
    to: "/",
    label: "Accueil",
    icon: <Gamepad2 size={32} />,
    end: true,
  },
  {
    to: "/add-game",
    label: "Ajouter un jeu",
    icon: <SquarePlus size={32} />,
  },
];

export function AppHeader() {
  return (
    <nav className="flex flex-col items-center bg-primary-950 text-primary-50 px-6 py-10 rounded-3xl">
      <ul className="flex flex-col gap-6">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `block p-3 rounded-xl transition-colors ${
                  isActive
                    ? "bg-primary-900 shadow-[0_0_12px_var(--color-primary-900)]"
                    : "hover:bg-primary-500 "
                }`
              }
            >
              {link.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
