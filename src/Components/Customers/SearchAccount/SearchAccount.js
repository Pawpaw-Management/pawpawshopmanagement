import React from "react";
import "./SearchAccount.css"

const SearchAccount = (props) => {
    var eachCustomer = props.allInfo[0].forEach(element => {
        return(JSON.stringify(element))
    }); ;
    console.log(eachCustomer)

    // console.log(Object.values(JSON.stringify(props.allInfo[0])))

    // const Test = ({stations}) => (
    //     <>
    //     {stations.map(element => (
    //         <div className="station" key={element.customer_first_name}>{element.customer_first_name}</div>
    //     ))}
    //     </>
    // ); 

    return (
        <section className="customersDatabase">
            <h1>All Customer Accounts</h1>
            <div>
                {JSON.stringify(props.allInfo[0][0])}
            </div>
        </section>
    )
}

export default SearchAccount