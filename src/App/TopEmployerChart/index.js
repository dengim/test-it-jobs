import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


function compareSalaryDesc(a, b) {
    let fromA = a.salary ? (a.salary.from ? a.salary.from : 0) : 0;
    let fromB = b.salary ? (b.salary.from ? b.salary.from : 0) : 0;
    return fromB - fromA;
}

function getTop5Employer(data) {
    if (!data.length) return null;

    let result = {
        labels: [],
        dataFrom: [],
        dataTo: []
    };

    for (let i = 0; i < 5; i++) { 
        let _from = data[i].salary ? (data[i].salary.from ? data[i].salary.from : 0) : 0;
        let _to = data[i].salary ? (data[i].salary.to ? data[i].salary.to : 0) : 0;

        _to = (_to < _from) ? _from: _to;

        result.labels.push(data[i].employer.name.split(' '));
        result.dataFrom.push(_from);
        result.dataTo.push(_to);
    }

    return result;
}

function getChartData(data) {
    if (!data) return {};

    return {
        labels: data.labels,
        datasets: [
          {
            label: 'От',
            backgroundColor: '#fdd835',
            data: data.dataFrom
          },
          {
            label: 'До',
            backgroundColor: '#ff8f00',
            data: data.dataTo
          }
        ]
    }
}

function getOptions() {
    return {
        title: {
            display: true,
            text: 'Топ 5 компаний по зарплате'
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            yAxes: [{
                stacked: true
            }],
            xAxes: [{
                ticks: {
                    min: 0,
                    callback: function(value, index, values) {
                        return value + 'р';
                    }
                }
            }],
        }
    }
}

function TopEmployerChart({data}) {
    let arr = [...data]
    arr.sort(compareSalaryDesc);        

    return (
        <div style={{padding: '8px'}}>
            <Card>
                <CardContent>
                    <HorizontalBar data={getChartData(getTop5Employer(arr))} 
                        options={getOptions()}/>
                </CardContent>
            </Card>
        </div>
    );
};

export default TopEmployerChart;