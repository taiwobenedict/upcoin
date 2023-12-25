import { useEffect, useRef, useState } from "react";
import ResizableBox from "./ResizableBox";
import useDemoConfig from "./useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";
import Reveal from "react-awesome-reveal";
import { fadeInRight } from "../../common/constants";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { readListOfStakeEvents } from "../../subgraph-interaction";
import { formatEther } from "viem";

export default function StakingActivityLines({ className }) {
  const [startDate, setStartDate] = useState(new Date("11/1/2023"));
  const [endDate, setEndDate] = useState(new Date());

  const [containerSize, setContainerSize] = useState({
    width: 600,
    height: 300,
  });
  const containerRef = useRef(null);

  useEffect(() => {
    // Get the initial size of the rendered div
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setContainerSize({ width: clientWidth - 50, height: clientHeight });
    }
  }, [containerRef]);

  const handleResize = (width, height) => {
    setContainerSize({ width, height });
  };

  function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp * 1000);
    date.setHours(9, 0, 0, 0); // Set the time to 09:00:00
    return date;
  }

  function createDataArray(stakes) {

    const poolLabels = ['3 months', '6 months', '8 months', '12 months'];
    const result = poolLabels.map(label => ({ label, data: [] }));
    const stakesByDayAndPool = {};

    if (stakes && stakes?.length > 0) {
      stakes.forEach(stake => {
        const date = convertTimestampToDate(stake._time).toDateString();
        const poolIndex = stake._poolIndex;
        const amount = formatEther(stake._amount);

        if (!stakesByDayAndPool[date]) {
          stakesByDayAndPool[date] = {};
        }
        if (!stakesByDayAndPool[date][poolIndex]) {
          stakesByDayAndPool[date][poolIndex] = 0;
        }

        stakesByDayAndPool[date][poolIndex] = parseFloat(stakesByDayAndPool[date][poolIndex]) + parseFloat(amount);
      });

      Object.keys(stakesByDayAndPool).forEach(date => {
        Object.keys(stakesByDayAndPool[date]).forEach(poolIndex => {
          const dataEntry = {
            primary: new Date(date),
            secondary: stakesByDayAndPool[date][poolIndex],
            radius: "4"
          };
          const label = poolLabels[poolIndex];
          const poolData = result.find(r => r.label === label);
          poolData.data.push(dataEntry);
        });
      });
    }
    // Sort each data array by date
    result.forEach(pool => {
      pool.data.sort((a, b) => a.primary - b.primary);
    });

    return result;
  }

  const { data } = useDemoConfig({
    series: 4,
    dataType: "time",
  } as any);


  const [activityGraphData, setAcitivyGraphData] = useState(data);

  const primaryAxis = React.useMemo<
    AxisOptions<typeof activityGraphData[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => (datum.primary as unknown) as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof activityGraphData[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  useEffect(() => {
    // Update the size of the Chart when the parent size changes
    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setContainerSize({
          width: clientWidth - 50,
          height: clientHeight,
        });
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const readStakingsInAPeriod = async (startDate, endDate) => {
    const list = await readListOfStakeEvents(Math.floor(new Date(startDate).getTime() / 1000), Math.floor(new Date(endDate).getTime() / 1000));

    const graphData = createDataArray(list?.stakes || []);
    if (list?.stakes?.length > 0) setAcitivyGraphData(graphData);
  }

  useEffect(() => {
    readStakingsInAPeriod(startDate, endDate);
  }, [startDate, endDate])
  console.log("activityGraphData >>> ", activityGraphData);

  return (
    <div
      className={`${className}  col-12 border rounded-3xl`}
    >
      <Reveal keyframes={fadeInRight} className='onStep' delay={0} duration={800} triggerOnce>
        <div
          className={`overflow-hidden relative md:max-h-[400px] bg-custom-light-white border-custom-medium-white   border-[1px] rounded-3xl`}
        >
          <div className="mt-5 d-flex justify-content-between align-items-center">
            <div className="text-25 font-semibold  ml-5 text-left">
              Staking Activity
            </div>
            <div className="d-flex align-items-end md:flex-wrap md:flex-row md:justify-content-end gap-1 mr-2 md:mr-10 text-14 font-semibold">
              <div className="d-flex" style={{ marginRight: "10px" }}>From: &nbsp; <DatePicker className="max-w-100 bg-transparent" selected={startDate} onChange={(date) => setStartDate(date)} /></div>
              <div className="d-flex">To:&nbsp; <DatePicker className="max-w-100 bg-transparent" selected={endDate} onChange={(date) => setEndDate(date)} /> </div>
            </div>
          </div>

          <div ref={containerRef}>
            <ResizableBox
              width={containerSize.width}
              height={320}
              onResize={handleResize}
              style={{
                background: "transparent",
              }}
            >
              <Chart
                options={{
                  data: (activityGraphData && activityGraphData?.length > 0) ? activityGraphData : [],
                  primaryAxis: primaryAxis,
                  secondaryAxes: secondaryAxes,
                  dark: true,
                  defaultColors: ["#FABE7A", "#019FC6", "#01C6A3", "#C6016A", "#FBBF7B", "#0230C7", "#02C7A4"],
                }}
              />
            </ResizableBox>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
