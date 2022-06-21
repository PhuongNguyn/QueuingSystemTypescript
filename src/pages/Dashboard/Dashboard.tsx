import './Dashboard.css'
import { BsCalendar, BsCalendarCheck, BsBookmarkStar } from 'react-icons/bs'
import {AiOutlineArrowUp, AiFillCaretDown} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import {IoIosCall} from 'react-icons/io'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {AiOutlineComment} from 'react-icons/ai'
import { FiLayers } from 'react-icons/fi'
import { useState } from 'react'
import { BsDot } from 'react-icons/bs'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const DashBoard:React.FC = () =>{
    interface IDataTypeName {
        [key: string]: string
    }
    interface IDataChart{
        name: number,
        uv: number, 
        pv: number,
        amt: number 
    } 
    const dataTypeName: IDataTypeName = {
        'day': 'Ngày',
        'week': 'Tuần',
        'month': 'Tháng',
        'year': 'Năm',
    }
    const [optionChart, setOptionChart] = useState<boolean>(false)
    const [dateType, setDateType] = useState<string>('day')
    const dataChart:IDataChart[] = [
        {
          name: 1,
          uv: 2500,
          pv: 2400,
          amt: 2400
        },
        {
          name: 5,
          uv: 4200,
          pv: 1398,
          amt: 2210
        },
        {
          name: 10,
          uv: 3500,
          pv: 9800,
          amt: 2290
        },
        {
          name: 13,
          uv: 3800,
          pv: 3908,
          amt: 2000
        },
        {
          name: 15,
          uv: 3500,
          pv: 3908,
          amt: 2000
        },
        {
          name: 19,
          uv: 4221,
          pv: 3908,
          amt: 2000
        },
        {
          name: 23,
          uv: 3900,
          pv: 3908,
          amt: 2000
        },
        {
          name: 27,
          uv: 4400,
          pv: 3908,
          amt: 2000
        },
        {
          name: 30,
          uv: 3900,
          pv: 3908,
          amt: 2000
        },
        {
          name: 32,
          uv: 4100,
          pv: 3908,
          amt: 2000
        }
      ];
    
    return (
        <div className = "dash-board">
            <div className = "dash-board-wrapper">
                <div className = "dash-board-chart">
                    <h1 className = "dash-board-chart--title">Biểu đồ cấp số</h1>
                    <div className = "dash-board-chart__statistic">
                        <div className='dash-board-chart-statistic__card'>
                            <div className ="dash-board-chart-statistic-card__title">
                                <div className ='dash-board-chart-satistic-card__title--icon' style = {{background: '#e9efff'}}>
                                    <BsCalendar size = {25} style={{color:'#6493F9'}}/>
                                </div>
                                <h3 className = "dash-board-chart-satistic-card__title--title">Số thứ tự đã cấp</h3>
                            </div>
                            <div className = "dash-board-chart-satistic-card__number">
                                <h1 className ="dash-board-chart-satistic-card__number--number">4.221</h1>
                                <div className = "dash-board-chart-satistic-card__number--percent" style = {{background: 'rgba(255, 149, 1, 0.15)'}}><span style = {{color: '#FF9138'}}><AiOutlineArrowUp/> 32,41%</span></div>
                            </div>
                        </div>
                        <div className='dash-board-chart-statistic__card'>
                            <div className ="dash-board-chart-statistic-card__title">
                                <div className ='dash-board-chart-satistic-card__title--icon' style = {{background: '#e0f7e5'}}>
                                    <BsCalendarCheck size = {25} style={{color:'#35C75A'}}/>
                                </div>
                                <h3 className = "dash-board-chart-satistic-card__title--title">Số thứ tự đã sử dụng</h3>
                            </div>
                            <div className = "dash-board-chart-satistic-card__number">
                                <h1 className ="dash-board-chart-satistic-card__number--number">3.721</h1>
                                <div className = "dash-board-chart-satistic-card__number--percent" style = {{background: '#fbe2e2'}}><span style = {{color: '#E73F3F'}}><AiOutlineArrowUp/> 32,41%</span></div>
                            </div>
                        </div>
                        <div className='dash-board-chart-statistic__card'>
                            <div className ="dash-board-chart-statistic-card__title">
                                <div className ='dash-board-chart-satistic-card__title--icon' style = {{background: '#fff3e9'}}>
                                    <div className = "dash-board-chart-statistic-card__title--icon-wrapper">
                                        <FiUser size = {18} style = {{color: '#FFAC6A'}}/><IoIosCall style = {{color: '#FFAC6A', verticalAlign: '10px', marginLeft: '-7px'}}/>
                                    </div>
                                </div>
                                <h3 className = "dash-board-chart-satistic-card__title--title">Số thứ tự đang chờ</h3>
                            </div>
                            <div className = "dash-board-chart-satistic-card__number">
                                <h1 className ="dash-board-chart-satistic-card__number--number">468</h1>
                                <div className = "dash-board-chart-satistic-card__number--percent" style = {{background: 'rgba(255, 149, 1, 0.15)'}}><span style = {{color: '#FF9138'}}><AiOutlineArrowDown/> 32,41%</span></div>
                            </div>
                        </div>
                        <div className='dash-board-chart-statistic__card'>
                            <div className ="dash-board-chart-statistic-card__title">
                                <div className ='dash-board-chart-satistic-card__title--icon' style = {{background: '#fee9e9'}}>
                                    <BsBookmarkStar size = {25} style={{color:'#F86D6D'}}/>
                                </div>
                                <h3 className = "dash-board-chart-satistic-card__title--title">Số thứ tự đã bỏ qua</h3>
                            </div>
                            <div className = "dash-board-chart-satistic-card__number">
                                <h1 className ="dash-board-chart-satistic-card__number--number">32</h1>
                                <div className = "dash-board-chart-satistic-card__number--percent" style = {{background: '#fbe2e2'}}><span style = {{color: '#E73F3F'}}><AiOutlineArrowDown/> 32,41%</span></div>
                            </div>
                        </div>
                    </div>
                    <div className = "dash-board-chart-statistic__chart">
                        <div className = "dash-board-chart-statistic-chart__headers">
                            <div className = "dash-board-chart-statistic-chart__headers--title">
                                <h1>Bảng thống kê theo {dataTypeName[dateType].toLowerCase()}</h1>   
                                {dateType !== 'month' &&<p>Tháng 11/2021</p> }
                                {dateType === 'month' && <p>Năm 2021</p> }
                            </div>
                        <div className = "dash-board-chart-statistic-chart__select-wrapper">
                            <div className = "dash-board-chart-statistic-chart__select">
                                <p>Xem theo</p>
                                <div onClick = {()=>setOptionChart(!optionChart)} className = "dash-board-chart-statistic-chart__select--box">
                                    <span style = {{width: '40px'}}>{`${dataTypeName[dateType]}`}</span><span><AiFillCaretDown size = {20} style = {{color: '#FF7506', marginRight: '4px', verticalAlign: '-5px', marginLeft: '15px'}}/></span>
                                </div>
                            </div>
                            {optionChart &&<div className = "dash-board-chart-statistic-chart__option">
                                <p style = {dateType === 'day' ? {background:'#fff2e9'}: {}} onClick = {()=>{setDateType('day'); setOptionChart(false)}}>Ngày</p>
                                <p style = {dateType === 'week' ? {background:'#fff2e9'}: {}} onClick = {()=>{setDateType('week'); setOptionChart(false)}}>Tuần</p>
                                <p style = {dateType === 'month' ? {background:'#fff2e9'}: {}} onClick = {()=>{setDateType('month'); setOptionChart(false)}}>Tháng</p>
                            </div>}
                        </div>
        
                    </div>
                    <div className = "">
                            <AreaChart
                                width={754}
                                height={373}
                                data={dataChart}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 0,
                                    bottom: 0
                                }}
                                >
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#5185F7" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#CEDDFF" stopOpacity={0.3} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis axisLine={false} tickLine={false} dataKey="name" type="number" />
                                <YAxis axisLine={false} tickLine={false} type="number" />
                                <Tooltip />
                                <Area
                                    strokeWidth={2}
                                    type="monotone"
                                    dataKey="uv"
                                    stroke="#5185F7"
                                    fill="url(#colorUv)"
                                />
                            </AreaChart>
                        </div>
                </div>
                </div>
                <div className='dash-board-statistic'>
                    <h1 className = "dash-board-statistic--title">Tổng quan</h1>
                    <div className = "dash-board-statistic__card">
                        <div className = "dash-board-statistic-card__progress-bar-and-statistic">
                               <div className = "dash-board-statistic-card__progress-bar-and-statistic--progress">
                                    <CircularProgressbar styles={buildStyles({pathColor:'#FF7506', trailColor: '#EAEAEC'})} strokeWidth={5} value={90}/>
                                    <div className = "dash-board-statistic-card__progress-bar-and-statistic--progress-bar-in">
                                        <CircularProgressbar styles={{root:{},path: {stroke: '#7E7D88'},trail: {stroke: '#EAEAEC'}, text: {fontSize: '27px',fontWeight: 'bold', color: '#535261', fill: '#535261'}, }} text={`90%`} strokeWidth={5} value={10}/>
                                    </div>
                                </div>
                                <div className = "dash-board-progress-bar-and-statistic__statistic">
                                    <h1 className = "dash-board-progress-bar-and-statistic__statistic--number">4221</h1>
                                    <p className = "dash-board-progress-bar-and-statistic__statistic--number--title" style = {{color: '#FF7506'}}><HiOutlineDesktopComputer size = {18} style = {{verticalAlign: '-4px'}}/> Thiết bị</p>
                                </div>
                        </div>
                        <div className = "dash-board-statistic-card__status">
                            <p style = {{marginTop: '4px'}}><BsDot size = {20} style = {{verticalAlign: '-5px', color: '#FFD130'}}/>Đang hoạt động <span style = {{color: '#FF7506'}}>3799</span></p>
                            <p style = {{marginTop: '4px'}}><BsDot size = {20}  style = {{verticalAlign: '-5px', color: '#7E7D88'}}/>Ngưng hoạt động <span style = {{color: '#FF7506'}}>422</span></p>
                        </div>
                    </div>
                    <div className = "dash-board-statistic__card">
                        <div className = "dash-board-statistic-card__progress-bar-and-statistic">
                               <div className = "dash-board-statistic-card__progress-bar-and-statistic--progress">
                                    <CircularProgressbar styles={buildStyles({pathColor:'#4277FF', trailColor: '#EAEAEC'})} strokeWidth={5} value={76}/>
                                    <div className = "dash-board-statistic-card__progress-bar-and-statistic--progress-bar-in">
                                        <CircularProgressbar styles={{root:{},path: {stroke: '#7E7D88'},trail: {stroke: '#EAEAEC'}, text: {fontSize: '27px',fontWeight: 'bold', color: '#535261', fill: '#535261'}, }} text={`76%`} strokeWidth={5} value={24}/>
                                    </div>
                                </div>
                                <div className = "dash-board-progress-bar-and-statistic__statistic">
                                    <h1 className = "dash-board-progress-bar-and-statistic__statistic--number">4221</h1>
                                    <p className = "dash-board-progress-bar-and-statistic__statistic--number--title" style = {{color: '#4277FF'}}><AiOutlineComment size = {18} style = {{verticalAlign: '-4px'}}/> Thiết bị</p>
                                </div>
                        </div>
                        <div className = "dash-board-statistic-card__status">
                            <p style = {{marginTop: '4px'}}><BsDot size = {20} style = {{verticalAlign: '-5px', color: '#4277FF'}}/>Đang hoạt động <span style = {{color: '#4277FF'}}>3799</span></p>
                            <p style = {{marginTop: '4px'}}><BsDot size = {20}  style = {{verticalAlign: '-5px', color: '#7E7D88'}}/>Ngưng hoạt động <span style = {{color: '#4277FF'}}>422</span></p>
                        </div>
                    </div>
                    <div className = "dash-board-statistic__card">
                        <div className = "dash-board-statistic-card__progress-bar-and-statistic">
                               <div className = "dash-board-statistic-card__progress-bar-and-statistic--progress">
                                    <CircularProgressbar styles={buildStyles({pathColor:'#35C75A', trailColor: '#EAEAEC'})} strokeWidth={5} value={86}/>
                                    <div className = "dash-board-statistic-card__progress-bar-and-statistic--progress-bar-in">
                                        <CircularProgressbar styles={{root:{},path: {stroke: '#7E7D88', },trail: {stroke: '#EAEAEC', }, text: {fontSize: '27px',fontWeight: 'bold', color: '#535261', fill: '#535261'}, }}  strokeWidth={5} value={11}/>
                                        <div className = "dash-board-statistic-card__progress-bar-and-statistic--progress-bar-in-1">
                                        <CircularProgressbar styles={{root:{},path: {stroke: '#F178B6',},trail: {stroke: '#EAEAEC'}, text: {fontSize: '27px',fontWeight: 'bold', color: '#535261', fill: '#535261'}, }} text={`86%`} strokeWidth={5} value={3}/>
                                    </div>
                                    </div>
                                </div>
                                <div className = "dash-board-progress-bar-and-statistic__statistic">
                                    <h1 className = "dash-board-progress-bar-and-statistic__statistic--number">4221</h1>
                                    <p className = "dash-board-progress-bar-and-statistic__statistic--number--title" style = {{color: '#35C75A'}}><FiLayers size = {18} style = {{verticalAlign: '-4px'}}/> Thiết bị</p>
                                </div>
                        </div>
                        <div className = "dash-board-statistic-card__status">
                            <p><BsDot size = {20} style = {{verticalAlign: '-5px', color: '#35C75A'}}/>Đang chờ <span style = {{color: '#35C75A', marginLeft: '20px'}}>3799</span></p>
                            <p><BsDot size = {20}  style = {{verticalAlign: '-5px', color: '#7E7D88'}}/>Đã sử dụng <span style = {{color: '#35C75A', marginLeft: '10px'}}>422</span></p>
                            <p style = {{textAlign: 'start'}}><BsDot size = {20}  style = {{verticalAlign: '-5px', color: '#F178B6'}}/>Bỏ qua<span style = {{color: '#35C75A', marginLeft: '37px'}}>422</span></p>
                        </div>
                    </div>
                    <div className = "dash-board-statistic__calendar">
                        <Calendar
                            locale="en-GB"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard