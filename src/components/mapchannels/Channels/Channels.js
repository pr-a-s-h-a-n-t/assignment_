import * as React from "react";

import { Typography, Button, Grid, Box } from "@mui/material";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ChannelsData } from "../../../schema";
import {
  FetchAllChannels,
  UpdatePrimaryChannels,
  UpdateReferenceChannels,
  ToggleBackupChannels,
  AddBackupChannels,
  DeleteBackupChannels,
  UpdateBackupChannelsPrimaryChannels,
  UpdateBackupChannelsReferenceChannels,
} from "../../../redux/actionCreater/Action";
import { useDispatch, useSelector } from "react-redux";
import CustomDropDown from "../../common/customdropdown/CustomDropDown";
import { primaryChannelOption, referenceChannelOption } from "../../randomdata";

export default function Channels() {

  
  const [backupChannelCount, setBackupChannelCount] = React.useState(0);

  const dispatch = useDispatch();
  const AllChannels = useSelector((state) => state.AllChannels);

  const { allChannels } = AllChannels;
  // console.log("---->allChannels in testLogic component", allChannels );

  useEffect(() => {
    if (ChannelsData.channels) {
      const allChannels = ChannelsData.channels.map((ch) => {
        return {
          channelName: ch,
          primaryChannel: "",
          refChannel: "",
          showBackUp: false,
          addBackupCh: [],
        };
      });

      dispatch(FetchAllChannels(allChannels));
    }
  }, [ChannelsData.channels, dispatch]);

  const findChannel = (channelId) => {
    dispatch(ToggleBackupChannels(channelId));
  };

  const handleChangePrimary = (value, index) => {
    dispatch(UpdatePrimaryChannels(value, index));
  };
  const handleChangeref = (value, index) => {
    dispatch(UpdateReferenceChannels(value, index));
  };

  const addChannels = (index) => {
    dispatch(AddBackupChannels(index));
  };

  const handleChangePrimaryBackUpChannel = (value, index, id) => {
    dispatch(UpdateBackupChannelsPrimaryChannels(value, index, id));
  };

  const handleChangerefBackUpChannel = (value, index, id) => {
    dispatch(UpdateBackupChannelsReferenceChannels(value, index, id));
  };

  const handleRemoveBackUpChannels = (index, id) => {
    dispatch(DeleteBackupChannels(index, id));
  };

  return (
    <Box sx={{ m: 8 }}>
      <Grid container spacing={1}>
        {allChannels && allChannels.length > 0 ? (
          allChannels.map((ch, id) => {
            return (
              <Grid
                container
                // xs={2}
                key={id}
                sx={{
                  border: "2px solid red",
                  mt: "6px",
                  background: "silver",
                }}
              >
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  xs={2}
                >
                  <Typography p>{ch.channelName}</Typography>
                </Grid>
                <Grid
                  item
                  xs={3.5}
                  sx={{
                    border: "2px solid red",
                    background: "silver",
                  }}
                >
                  <CustomDropDown
                    dropDownList={primaryChannelOption}
                    value={ch.primaryChannel}
                    onChange={(data) => handleChangePrimary(data, id)}
                  />
                </Grid>
                <Grid
                  item
                  xs={3.5}
                  sx={{
                    border: "2px solid red",
                    background: "silver",
                    //  margin: "auto"
                  }}
                >
                  <CustomDropDown
                    dropDownList={referenceChannelOption}
                    value={ch.refChannel}
                    onChange={(data) => handleChangeref(data, id)}
                  />
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    border: "2px solid red",
                    background: "silver",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => findChannel(id)}
                    sx={{}}
                  >
                    {allChannels[id].showBackUp === true
                      ? `hide Backup Channels (${backupChannelCount})`
                      : "Add Backup Channels"}
                  </Button>
                </Grid>
                {allChannels[id].showBackUp === true ? (
                  <Grid
                    container
                    // xs={12}
                    sx={{
                      border: "2px solid aquamarine",
                      background: "silver",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "5px",
                    }}
                  >
                    {allChannels[id].addBackupCh &&
                    allChannels[id].addBackupCh.length > 0
                      ? allChannels[id].addBackupCh.map((ch, index) => {
                          return (
                            <Grid
                              container
                              margin="auto"
                              sx={{
                                border: "2px solid red",
                                background: "silver",
                              }}
                              key={index}
                            >
                              <Grid
                                item
                                xs={5}
                                sx={{
                                  border: "2px solid red",
                                  background: "silver",
                                }}
                              >
                                <CustomDropDown
                                  dropDownList={primaryChannelOption}
                                  value={ch.primaryChannel}
                                  onChange={(data) =>
                                    handleChangePrimaryBackUpChannel(
                                      data,
                                      index,
                                      id
                                    )
                                  }
                                />
                              </Grid>
                              <Grid
                                item
                                xs={5}
                                sx={{
                                  border: "2px solid red",
                                  background: "silver",
                                  //  margin: "auto"
                                }}
                              >
                                <CustomDropDown
                                  dropDownList={referenceChannelOption}
                                  value={ch.refChannel}
                                  onChange={(data) =>
                                    handleChangerefBackUpChannel(
                                      data,
                                      index,
                                      id
                                    )
                                  }
                                />
                              </Grid>
                              <Grid
                                item
                                xs={2}
                                sx={{
                                  border: "2px solid red",
                                  background: "silver",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Button
                                  onClick={() => {
                                    handleRemoveBackUpChannels(index, id);
                                  }}
                                >
                                  {" "}
                                  <DeleteIcon />
                                  Delete{" "}
                                </Button>
                              </Grid>
                            </Grid>
                          );
                        })
                      : ""}
                    <Grid container>
                      <Grid
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        item
                      >
                        <Button
                          onClick={() => {
                            addChannels(id);
                          }}
                        >
                          + Add backup channels
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : (
                  ""
                )}
              </Grid>
            );
          })
        ) : (
          <Grid container>
            <Grid
              item
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No channels available
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}