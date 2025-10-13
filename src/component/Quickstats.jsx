import './Quickstats.css';

import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './webUsageStats';
import { useAnimate } from '@mui/x-charts/hooks';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { styled } from '@mui/material/styles';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';

const size = {
  width: 200,
  height: 200,
};

const successData = [
  { label: 'Success', value: 85 },
  { label: 'Failure', value: 15 },
];

const Text = styled('text')(({ theme }) => ({
  ...theme?.typography?.body2,
  stroke: 'none',
  fill: (theme.vars || theme)?.palette?.text?.primary,
  transition: 'opacity 0.2s ease-in, fill 0.2s ease-in',
  textAnchor: 'middle',
  dominantBaseline: 'central',
  pointerEvents: 'none',
}));

function BarLabel(props) {
  const {
    color,
    yOrigin,
    x,
    y,
    width,
    skipAnimation,
    ...otherProps
  } = props;

  const animatedProps = useAnimate(
    { x: x + width / 2, y: y - 8 },
    {
      initialProps: { x: x + width / 2, y: yOrigin },
      createInterpolator: interpolateObject,
      transformProps: (p) => p,
      applyProps: (element, p) => {
        element.setAttribute('x', p.x.toString());
        element.setAttribute('y', p.y.toString());
      },
      skip: skipAnimation,
    },
  );

  return (
    <Text {...otherProps} fill={color} textAnchor="middle" {...animatedProps} />
  );
}

function Quickstats()
{
    const pieSize = { width: 200, height: 150 };

    return (
      <>
        <div
          style={{
            backgroundColor: "whitelime",
            padding: "30px",
            width: "1000px",
            marginTop: "40px",
            paddingTop: "10px",
            borderRadius: "20px",
            height: "100vh",
          }}
        >
          <div style={{ textAlign: "center", margin: "20px" }}>
            <h2
              className="header"
              style={{
                marginLeft: "330px",
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                width: "290px",
                borderRadius: "10px",
              }}
            >
              Performance Metrics
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              paddingLeft: "100px",
              width: "900px",
              height: "900px",
              flexDirection: "column",
              border: "1px solid #3091FF",
              backgroundColor: "#C7E1FF",
              borderRadius: "40px",
              overflowY: "scroll",
              msOverflowStyle: "none", // IE and Edge
              scrollbarWidth: "none", // Firefox
            }}
            className="hide-scroll"
          >
            <style>
              {`
                .hide-scroll::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <div className="box" style={{ contentAlign: "center", justifyContent: "center" }}>
              <div className="header-box1">
                <h6>Total Cases Handled</h6>
                <h1>215</h1>
                Cumulative since joining
              </div>
              <div>
                <LineChart
                  className="graph"
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      area: true,
                    },
                  ]}
                  width={350}
                  height={300}
                />
              </div>
            </div>

            <div className="box">
              <div className="header-box1">
                <h6> Cases Solved</h6>
                <h1>213</h1>
                <p>Successful outcomes</p>
                <PieChart
                  width={350}
                  height={300}
                  paddingBottom={20}
                  id="piechart"
                  series={[
                    {
                      arcLabel: (item) => valueFormatter(item.value),
                      arcLabelMinAngle: 35,
                      arcLabelRadius: "60%",
                      data: desktopOS,
                    },
                  ]}
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fontWeight: "bold",
                    },
                  }}
                  {...pieSize}
                />
              </div>
            </div>

            <div className="box">
              <div className="header-box1">
                <h6> Active Cases</h6>
                <h1>12</h1>
                <p>Currently ongoing</p>
                <ChartContainer
                  className="chart"
                  xAxis={[{ scaleType: "band", data: ["A", "B", "C"] }]}
                  series={[{ type: "bar", id: "base", data: [5, 17, 11] }]}
                  height={220}
                  yAxis={[{ width: 30 }]}
                  margin={{ left: 0, right: 10 }}
                >
                  <BarPlot barLabel="value" slots={{ barLabel: BarLabel }} />
                  <ChartsXAxis />
                  <ChartsYAxis />
                </ChartContainer>
              </div>
            </div>

            <div className="box">
              <div className="header-box1">
                <h6>Success Rate</h6>
                <h1>85%</h1>
                <p>Based on solved cases</p>
              </div>
              <PieChart
                className="pie"
                series={[
                  {
                    arcLabel: (item) => valueFormatter(item.value),
                    arcLabelMinAngle: 35,
                    arcLabelRadius: "60%",
                    data: successData,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fontWeight: "bold",
                  },
                }}
                {...size}
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default Quickstats;

