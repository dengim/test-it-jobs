import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


class Filter extends React.Component {
    state = {
        profName: '',
        salary: ''
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }

    handleSearch = () => {
        let arr = [...this.props.data];

        if (this.state.profName) {
            arr = arr.filter(obj => obj.name.toLowerCase().includes(this.state.profName.toLowerCase()));
        }
        
        if (this.state.salary) {
            arr = arr.filter((obj) => {
                let _from = obj.salary ? (obj.salary.from ? obj.salary.from : 0) : 0;
                return _from >= this.state.salary;
            });
        }
        
        this.props.onSearch({data: arr});
    }

    handleReset = () => {
        this.setState({ profName: '', salary: '' });
        this.props.onSearch({data: this.props.data});
    }

    handleTextFieldKeyDown = event => {
        if (event.key == 'Enter') {
            this.handleSearch();
        }
    }

    render() {
        return (
            <div style={{padding: '8px'}}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Фильтр</Typography>
                        <TextField
                            id='prof'
                            label='Профессия'
                            value={this.state.profName}
                            onChange={this.handleChange('profName')}
                            onKeyDown={this.handleTextFieldKeyDown}
                            fullWidth
                        />
                        <TextField
                            id='salary'
                            label='Зарплата, от'
                            value={this.state.salary}
                            onChange={this.handleChange('salary')}
                            onKeyDown={this.handleTextFieldKeyDown}
                            type="number"                        
                            fullWidth
                        />
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size='medium' 
                            color='primary' onClick={this.handleSearch}>Найти</Button>
                        <Button variant="contained" size='medium' 
                            color='default' onClick={this.handleReset}>Сбросить</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Filter