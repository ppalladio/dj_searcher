import MenuBar from '../MenuBar/MenuBar';
import SearchBar from '../Search/SearchBar/SearchBar';
import UserMenu from '../UserMenu/UserMenu';

interface Props {}
const Header = (props: Props) => {
    return (
        <div className="mt-10 w-full px-10 flex flex-row justify-between items-center mb-10">
            <MenuBar></MenuBar>
            <UserMenu></UserMenu>
        </div>
    );
};
export default Header;
