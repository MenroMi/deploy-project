import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1em',
        width: '100%',
        height: '1.5rem',
        backgroundColor: '#dedede',
        padding: '0.5em',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/account">Account</Link>
      <Link to="/faq">FAQ</Link>
    </div>
  );
};

export default Navigation;
