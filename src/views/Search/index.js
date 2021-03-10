
import {useState} from "react";
import SearchBox from './components/SearchBox';
import data from "../../data/tareas.json";
import "./style.css";
import SearchResults from "./components/SearchResults";

export default function Search() {

    const [isAtTop, setIsAtTop] = useState (false);
    const [tareasData, setTareasData]=useState(data);
    const [results, setResults] = useState([]);

    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResults([]);
    }
    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if (tareasData?.length){
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = tareasData.filter((value) => (
             value.nombre.toLowerCase().includes(searchTextMinus))
            );
            setResults(filteredData);
        }
        
    };

    return (
        //estilos condicionales
       <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
           <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} isSearching={isAtTop}/>
           <SearchResults  results={results} isSearching={isAtTop}/>
       </div>
    );
} 