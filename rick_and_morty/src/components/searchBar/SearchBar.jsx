export default function SearchBar(props) {
   console.log(props);
   let msg=props.onSearch;
   console.log(msg);
   return (
      
      <div>
          <input type='search' />
         <button onClick={msg}>Agregar</button> 
      </div>
   );
}
