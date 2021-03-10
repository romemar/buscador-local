import SearchResultsItem from "./SearchResultsItem"
import "./style.css";

export default function SearchResults({results, isSearching}){

    return (
         <div className="tareas">
            {!results.length && isSearching && <p>No hay resultados para esta búsqueda</p>}
            {results?.map((taskDetail) => 
                <SearchResultsItem
                key={taskDetail.id.toString()}
                nombre={taskDetail.nombre}
                fecha={taskDetail.fecha}
                descr={taskDetail.descr}
                />
            )}
        </div>
    

    );

}