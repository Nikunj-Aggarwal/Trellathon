import React from 'react'
import "./Dashboard.css";
import { Link } from 'react-router-dom';
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/im";
import * as GrIcons from "react-icons/gr";
import Chart from "../Charts/charts";
import _likesChart from "../Charts/likesChart";
import _SubscribersChart from "../Charts/Subscribers";
import '../components/Sidebar.css'

const Dashboard = ()  => {
    return (
        <main>
      <div className="user">

        <div className="details">
          <div className="greeting">
            <h1>Hello Trell User</h1>
            <p>Welcome to your Admin Dashboard</p>
          </div>
        </div>
        {/* CARDS */}
        <div className="cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="inner">
                
              <p className="text-primary-p">Total Subscribers</p>
              <Link to="#" className='menu-bars'>
                    <MdIcons.MdSubscriptions />
              </Link>
              <span className="font-bold text-title">420</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="inner">
              <p className="text-primary-p">Total Views</p>
              <Link to="#" className='menu-bars'>
                    <IoIcons.ImStopwatch />
              </Link>
              <span className="font-bold text-title">4420</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="inner">
              <p className="text-primary-p">Videos Uploaded</p>
              <Link to="#" className='menu-bars'>
                    <RiIcons.RiVideoUploadLine />
              </Link>
              <span className="font-bold text-title">420</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="inner">
              <p className="text-primary-p">Total Likes</p>
              <Link to="#" className='menu-bars'>
                    <GrIcons.GrLike />
              </Link>
              <span className="font-bold text-title">1320</span>
            </div>
          </div>
        </div>
        {/* CHARTS */}
        <div className="charts">
          <div className="charts_left">
            <div className="charts_left_title">
              <div>
                <h1>Daily Views</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts_right">
            <div className="charts_right_title">
              <div>
                <h1>In the Last 24 Hours...</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts_right_cards">
              <div className="card1">
                <h1>+24%</h1>
                <p>Video Views</p>
              </div>

              <div className="card2">
                <h1>+93</h1>
                <p>Subscribers</p>
              </div>

              <div className="card3">
                <h1>+12%</h1>
                <p>Channel Views</p>
              </div>

              <div className="card4">
                <h1>-15%</h1>
                <p>Video Likes</p>
              </div>
            </div>
          </div>
        </div>
        {/* VIEW COUNT CHART */}
        <div className="charts">
          <div className="charts_left">
              <div className="charts_left_title">
                <div>
                  <h1>Subscribers</h1>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              <_SubscribersChart />
            </div>
            <div className="charts_right">
              <div className="charts_right_title">
                <div>
                  <h1>Likes</h1>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              <_likesChart />
            </div>
        </div>
        
      </div>
    </main>
    )
}

export default Dashboard
