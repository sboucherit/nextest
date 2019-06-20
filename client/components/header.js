import Link from 'next/link';


const Header = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>

        <Link href="/accounts">
            <a>My accounts</a>
        </Link>

        <Link href="/pressf">
            <a>PressF</a>
        </Link>

        <Link href="/dapp">
            <a>My dapp</a>
        </Link>
        <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
);

export default Header;