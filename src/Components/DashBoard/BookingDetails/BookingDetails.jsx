import React from 'react';

const BookingDetails = ({book}) => {
    console.log(book)
    return (
        <div className="card shadow p- mb- bg-body rounded  my-2 py-2 " style={{ width: "300px" }}>

            <div class=" d-flex align-items-center bg-white justify-content-between px-5 ">
                <img className=" rounded-circle" src={book.img} alt="" width="60" />
                <btn className="btn btn-primary disabled">{book.status}</btn>
            </div>
            <div className="card-body">
                <h6 className="text-primary"> {book.name}</h6>
                <p className="">{book.description}</p>
            </div>

        </div>
    );
};

export default BookingDetails;