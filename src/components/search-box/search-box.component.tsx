
import './search-box.styles.css';

// type SearchBoxProps = {
//   placeholder: string;
//   onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   className?: string;
// }

interface ISearchBoxProps  {
  placeholder?: string;
  className?: string;
}

interface ISearchBoxProps  {
  onChangeHandler: (a : string) => void;
} 

const SearchBox = ({ placeholder, onChangeHandler, className }: ISearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;

