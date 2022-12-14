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
            ],
            term: '', 
            filter: 'all'
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

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop] : !item[prop]}
                }
                return item
            })
        }))
    }

    onSearchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.star)
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render(){
        const {data, term, filter} = this.state
        const visibleData = this.onFilterPost(this.onSearchEmp(data, term), filter)

        return (
            <div className="app">
                <AppInfo
                    countEmployees={data.length}
                    countPrize={data.filter(it => it.star).length}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList 
                    data={visibleData}
                    onDelete={this.onDeleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployersAddForm onCreate = {this.onCreateItem}/>
            </div>
        ) 
    }
}

export default App;