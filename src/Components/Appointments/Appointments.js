import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import moment from "moment";
import BookAppointment from "./BookAppointment/BookAppointment"
import AppointmentList from "./AppointmentList/AppointmentList";
import "./Appointments.css";

export default function (props) {
    // Define states
    const [selectedDate, setSelectedDate] = useState(moment());
    const date = selectedDate.format("YYYY-MM-DD");
    // console.log(selectedDate)
    // console.log(typeof(date))

    return (
        <Router>
            <section className="appointments">
                <Switch>
                    <Route path="/create">
                        <h1>{`Appointments on ${date}`}</h1>
                        <BookAppointment
                            url={props.url}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                        />
                    </Route>
                    <Route path="/search">
                        <AppointmentList
                            url={props.url}
                        />
                    </Route>
                </Switch>
                <nav className="nav-components">
                    <Link to="/create">
                        <button>Book An Appointment</button>
                    </Link>
                    <Link to="/search">
                        <button>Search/Edit Appointments</button>
                    </Link>
                </nav>
            </section>
        </Router>
    );
}
