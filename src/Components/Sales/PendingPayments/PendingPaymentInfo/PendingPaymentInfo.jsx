import React, {useEffect} from 'react'

export default function PendingPaymentInfo(props) {
    let employeeId1 = props.content.employeeID1 ? props.content.employeeID1 : "Nobody"
    let employeeId2 = props.content.employeeID2 ? props.content.employeeID2 : "Nobody"
    let employeeId3 = props.content.employeeID3 ? props.content.employeeID3 : "Nobody"
    let employeeId4 = props.content.employeeID4 ? props.content.employeeID4 : "Nobody"

    return (
        <tr>
            <td>{`${props.content.purchase_date}`}</td>
            <td>{`${employeeId1}`}</td>
            <td>{`${employeeId2}`}</td>
            <td>{`${employeeId3}`}</td>
            <td>{`${employeeId4}`}</td>
        </tr>
    )
}
