import React from 'react';
import SideNav from './sidenav';

function Dashboard() {
    return (
        <div>
            <SideNav />
            <div className="main">
                <h1>Dashboard</h1>
                <div className='col'>
                    <div className="row my-5">
                        <div className="col">
                            <h2>Top Songs from your friends</h2>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h2>Based on your groups listening history</h2>
                            <ul>
                                <li>Item A</li>
                                <li>Item B</li>
                                <li>Item C</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row my-5">
                        <h3> Analytics - Charts</h3>
                        <ul>
                                <li>Compare all friends listening time</li>
                                <li>Item B</li>
                                <li>Item C</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;