
import image from '../assets/Echoes9.png';

function Header() {
  return (
    <div>
      <img src={image} alt="Echoes logo" style={{ width: '100%', minHeight: '320px'}} />
    </div>
  );
}

export default Header;