import './employer-list-item.css';

const EmployerListItem = (props) => {

    const {name, salary, increase, star, onDelete, onToggleProp} = props
    
    let classNameLi = "list-group-item d-flex justify-content-between"
    if(increase) {
        classNameLi += " increase"
    }
    if(star) {
        classNameLi += " like"
    }

    return (
        <li className={classNameLi}>
        <span className="list-group-item-label" onClick={onToggleProp} data-toggle="star">{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                className="btn-cookie btn-sm "
                data-toggle="increase"
                onClick={onToggleProp}>
                <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
    );
}

export default EmployerListItem;