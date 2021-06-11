import React from "react";
import {Table, Button} from "react-bootstrap";
import {BsFillTrashFill, BsPencil} from "react-icons/bs"

const QuestionsTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Text</th>
                <th>Type</th>
                <th>Choices</th>
                <th>Points</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Mark</td>
                <td>Multiple Choice</td>
                <td>4</td>
                <td>10</td>
                <td>
                    <div>
                        <Button variant="light "><BsPencil></BsPencil></Button>
                        <Button variant="light "><BsFillTrashFill></BsFillTrashFill></Button>
                    </div>
                </td>
            </tr>

            </tbody>
        </Table>


    )
}
export default QuestionsTable;