export const Header = () => {
  return (
    <div className="flex justify-center items-center w-full fixed top-3 z-10">
      <nav className="flex gap-1 border border-black/15 rounded-full p-0.5 bg-black/10 backdrop-blur">
        <a className="nav-item">
          Home
        </a>
        <a className="nav-item">
          Projects
        </a>
        <a className="nav-item">
          About
        </a>
        <a className="nav-item bg-black text-white/90 hover:bg-black/70 hover:text-white/90">
          Contact
        </a>
      </nav>
    </div>
  );
};
