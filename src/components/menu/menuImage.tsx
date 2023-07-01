import { ReactNode } from 'react'
import classes from './menuImage.module.css'
interface MenuImageProps{
    children: ReactNode
}
function MenuImage({children}: MenuImageProps){
    return <div className={classes.menuImage}>
    <h3>{children}</h3>
</div>
}
export default MenuImage