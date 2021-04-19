import React from 'react';
import { Form } from 'react-bootstrap';

const OrderDetails = (props) => {
    console.log(props.order)
    const { userName, email, name, status,_id } = props.order
    let handleStatus = (e,name,id) => {
        const data = e.target.value
        const item = {data,id}
        console.log(item)

        fetch(`https://blooming-badlands-49598.herokuapp.com/update/${id}`,{
            method: 'PATCH',
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify(item)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td>Credit Card</td>
            <td>
                <Form >
                    <Form.Control
                        onChange = {(e)=>handleStatus(e,name,_id)}
                        as="select"
                        className="my-1 mr-sm-2 color-primary"
                        id="inlineFormCustomSelectPref"
                        custom
                    >
                        <option value="0">{status}</option>
                        <option value="Pending">Pending</option>
                        <option value="On Going">On Going</option>
                        <option value="Done">Done</option>
                    </Form.Control>
                </Form>
            </td>
        </tr>
    );
};

export default OrderDetails;