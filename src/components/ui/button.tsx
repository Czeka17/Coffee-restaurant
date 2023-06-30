import classes from './button.module.css'
import { ReactNode } from 'react';
interface ButtonProps {
    children: ReactNode;
  }
function Button({children}:ButtonProps){
    return <button className={classes.button}>{children}</button>
}
export default Button;