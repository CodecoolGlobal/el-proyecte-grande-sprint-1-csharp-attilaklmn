import { Link } from "react-router-dom";

const ProgrammeTable = (props) =>{

    return (
      <div className="EmployeeTable">
        <table>
          <tbody>
            {props.programmes.map(programme => (
              <tr key={programme.id}>
                <td>{programme.movieTitle}</td>
                <td>{programme.airTime}</td>
                <td>
                  <Link to={("/purchase/") + programme.id}>
                    <button type="button">Buy Ticket</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
            }
    export default ProgrammeTable;

    /*
    <thead>
            <tr>
              {(!props.equipmentCheck && !props.missingCheck) &&
              <th id='present'>
                Present
              </th>}
            <ThTable text='Name' data={props.employees} setData={props.setData} />
            <ThTable text={props.equipmentCheck ? 'Type' : 'Level'} data={props.employees} setData={props.setData} />
            <ThTable text={props.equipmentCheck ? 'Amount' : 'Position'} data={props.employees} setData={props.setData} />
            {!props.equipmentCheck &&
            <ThTable text='Weapon' data={props.employees} setData={props.setData} />}
            <th />
            </tr>
          </thead>*/