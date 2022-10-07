import EmployerListItem from "../employer-list-item/employer-list-item";
import './employers-list.css'

const EmployersList = ({data}) => {

    let elements = data.map(item => {
        return <EmployerListItem {...item}/>
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;