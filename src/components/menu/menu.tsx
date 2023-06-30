import Button from '../ui/button';
import AppWrapper from '../ui/wrapper';
import classes from './menu.module.css'

function Menu(){
    const menuItems = [
        {
            title: 'CSSpresso Classic',
            description:'Our signature espresso shot, expertly brewed to perfection. Served with a velvety crema and a rich, smooth flavor. Price: $2.99'
        },
        {
            title: 'Matcha Green Tea Latte',
            description:'A delicious blend of matcha green tea powder and steamed milk, providing a boost of antioxidants and energy. Price: $4.99'
        },
        {
            title: 'Java Chip Frappuccino',
            description: 'Our famous blended beverage featuring a creamy blend of java chips, coffee, and milk, topped with whipped cream. Price: $4.99'
        },
        {
            title: 'Chai Tea Latte',
            description: 'A perfect blend of black tea, spices, and steamed milk, providing a warm and comforting beverage. Price: $4.49'
        },
        {
            title:'Caramel Macchiato',
            description: 'Freshly steamed milk combined with vanilla syrup and espresso, topped with a sweet caramel drizzle. Price: $4.49'
        },
        {
            title: 'Cappuccino',
            description: 'A classic blend of espresso and steamed milk, topped with a light, airy foam. Price: $3.99'
        },
        {
            title: 'Hazelnut Latte',
            description: 'A delicious blend of espresso and steamed milk, flavored with a nutty hazelnut syrup. Price: $4.49'
        },
        {
            title: 'Americano',
            description:'A strong and bold espresso shot, topped with hot water for a smooth and satisfying coffee experience. Price: $2.99'
        }
    ]
    return(
        <section className={classes.menu}>
            <AppWrapper>
            <div className={classes.menuContainer}>
                <h2>OUR MENU</h2>
                <h3>Get Relax. Eat.</h3>
                <div>
                    <ul className={classes.menuList}>
                        {menuItems.map((item) => <li><p>{item.title}</p><p>{item.description}</p><hr/></li>)}
                    </ul>
                </div>
                <div><Button>VIEW ALL MENU</Button></div>
            </div>
            </AppWrapper>
            <div className={classes.menuImage}><div className={classes.menuImageShadow}></div><div className={classes.menuImageItems}>
            <div className={classes.menuImageText}><h3>CSSpresso: Where Coding Meets Caffeine</h3><p>At CSSpresso, we offer more than just a cup of coffee – we offer an inspiring environment that fuels your productivity and creativity. Our menu features a variety of specialty coffee drinks, snacks, and light bites to help you power through your coding projects. With a quiet and cozy atmosphere, it’s easy to stay focused and get into the zone.</p></div><div><Button>VIEW ALL MENU</Button></div></div></div>
        </section>
    )
}
export default Menu;