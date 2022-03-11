import Link from "next/link";
const Menu = () => {
  return (
    <div className="menu">
      <ul className="ul-menu">
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/estadisticas">
            <a>Estadisticas</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
