import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
interface ScrollProps{
    children:ReactNode
}
const ScrollToTop = ({children}:ScrollProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div>{children}</div>
}

export default ScrollToTop;