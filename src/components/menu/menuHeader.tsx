import classes from './menuHeader.module.css'

function MenuHeader(){
    return <div className={classes.menuHeader}>
    <div className={classes.menuHeaderShadow}></div>
    <div className={classes.menuHeaderText}>
    <h2>Our Menu</h2>
    <p>Explore our wide variety of coffee options and delicious snacks made with love.</p>
    </div>
</div>
}
export default MenuHeader