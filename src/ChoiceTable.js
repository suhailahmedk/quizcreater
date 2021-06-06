import React from "react";
import { Table, Button } from "react-bootstrap";
import { BsFillTrashFill,BsPencil,BsCheck } from "react-icons/bs"
const ChoiceTable = () => {
    return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Text</th>
                        <th>is Correct</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark is very good</td>
                        <td><div className="text-success text-center"><BsCheck></BsCheck></div></td>
                        <td>
                            <div className="mx-4">
                                <Button variant="light "><BsPencil></BsPencil></Button>
                                <Button variant="light "><BsFillTrashFill></BsFillTrashFill></Button>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
            </Table>


    )
}
export default ChoiceTable;