import React from "react";
import { Table, Button } from "react-bootstrap";
import { BsFillTrashFill, BsPencil } from "react-icons/bs"

const QuestionsTable = ({ questionsList }) => {
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
            <tbody>{
                questionsList.map((item)=>(
                <tr>
                    <td>{item.question}</td>
                    <td>{item.type}</td>
                    <td>{item.choices.length}</td>
                    <td>{item.points}</td>
                    <td>
                        <div>
                            <Button variant="light "><BsPencil></BsPencil></Button>
                            <Button variant="light "><BsFillTrashFill></BsFillTrashFill></Button>
                        </div>
                    </td>
                </tr>
                
                    
                ))}

            </tbody>
        </Table>

                
                  
    )
}
export default QuestionsTable;