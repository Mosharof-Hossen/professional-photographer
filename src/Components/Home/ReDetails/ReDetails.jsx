import React from 'react';

const ReDetails = ({data}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-body rounded  my-5 py-5 "style ={{width:"300px"}}>
            <div className="card-body">
                <p className = "">{data.quote}</p>
            </div>
            <div class=" d-flex align-items-center bg-white justify-content-center ">
                <img className = "mx-3 rounded-circle" src={data.img} alt="" width="60"/>
                <div >
                    <h6 className="text-primary"> {data.name}</h6>
                    <p>{data.from}</p>

                </div>
            </div>

        </div>
    );
};

export default ReDetails;