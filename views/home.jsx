import React from "react";

const HomePage = () => (
    <>
        <div className="section">
            <div className="columns">
                <aside className="column is-2">
                    <nav className="menu">
                        <p className="menu-label">
                            General
                        </p>
                        <ul className="menu-list">
                            <li><a className="is-active">Dashboard</a></li>
                            <li><a>Customers</a></li>
                        </ul>
                        <p className="menu-label">
                            Administration
                        </p>
                        <ul className="menu-list">
                            <li><a>Team Settings</a></li>
                            <li>
                                <a className="">Manage Your Team</a>
                                <ul>
                                    <li><a>Members</a></li>
                                    <li><a>Plugins</a></li>
                                    <li><a>Add a member</a></li>
                                </ul>
                            </li>
                            <li><a>Invitations</a></li>
                            <li><a>Cloud Storage Environment Settings</a></li>
                            <li><a>Authentication</a></li>
                        </ul>
                        <p className="menu-label">
                            Transactions
                        </p>
                        <ul className="menu-list">
                            <li><a>Payments</a></li>
                            <li><a>Transfers</a></li>
                            <li><a>Balance</a></li>
                        </ul>
                    </nav>
                </aside>

                <main className="column">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <div className="title">Dashboard</div>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <button type="button" className="button is-small">
                                    March 8, 2017 - April 6, 2017
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="columns is-multiline">
                        <div className="column">
                            <div className="box">
                                <div className="heading">Top Seller Total</div>
                                <div className="title">56,950</div>
                                <div className="level">
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Sales $</div>
                                            <div className="title is-5">250,000</div>
                                        </div>
                                    </div>
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Overall $</div>
                                            <div className="title is-5">750,000</div>
                                        </div>
                                    </div>
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Sales %</div>
                                            <div className="title is-5">25%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="box">
                                <div className="heading">Revenue / Expenses</div>
                                <div className="title">55% / 45%</div>
                                <div className="level">
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Rev Prod $</div>
                                            <div className="title is-5">30%</div>
                                        </div>
                                    </div>
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Rev Serv $</div>
                                            <div className="title is-5">25%</div>
                                        </div>
                                    </div>
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Exp %</div>
                                            <div className="title is-5">45%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <div className="heading">Feedback Activity</div>
                                <div className="title">78% &uarr;</div>
                                <div className="level">
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Positive</div>
                                            <div className="title is-5">1560</div>
                                        </div>
                                    </div>
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Negative</div>
                                            <div className="title is-5">368</div>
                                        </div>
                                    </div>
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Pos/Neg %</div>
                                            <div className="title is-5">77% / 23%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <div className="heading">Orders / Returns</div>
                                <div className="title">75% / 25%</div>
                                <div className="level">
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Orders $</div>
                                            <div className="title is-5">425,000</div>
                                        </div>
                                    </div>
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Returns $</div>
                                            <div className="title is-5">106,250</div>
                                        </div>
                                    </div>
                                    <div className="level-item">
                                        <div className="">
                                            <div className="heading">Success %</div>
                                            <div className="title is-5">+ 28,5%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="sub-header">Section title</h2>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>Lorem</td>
                                        <td>ipsum</td>
                                        <td>dolor</td>
                                        <td>sit</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>amet</td>
                                        <td>consectetur</td>
                                        <td>adipiscing</td>
                                        <td>elit</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>Integer</td>
                                        <td>nec</td>
                                        <td>odio</td>
                                        <td>Praesent</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>libero</td>
                                        <td>Sed</td>
                                        <td>cursus</td>
                                        <td>ante</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="sub-header">Referrals</h2>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <td>Referring Site</td>
                                    <td>Active Users</td>
                                </thead>

                                <tbody>
                                    <tr v-for="(referringSite, count) in referrers">
                                        <td>referringSite</td>
                                        <td>count</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="row">
                            <div className="col-xs-12">
                                <h3>Open up the analytics dashboard in a new tab/window</h3>
                                <h4 className="header"><a href="/dashboard">Analytics Dashboard</a></h4>
                                <h3>Use the links below to test the real-time analytics dashboard</h3>
                                <h4 className="header"><a href="/">Homepage</a></h4>
                                <h4 className="header"><a href="/about">About Us</a></h4>
                                <h4 className="header"><a href="/contact">Contact Us</a></h4>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </>
);

export default HomePage;