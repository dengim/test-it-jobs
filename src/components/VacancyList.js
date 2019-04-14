import React from "react";
import VacancyItem from "./VacancyItem";

const VacancyList = ({ data }) => {
    return (
        <div>
            {data.map(item => (
                <div key={item.id} style={{ padding: "8px" }}>
                    <VacancyItem data={item} />
                </div>
            ))}
        </div>
    );
};

export default VacancyList;
