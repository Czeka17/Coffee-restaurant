
import AppWrapper from '../ui/wrapper';
import classes from './header.module.css'

interface HeaderProps{
    bgi: string,
    headerParagraph: string;
    headerText: string;
}
function Header({bgi,headerParagraph,headerText}: HeaderProps){
    const headerStyle = {
        backgroundImage: `url(${bgi})`,
      };
    return <header className={classes.header} style={headerStyle}>
        <div className={classes.shadow}></div>
       <AppWrapper>
       <div className={classes.headerText}>
            <h2>{headerText}</h2>
            <p>{headerParagraph}</p>
        </div>
       </AppWrapper>
    </header>
}
export default Header;
