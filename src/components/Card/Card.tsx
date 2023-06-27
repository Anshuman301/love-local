import React from 'react'
import mask from '../../assets/Mask.svg'
import './card.scss'
import { Img } from '../../App'
import { ResponsiveContainer,AreaChart, Area, CartesianGrid, YAxis, XAxis, BarChart, Bar } from 'recharts'
interface Props {
    children: React.ReactElement
}
export default function Card({children}: Props) {
  return (
    <div className="card">
        {children}
    </div>
  )
}
interface CardHeaderProps {
    mode: "primary" | "secondary",
    title: string
}
export function CardHeader({mode, title}: CardHeaderProps) {
    if(mode === "primary")
    return (
        <div className='card-header'>
            <div>
            <Img src={mask} />
            <p>...</p>
            </div>
            <div>
                <span>{title}</span>
            </div>
        </div>
    )
    else if(mode === "secondary")
    return (
        <div className='card-header'>
            <span>{title}</span>
        </div>
    )

}

CardHeader.defaultProps = {
    mode: 'primary'
}

interface CardContent{
    data: any[],
    type: "bar" | "area",
    mode: "primary" | "secondary"
}
export function CardContent({data, type, mode}: CardContent) {
    const horizontal = mode === "primary" ? false: true
    const cartesianFill = mode === "primary" ? "#F8FAFC" : undefined
    if(type === "area")
    return (
        <ResponsiveContainer debounce={1}>
        <AreaChart
      data={data}
    >
      <CartesianGrid fill={cartesianFill} vertical={false} horizontal={horizontal} stroke="#F1F5F9"/> 
      {
        mode === "secondary" && (
            <>
            <YAxis dataKey={'amt'} axisLine={false} tickLine={false} tick={{
        fill: "#94A3B8",
        fontSize: '12px'
      }} domain={[0, 'dataMax + 1000']} type="number"/>
            <XAxis dataKey={"name"} axisLine={false} tickLine={false} tick={{
        fill: "#94A3B8",
        fontSize: '12px'
      }}/>
            </>
        )
      } 
      <Area
        dataKey="uv"
        stroke="#CBD5E1"
        strokeWidth={2}
        fill="transparent"
      />
      <Area
        dataKey="amt"
        fill="#3B82F614"
        stroke="#6366F1"
        strokeWidth={2}
      />
    </AreaChart>
    
        </ResponsiveContainer>
    )
    else if(type === "bar")
    return (
        <ResponsiveContainer debounce={1}>
            <BarChart
      data={data}
    >
      <CartesianGrid vertical={false} stroke={"#F1F5F9"} />
      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{
        fill: "#94A3B8",
        fontSize: '12px'
      }} />
      <YAxis axisLine={false} tickLine={false} tick={{
        fill: "#94A3B8",
        fontSize: '12px'
      }} domain={[0, 'dataMax + 1000']}/>
      <Bar dataKey="pv" fill="#38BDF8" />
      <Bar dataKey="uv" fill="#6366F1" />
    </BarChart>
        </ResponsiveContainer>
    )
}

CardContent.defaultProps = {
    mode: "primary"
}