import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {name: 'Ivan Ivanovich', salary: 800, increase: false, star: true, id: '1'},
                {name: 'Oleg Kapl', salary: 1000, increase: true, star: false, id: '2'},
                {name: 'Artem Artemovich', salary: 600, increase: false, star: false, id:'3'}
            ]
        }
        this.maxId = 4
    }

    onDeleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id != id)
        }))
    }

    onCreateItem = (name, salary) => {
        const newItem = { name, salary, id: this.maxId++ }
        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        });
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase : !item.increase}
                }
                return item
            })
        }))
    }

    onToggleStar = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, star: !item.star}
                } 
                return item
            })
        }))
    }

    render(){
        const {data} = this.state
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                    data={data}
                    onDelete={this.onDeleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleStar={this.onToggleStar}
                    />
                <EmployersAddForm onCreate = {this.onCreateItem}/>
            </div>
        ) 
    }
}

export default App;