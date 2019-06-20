import Header from './header';


const Layout = props => (
    <div id="genLayout">

    <Header />
    {props.children}

    <style jsx global>{`
    * {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  }
  
  body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

    #genLayout{
      margin: 2px;
      padding: 2px;
      border: '3px solid black';
      }

    `}</style>
    </div>
);

export default Layout;