import React from 'react';
import './SuperheroTable.css';

const SuperheroTable = (props) => {
    // const [props] = useState(props);

return <div className="app-container">

<h2>Exercise 4</h2>
<hr/><table>
    <thead>
        <tr>
            <th>Superhero ID</th>
            <th>Name</th>
            <th>Primary Ability</th>
            <th>Secondary Ability</th>
        </tr>
    </thead>
    <tbody>
        {props.superheroesList.map((superheroesList)=> (             
         <tr>
            <td>{superheroesList.superheroId}</td> 
            <td>{superheroesList.name}</td>
            <td>{superheroesList.primaryAbility}</td>
            <td>{superheroesList.secondaryAbility}</td>
         </tr>
    ))}
    </tbody>
  </table>
</div>
       
    }             
 
export default SuperheroTable;