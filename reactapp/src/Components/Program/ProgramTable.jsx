import { Link } from "react-router-dom";

const ProgramTable = (props) =>{

    return (
      <div className="EmployeeTable">
        <table>
          <tbody>
            {props.programs.map(program => (
              <tr key={program.id}>
                <td>{program.movieTitle}</td>
                <td>{program.airTime}</td>
                <td>
                  <Link to={("/purchase/") + program.id}>
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
    export default ProgramTable;

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