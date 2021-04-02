import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/history">history</Link>
          </li>
          <li>
            <Link href="/users">users</Link>
          </li>
        </ul>
      </header>
      {children}
      <footer> footer part</footer>
    </div>
  );
};

export default Layout;
