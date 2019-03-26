import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Filter from './Filter';
import TopEmployerChart from './TopEmployerChart';
import AverageSalaryChart from './AverageSalaryChart';
import VacancyList from './VacancyList';
import Progress from './Progress'


class App extends React.Component {
    state = {
        originData: [],
        filteredData: [],
        status: {
            num: 0,
            text: ''
        }
    }

    componentDidMount() {
        this.setState({status: {num: 0, text: 'загрузка...'}});
        axios({
            method:'get',
            url:'https://api.hh.ru/vacancies',
            params: {
                page: 0,
                per_page: 50,
                area: 99, //Уфа
                order_by: 'publication_time',
                specialization: 1.221 //Программирование, Разработка
            }
        })
        .then(response => {
            this.setState({
                originData: response.data.items, 
                filteredData: response.data.items, 
                status: {num: 1, text: 'ok'}
            });
        })
        .catch(error => {
            console.log(error.response);
            this.setState({status: {num: -1, text: 'server error'}});
        });
    }

    handleSearch = ({data}) => {
        this.setState({ filteredData: data });
    }

    render() {
        let {originData, filteredData, status} = this.state;
        
        return (
            <>
                <Header text='Уфа, ИТ вакансии'/>
                { status.num > 0 ?
                    <Grid container style={{backgroundColor: '#ddd'}}>
                        <Grid item xs={12} sm={5}>
                            <Filter data={originData} onSearch={this.handleSearch}/>
                            <AverageSalaryChart data={originData} />
                            <TopEmployerChart data={originData} />                            
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <VacancyList data={filteredData} />
                        </Grid>
                    </Grid> : <Progress data={status} />
                }
            </>
        );
    }

}

export default App;