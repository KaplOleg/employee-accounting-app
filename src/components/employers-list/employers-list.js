import EmployerListItem from "../employer-list-item/employer-list-item";
import './employers-list.css'

const EmployersList = ({data, onDelete, onToggleProp}) => {
    let elements = data.map(item => {
        const {id, ...itemProps} = item
        return <EmployerListItem 
                    key={id} 
                    {...itemProps} 
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;