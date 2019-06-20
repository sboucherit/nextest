import Header from './header';


const Layout = props => (
    <div>

    <Header />
    {props.children}

    <style jsx global>{`
    * {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  }
  
  body {
  margin: 3px;
  font-family: Arial, Helvetica, sans-serif;
  height: auto;
}


    `}</style>
    </div>
);

export default Layout;