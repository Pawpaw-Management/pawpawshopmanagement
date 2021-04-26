import React from "react";
import "./PetDetails.css";

export default function PetDetails(props) {
    return (
        <tr className="PetDetails">
                <td>{`id: ${props.index + 1}`}</td>
                <td>
                    {props.content.pet_name}
                </td>
                <td>
                    {props.content.pet_breed}
                </td>
                <td>
                    {props.content.pet_price}
                </td>
                <td>
                    <button
                        onClick={() => {
                            props.setVisibilityEdit(true);
                            props.setPetId(props.content.id);
                        }}
                    >
                        Edit
                    </button>
                </td>
                <td>
                    <button
                        onClick={() => {
                            props.setVisibilitySell(true);
                            props.setPetId(props.content.id);
                        }}
                    >
                        Sell
                    </button>
                </td>
            </tr>
    )
}
