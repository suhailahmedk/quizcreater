import React from "react";
import { Table, Button } from "react-bootstrap";
import { BsFillTrashFill, BsPencil } from "react-icons/bs"
import Icon from "./Icon";

const ChoiceTable = ({choicesList}) => {
   
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
                {
                    choicesList.map((item) => (
                    <tr>
                        <td>{item.choice}</td>
                        <td>
                            <div className="text-success text-center"><Icon value={item.isCorrect}></Icon></div>
                        </td>
                        <td>
                            <div className="mx-4">
                                <Button variant="light "><BsPencil></BsPencil></Button>
                                <Button variant="light "><BsFillTrashFill></BsFillTrashFill></Button>
                            </div>
                        </td>
                    </tr>
                    ))
                }
            </tbody>
        </Table>


    )
}
export default ChoiceTable;