import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function Requirement({ value }) {
    return (
        <>
            {value ? (
                <>
                    <Typography component="p">
                        {value.responsibility ? value.responsibility : ""}
                    </Typography>
                    <Typography component="p">
                        {value.requirement ? value.requirement : ""}
                    </Typography>
                </>
            ) : null}
        </>
    );
}

function Address({ value }) {
    return (
        <>
            {value ? (
                <div>
                    {value.city
                        ? value.city +
                          ", " +
                          value.street +
                          " " +
                          (value.building ? value.building : "")
                        : ""}
                </div>
            ) : null}
        </>
    );
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

function Salary({ value }) {
    if (!value) return null;
    const _from = value.from ? value.from : null;
    const _to = value.to ? value.to : null;
    let result = null;
    if (_from && _to) result = formatNumber(_from) + " - " + formatNumber(_to);
    if (_from && !_to) result = "от " + formatNumber(_from);
    if (!_from && _to) result = "до " + formatNumber(_to);
    result = result ? result + " " + value.currency : null;

    return (
        <Typography variant="h5" color="primary">
            {result}
        </Typography>
    );
}

function Logo({ value }) {
    return <>{value ? <img src={value["90"]} /> : null}</>;
}

function Published({ value }) {
    let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };
    return (
        <Typography align="right" color="textSecondary">
            {new Date(value).toLocaleString("ru", options)}
        </Typography>
    );
}

function Employer({ value }) {
    return <div>{value}</div>;
}

function Prof({ value }) {
    return <Typography variant="h6">{value}</Typography>;
}

function Vacancy({ data }) {
    return (
        <Card>
            <CardContent>
                <Prof value={data.name} />
                <Salary value={data.salary} />
                <Requirement value={data.snippet} />
                <Logo value={data.employer.logo_urls} />
                <Employer value={data.employer.name} />
                <Grid container spacing={16}>
                    <Grid item xs={6}>
                        <Address value={data.address} />
                    </Grid>
                    <Grid item xs={6}>
                        <Published value={data.published_at} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Vacancy;
