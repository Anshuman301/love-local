import React from "react";
import mask from "../../assets/Mask.svg";
import "./card.scss";
import { Img } from "../../App";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  YAxis,
  XAxis,
  BarChart,
  Bar,
  Legend,
} from "recharts";
interface Props {
  children: React.ReactElement;
}
export default function Card({ children }: Props) {
  return <div className="card">{children}</div>;
}
interface CardHeaderProps {
  mode: "primary" | "secondary";
  title: string;
}
export function CardHeader({ mode, title }: CardHeaderProps) {
  if (mode === "primary")
    return (
      <div className="card-header">
        <div>
          <Img src={mask} />
          <p>...</p>
        </div>
        <div>
          <span>{title}</span>
        </div>
      </div>
    );
  else if (mode === "secondary")
    return (
      <div className="card-header">
        <span>{title}</span>
      </div>
    );
}

CardHeader.defaultProps = {
  mode: "primary",
};

interface CardContent {
  data: any[];
  type: "bar" | "area";
  mode: "primary" | "secondary";
}
export function CardContent({ data, type, mode }: CardContent) {
  const horizontal = mode === "primary" ? false : true;
  const cartesianFill = mode === "primary" ? "#F8FAFC" : undefined;
  if (type === "area")
    return (
      <ResponsiveContainer debounce={1}>
        <AreaChart data={data}>
          <CartesianGrid
            fill={cartesianFill}
            vertical={false}
            horizontal={horizontal}
            stroke="#F1F5F9"
          />
          {mode === "secondary" && (
            <>
              <YAxis
                dataKey={"amt"}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#94A3B8",
                  fontSize: "1.1vh",
                }}
                domain={[0, "dataMax + 1000"]}
                type="number"
              />
              <XAxis
                dataKey={"name"}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#94A3B8",
                  fontSize: "1.1vh",
                }}
              />
              <Legend
                verticalAlign="top"
                align="right"
                payload={[
                  {
                    value: "Current",
                    formatter: () => (
                      <>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 12"
                            fill="none"
                            style={{
                              height: "1.29vh",
                              position: "relative",
                              top: "1px",
                              right: "5px",
                            }}
                          >
                            ,
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 6C0 2.68629 2.68629 0 6 0C9.31234 0.00330738 11.9967 2.68766 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM3 6C3 7.65685 4.34315 9 6 9C6.79565 9 7.55871 8.68393 8.12132 8.12132C8.68393 7.55871 9 6.79565 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z"
                              fill="#CBD5E1"
                            />
                          </svg>
                        </span>
                        <span style={{ color: "#64748B" }}>Current</span>
                      </>
                    ),
                  },
                  {
                    value: "Previous",
                    formatter: () => (
                      <>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 12"
                            fill="none"
                            style={{
                              height: "1.29vh",
                              position: "relative",
                              top: "1px",
                              right: "5px",
                            }}
                          >
                            ,
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 6C0 2.68629 2.68629 0 6 0C9.31234 0.00330738 11.9967 2.68766 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM3 6C3 7.65685 4.34315 9 6 9C6.79565 9 7.55871 8.68393 8.12132 8.12132C8.68393 7.55871 9 6.79565 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z"
                              fill="#CBD5E1"
                            />
                          </svg>
                        </span>
                        <span style={{ color: "#64748B" }}>Previous</span>
                      </>
                    ),
                  },
                ]}
                height={20}
                iconSize={0}
                wrapperStyle={{
                  position: "absolute",
                  top: "-2.7vh",
                  fontSize: "1.29vh",
                }}
              />
            </>
          )}
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
    );
  else if (type === "bar")
    return (
      <ResponsiveContainer debounce={1}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} stroke={"#F1F5F9"} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#94A3B8",
              fontSize: "1.1vh",
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#94A3B8",
              fontSize: "1.1vh",
            }}
            domain={[0, "dataMax + 1000"]}
          />
          <Legend
            verticalAlign="top"
            align="left"
            payload={[
              {
                value: "1.7Cr",
                formatter: () => (
                  <>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{
                          height: "1.29vh",
                          position: "relative",
                          top: "1px",
                          right: "5px",
                        }}
                      >
                        ,
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 6C0 2.68629 2.68629 0 6 0C9.31234 0.00330738 11.9967 2.68766 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM3 6C3 7.65685 4.34315 9 6 9C6.79565 9 7.55871 8.68393 8.12132 8.12132C8.68393 7.55871 9 6.79565 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z"
                          fill="#CBD5E1"
                        />
                      </svg>
                    </span>
                    <span>1.7Cr</span>
                    <span
                      style={{
                        color: "#64748B",
                        marginLeft: "10px",
                        fontSize: "1.29vh",
                      }}
                    >
                      Direct
                    </span>
                  </>
                ),
              },
              {
                value: "2.4Cr",
                formatter: () => (
                  <>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{
                          height: "1.29vh",
                          position: "relative",
                          top: "1px",
                          right: "5px",
                        }}
                      >
                        ,
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 6C0 2.68629 2.68629 0 6 0C9.31234 0.00330738 11.9967 2.68766 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM3 6C3 7.65685 4.34315 9 6 9C6.79565 9 7.55871 8.68393 8.12132 8.12132C8.68393 7.55871 9 6.79565 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z"
                          fill="#CBD5E1"
                        />
                      </svg>
                    </span>
                    <span>2.4Cr</span>
                    <span
                      style={{
                        color: "#64748B",
                        marginLeft: "10px",
                        fontSize: "1.29vh",
                      }}
                    >
                      Indirect
                    </span>
                  </>
                ),
              },
            ]}
            height={20}
            iconSize={0}
            wrapperStyle={{
              position: "absolute",
              left: "1.64vw",
              top: "-2.7vh",
              fontSize: "2.7vh",
            }}
          />
          <Bar dataKey="pv" fill="#38BDF8" />
          <Bar dataKey="uv" fill="#6366F1" />
        </BarChart>
      </ResponsiveContainer>
    );
}

CardContent.defaultProps = {
  mode: "primary",
};
