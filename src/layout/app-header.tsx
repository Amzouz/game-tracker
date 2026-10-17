import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Accueil", end: true },
  { to: "/add-game", label: "Ajouter un jeu" },
];

export function AppHeader() {
  return (
    <nav className="bg-primary-900">
      <div>
        <NavLink to="/">
          <span>Logo du site</span>
        </NavLink>
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end={link.end}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
