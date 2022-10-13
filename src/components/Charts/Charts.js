import {  Card, Typography } from "@mui/material";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Charts = () => {

    const data = [
        { name: "January",  Total: 12001 },
        { name: "February", Total: 36102 },
        { name: "March", Total: 22903 },
        { name: "April",Total: 18004 },
        { name: "May", Total: 21815 },
        { name: "June", Total: 25006 },
        { name: "July", Total: 21007 }
    ]

    return (
        <Card sx={{
            display: 'flex',
            p: 3,
            gap: '20px',
            justifyContent: 'center',
            flexDirection: 'column',
            flex: 5,
            m: 2,
            boxShadow: '10px 10px 10px 10px lightgrey',
            borderRadius: '10px',
            height: 'auto',
            bgcolor: '#194775',
        }}>
            <Typography variant={'h6'} sx={{color: '#909090'}} >Last 6 Months (Sales)</Typography>
            <ResponsiveContainer width={'100%'} aspect={3}>

            <AreaChart width={730} height={250} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}} >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#81e6d6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#81e6d6" stopOpacity={0}/>
                </linearGradient>

            </defs>
            <XAxis dataKey="name" stroke={'#909090'} />
            <YAxis stroke={'#909090'} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Total" stroke="#909090" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
}


export default Charts;