import React from 'react';
import { Searchbar } from 'react-native-paper';


const SearchBar: React.FC = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
 
    console.log(searchQuery);
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    );
  };
  
  export default SearchBar;
  