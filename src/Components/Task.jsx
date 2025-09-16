import React from "react";
import { Box, Typography, Card, Button, LinearProgress } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

const Task = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: "100%",
        p: { xs: 1, md: 3 },
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography sx={{ fontSize: { xs: "20px", md: "30px" } }}>
        Today's Tasks
      </Typography>

      {/* Example task card */}
      {[1, 2, 3].map((item, i) => (
        <Card
          key={i}
          sx={{
            p: { xs: 2, md: 3 },
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "15px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 2, md: 4 },
          }}
        >
          {/* Start time */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              background: "rgba(255, 255, 255, 0.1)",
              px: { xs: 2, md: 5 },
              py: { xs: 1.5, md: 2 },
              borderRadius: "10px",
              flexShrink: 0,
              width: { xs: "100%", md: "auto" },
              justifyContent: { xs: "flex-start", md: "center" },
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                backgroundColor: "blue",
                height: 50,
                width: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PlayArrowIcon sx={{ color: "white", fontSize: 30 }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "18px", md: "25px" } }}
              >
                Starts from
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "rgb(190, 187, 187)", mt: 0.25 }}
              >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <AccessTimeOutlinedIcon sx={{ fontSize: 18 }} /> 9:00 am
                </Box>
              </Typography>
            </Box>
          </Box>

          {/* Task details */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{ mb: 1.5, fontSize: { xs: "14px", md: "16px" } }}
            >
              Search Inspiration for Project
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                alignItems: "center",
              }}
            >
              <InsertLinkOutlinedIcon sx={{ fontSize: 18 }} />
              <Typography
                sx={{
                  color: "blue",
                  borderRight: {
                    xs: "none",
                    md: "1px solid rgb(190,187,187)",
                  },
                  pr: { md: 4 },
                }}
              >
                www.something.com
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "rgb(190, 187, 187)", display: "flex", gap: 1 }}
              >
                <SmsOutlinedIcon sx={{ fontSize: 18 }} /> 8 comments
              </Typography>
            </Box>
          </Box>

          {/* Progress bar */}
          <Box
            sx={{
              width: { xs: "100%", md: 200 },
              textAlign: { xs: "left", md: "center" },
            }}
          >
            <Typography sx={{ mb: 1, fontSize: { xs: "12px", md: "14px" } }}>
              24% completed
            </Typography>
            <LinearProgress
              variant="determinate"
              value={24}
              sx={{
                height: 10,
                borderRadius: 5,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: i === 2 ? "#9c27b0" : "#03a9f4",
                  boxShadow: `0 0 8px ${
                    i === 2 ? "#9c27b0" : "#03a9f4"
                  }, 0 0 16px ${i === 2 ? "#9c27b0" : "#03a9f4"}`,
                },
              }}
            />
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "center" },
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Button
              fullWidth={true}
              sx={{
                gap: 1,
                py: 1,
                px: 2,
                borderRadius: "10px",
                color: "white",
                background: "rgba(255, 255, 255, 0.05)",
                fontSize: { xs: "12px", md: "14px" },
              }}
            >
              <TimerOutlinedIcon sx={{ fontSize: 18 }} />
              Reminder
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Task;
