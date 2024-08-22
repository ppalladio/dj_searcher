import SearchBar from '../SearchBar/SearchBar';

interface Props {}
const Header = (props: Props) => {
    return (
        <div className='my-10'>
            <div >
                <SearchBar></SearchBar>
            </div>
        </div>
    );
};
export default Header;
