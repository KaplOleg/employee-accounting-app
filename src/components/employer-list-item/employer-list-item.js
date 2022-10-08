import './employer-list-item.css';
import {Component} from 'react'

class EmployerListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    setIncrease = () => {
        this.setState(state => ({
            increase: !state.increase
        }))
    }   
    setStar = () => {
        this.setState(state => ({
            like: !state.like
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props
        const {increase, like} = this.state
        
        let classNameLi = "list-group-item d-flex justify-content-between"
        if(increase) {
            classNameLi += " increase"
        }
        if(like) {
            classNameLi += " like"
        }

        return (
            <li className={classNameLi}>
            <span className="list-group-item-label" onClick={this.setStar}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={this.setIncrease}>
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
}

export default EmployerListItem;