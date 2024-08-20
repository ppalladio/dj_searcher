import SearchBar from '../SearchBar/SearchBar';

interface Props {}
const Header = (props: Props) => {
    return (
        <div>
            <div >
                <SearchBar></SearchBar>
            </div>
        </div>
    );
};
export default Header;
