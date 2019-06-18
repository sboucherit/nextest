import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>

        <Link href="/accounts">
            <a style={linkStyle}>My accounts</a>
        </Link>

        <Link href="/pressf">
            <a style={linkStyle}>PressF</a>
        </Link>

        <Link href="/dapp">
            <a style={linkStyle}>My dapp</a>
        </Link>
    </div>
);

export default Header;