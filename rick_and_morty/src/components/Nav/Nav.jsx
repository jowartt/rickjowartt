import SearchBar from "./SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
     
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>

            <button>
                <Link to='/about' >ABOUT</Link>
            </button>

            <buttto>
                <Link to='/home' >HOME</Link>
            </buttto>
        </nav>
    )
}
export default Nav;