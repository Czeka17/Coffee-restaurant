import classes from './header.module.css'
function Header(){
    return <header className={classes.header}>
        <div className={classes.shadow}></div>
        <div className={classes.headerText}>
            <h1>CSSpresso: The perfect blend of caffeine and code</h1>
            <p>A haven for IT professionals, CSSpresso is the ideal spot for a much-needed caffeine boost and coding session.</p>
        </div>
    </header>
}
export default Header;