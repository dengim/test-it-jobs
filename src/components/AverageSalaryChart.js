import React from "react";
import { Line } from "react-chartjs-2";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function getNormalizeSalaryArr(data) {
    if (!data.length) return null;

    let result = [];

    for (let i = 0; i < data.length; i++) {
        let val = data[i].salary
            ? data[i].salary.from
                ? data[i].salary.from
                : data[i].salary.to
                ? data[i].salary.to
                : 0
            : 0;
        if (val != 0) result.push(val);
    }

    return result;
}

function getAverage(data) {
    if (!data.length) return null;

    let result = data.reduce((sum, current, i, array) => {
        if (array.length - 1 == i) {
            return (sum + current) / array.length;
        } else {
            return sum + current;
        }
    });

    return result;
}

function getChartData(data) {
    if (!data) return {};

    let labels = data.map((num, i) => {
        return i;
    });

    return {
        labels: labels,
        datasets: [
            {
                label: "График зарплат",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data
            }
        ]
    };
}

function AverageSalaryChart({ data }) {
    let arr = getNormalizeSalaryArr([...data]);
    arr.sort((a, b) => a - b);
    const average = parseFloat(getAverage(arr).toFixed(2)).toLocaleString();
    const median = arr[(arr.length / 2).toFixed(0)].toLocaleString();

    return (
        <div style={{ padding: "8px" }}>
            <Card>
                <CardContent>
                    <Typography variant="subtitle2">
                        Средняя зарплата
                    </Typography>
                    <Typography variant="h6">{average} руб.</Typography>
                    <Typography paragraph />
                    <Typography variant="subtitle2">
                        Медианная зарплата
                    </Typography>
                    <Typography variant="h6">{median} руб.</Typography>
                    <Typography paragraph />
                    <Line data={getChartData(arr)} />
                </CardContent>
            </Card>
        </div>
    );
}

export default AverageSalaryChart;
