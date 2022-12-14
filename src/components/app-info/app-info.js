import './app-info.css'

const AppInfo = (props) => {
    const {countEmployees, countPrize} = props
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {countEmployees}</h2>
            <h2>Премию получат: {countPrize}</h2>
        </div>
    );
}

export default AppInfo;