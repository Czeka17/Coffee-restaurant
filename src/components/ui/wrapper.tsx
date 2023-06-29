import React,{ReactNode} from 'react';
import classes from './wrapper.module.css';
interface AppWrapperProps {
    children: ReactNode;
  }
const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  );
};

export default AppWrapper;
