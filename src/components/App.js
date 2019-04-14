import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Filter from "./Filter";
import TopEmployerChart from "./TopEmployerChart";
import AverageSalaryChart from "./AverageSalaryChart";
import VacancyList from "./VacancyList";
import Progress from "./Progress";
import Error from "./Error";

const App = ({ originData, filteredData, isFetching, error }) => {
    return (
        <>
            <Header text="Уфа, ИТ вакансии" />
            {isFetching ? (
                <Progress />
            ) : error ? (
                <Error text={error} />
            ) : (
                <Grid container style={{ backgroundColor: "#ddd" }}>
                    <Grid item xs={12} sm={5}>
                        <Filter data={originData} />
                        <AverageSalaryChart data={originData} />
                        <TopEmployerChart data={originData} />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <VacancyList data={filteredData} />
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default App;
