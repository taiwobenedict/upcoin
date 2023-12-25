import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Reveal from "react-awesome-reveal";
import { fadeInUp } from "../common/constants";
import { useDispatch, useSelector } from "react-redux";
import { readListOfStakeEvents } from "../subgraph-interaction";
import { setAllStakingsList } from "../redux-toolkit/reducers/Staking";
import { calculateDailyRewards } from "../common/methods";
import { formatEther } from "viem";

export default function History({ className }) {

  const refreshFlag = useSelector(state => state.staking.refreshFlag);
  const poolsData = useSelector(state => state.staking?.poolsData);
  const stakesList = useSelector(state => state.staking?.allStakingsList);

  const [sortModel, setSortModel] = React.useState([
    {
      field: "stake",
      sort: "desc",
    },
  ]);
  const [tableRows, setTableRows] = React.useState([]);
  const dispatch = useDispatch();
  const initAllStakings = async () => {
    const list = await readListOfStakeEvents(100000000, Math.floor(Date.now() / 1000));
    dispatch(setAllStakingsList(list?.stakes || []));
  }

  React.useEffect(() => {
    initAllStakings();
  }, [refreshFlag]) //

  React.useEffect(() => {
    if (stakesList?.length > 0) {
      let tempRows = [];
      for (let index = 0; index < stakesList.length; index++) {
        tempRows.push({
          id: index + 1,
          address: stakesList[index]["_addr"],
          stake: parseFloat(formatEther(stakesList[index]["_amount"])),
          apy: parseInt(poolsData[stakesList[index]["_poolIndex"]]?.apy?.replace("%", "")),
          lockperiod: poolsData[stakesList[index]["_poolIndex"]]?.period,
          rewards:
            calculateDailyRewards(formatEther(stakesList[index]["_amount"]), poolsData[stakesList[index]["_poolIndex"]]?.period) * process.env.REACT_APP_DOSHI2USDT_RATE


        })
      }
      setTableRows(tempRows);
    }
  }, [stakesList])

  const columns = [
    {
      field: "address",
      headerName: "Address",
      editable: false,
      sortable: false,
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="w-full pl-5 ">
            <a href={`https://goerli.etherscan.io/address/${params.value}`} target="_blank"
            >{params.value}
            </a>
          </div>
        );
      },
    },
    {
      field: "stake",
      headerName: "Stake",
      editable: false,
      flex: 1,
      minWidth: 130,
      renderCell: (params) => {
        return (
          <div className="d-flex gap-2">
            <div className="">{params.value}</div>
            <div className="">SUP</div>
          </div>
        );
      },
    },
    {
      field: "apy",
      headerName: "APY",
      editable: false,
      minWidth: 80,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="d-flex gap-2">
            <div className="">{params.value}</div>
            <div className="">%</div>
          </div>
        );
      },
    },
    {
      field: "lockperiod",
      headerName: "Lock Period",
      sortable: true,
      flex: 1,
      minWidth: 110,
      renderCell: (params) => {
        return (
          <div className="d-flex gap-2">
            {
              params.value == 0 ?
                <div>Flexible</div>
                :
                <>
                  <div className="">{params.value}</div>
                  <div className="">months</div>
                </>
            }
          </div>
        );
      },
    },
    {
      field: "rewards",
      headerName: "Rewards",
      sortable: true,
      flex: 1,
      minWidth: 130,
      renderCell: (params) => {
        return (
          <div className="d-flex gap-2">
            <div className="">{isNaN(parseFloat(params.value)) === false ? parseFloat(params.value).toFixed(2) : 0}</div>
            <div className="">SUP</div>
          </div>
        );
      },
    },
  ];

  return (
    <div
      className={`${className} overflow-hidden position-relative min-h-350p  bg-custom-light-white border-custom-medium-white col-12 col-md-11 border rounded-3xl`}
    >

      <div className="text-25 font-semibold mt-5 ml-5 text-left">
        Live History
      </div>
      <Reveal keyframes={fadeInUp} className='onStep' delay={0} duration={800} triggerOnce>
        <div className="overflow-x-auto  mt-10 md:mt-0">
          <Box
            sx={{
              height: 270,
              width: "100%",
              minWidth: 500,
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <DataGrid
              rows={tableRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 3,
                  },
                },
              }}
              pageSizeOptions={[3]}
              disableRowSelectionOnClick
              components={{
                ColumnSortedAscendingIcon: () => (
                  <img
                    src={"/history/sortup.png"}
                    className="w-4 h-4"
                    alt="Ascending"
                  />
                ),
                ColumnSortedDescendingIcon: () => (
                  <img
                    src={"/history/sortdown.png"}
                    className="w-4 h-4"
                    alt="Descending"
                  />
                ),
              }}
              sortingOrder={["asc", "desc"]}
              sortModel={sortModel}
              onSortModelChange={(changedSortModel) => {
                setSortModel(changedSortModel);
              }}
              sx={{
                borderColor: "#00000000",
                border: "none",
                color: "white",
                backgroundColor: "",
                ".MuiDataGrid-sortIcon": {
                  opacity: "inherit !important",
                },
                "& .MuiDataGrid-cell, .MuiDataGrid-columnHeader": {
                  borderBottom: "1px solid #FFFFFF28",
                  display: "flex",
                  justifyContent: "center",
                },
                "& .MuiDataGrid-columnHeaders": {
                  border: "0px",
                },
                "& .MuiDataGrid-columnHeaderTitleContainer": {
                  display: "flex",
                  justifyContent: "center",
                },
                "& .MuiDataGrid-menuIcon": {
                  display: 'none'
                },
                "& .MuiDataGrid-iconButtonContainer": {
                  marginLeft: "2px",
                  visibility: "visible !important",
                  width: "auto !important",
                },
                overflowX: "visible",
              }}
            />
          </Box>
        </div>
      </Reveal>
    </div>
  );
}
