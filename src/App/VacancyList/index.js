import React from 'react';
import Vacancy from './Vacancy';

const List = ({data}) => {
    return (
        <div>
            {data.map((item) => 
                <div key={item.id} style={{padding: '8px'}}>
                    <Vacancy data={item}/>
                </div>
            )}
        </div>
    );
    
}

export default List;