import './Link.scss'

const Link = ({children, ...props}) => {
  return <a {...props}><p>{children}</p></a>;
};

export default Link;

