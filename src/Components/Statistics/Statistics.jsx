import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import DailyStatistics from "./DailyStatistics/DailyStatistics";
import MonthlyStatistics from "./MonthlyStatistics/MonthlyStatistics";
import "../CommonElements.css";

export default function Statistics(props) {
    // Define states
    const [shouldShowDailyStatistics, setShouldShowDailyStatistics] = useState(true);

    return (
        <div>
            <Router>
                <section className="statistics">
                    <Switch>
                        <Route path="/dailystatistics">
                            <DailyStatistics url={props.url} />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/monthlystatistics">
                            <MonthlyStatistics url={props.url} />
                        </Route>
                    </Switch>
                    <nav className="nav-components">
                        <Link to="/dailystatistics">
                            <button onClick={() => setShouldShowDailyStatistics(false)}>
                                Daily Statistics
                            </button>
                        </Link>
                        <Link to="/monthlystatistics">
                            <button onClick={() => setShouldShowDailyStatistics(false)}>
                                Monthly Statistics
                            </button>
                        </Link>
                    </nav>
                </section>
            </Router>
            {/* The following <DailyStatistics> should only be shown when no other child component is shown. */}
            {shouldShowDailyStatistics ? <DailyStatistics url={props.url} /> : <div></div>}
        </div>
    );
}
