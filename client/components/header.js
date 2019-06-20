import Link from 'next/link';


const Header = () => (
    <div id="headerStyle">
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
            float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
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
          color: white;
        }

        a:hover {
            background-color: #ddd;
  color: black;
        }

        #headerStyle{
            overflow: hidden;
            background-color: #333;
            width: 100%;
        }
      `}</style>
    </div>
);

export default Header;