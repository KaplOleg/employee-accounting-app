import EmployerListItem from "../employer-list-item/employer-list-item";
import './employers-list.css'

const EmployersList = ({data, onDelete, onToggleIncrease, onToggleStar}) => {
    let elements = data.map(item => {
        const {id, ...itemProps} = item
        return <EmployerListItem 
                    key={id} 
                    {...itemProps} 
                    onDelete={() => onDelete(id)}
                    onToggleIncrease={() => onToggleIncrease(id)}
                    onToggleStar={() => onToggleStar(id)}/>
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;