import MenuBar from '../MenuBar/MenuBar';
import SearchBar from '../SearchBar/SearchBar';
import UserMenu from '../UserMenu/UserMenu';

interface Props {}
const Header = (props: Props) => {
    return (
        <div className="mt-10 w-full">
            <div className="flex flex-row justify-between items-center">
                <MenuBar></MenuBar>
                <UserMenu></UserMenu>
            </div>
            <div className="my-10">
                <SearchBar></SearchBar>
            </div>
        </div>
    );
};
export default Header;
