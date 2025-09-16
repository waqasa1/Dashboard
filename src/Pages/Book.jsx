import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Drawer,
  TextField,
  IconButton,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import insurance from "../asset/background1.jpg";
import StatusIndicator from "../Components/StatusIndicator";
import SignalStrength from "../Components/SignalStrength";

const Book = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      niche: "Design",
      title: "Create styleguide foundation",
      description: "Create content for paceland App",
      image: insurance,
      status: "In review",
      priority: "Minor",
    },
    {
      niche: "Research",
      title: "Copywriting content",
      description: "Create content for paceland App",
      image: 'none',
      status: "Ongoing",
      priority: "Moderate",
    },
    {
      niche: "Planning",
      title: "Update Requirement list",
      description: "Create content for paceland App",
      image: 'none',
      status: "Pending",
      priority: "Critical",
    },
    {
      niche: "Design",
      title: "Create styleguide foundation",
      description: "Create content for paceland App",
      image: insurance,
      status: "In review",
      priority: "Minor",
    },
    {
      niche: "Research",
      title: "Copywriting content",
      description: "Create content for paceland App",
      image: insurance,
      status: "Ongoing",
      priority: "Moderate",
    },
    {
      niche: "Planning",
      title: "Update Requirement list",
      description: "Create content for paceland App",
      image: 'none',
      status: "Pending",
      priority: "Critical",
    },
  ];

  const handleDrawerOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography sx={{ p: 3, px: '50px', fontSize: '30px' }}>🔥 Tasks</Typography>
      <Box sx={{ py: "20px", px: '20px' }}>
        <Box sx={{ py: "20px", px: "20px" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "500px 500px",
              gap: 2,
              gridAutoFlow:'row dense'
            }}
          >
            {cardData.map((card, index) => {
              const hasImage = card.image !== "none";

              // Assign spans based on content
              const gridColumn = index % 2 === 0 ? "1" : "2"; // alternate columns
              const gridRow = hasImage ? "span 13" : "span 7"; // image = bigger span

              return (
                <Card
                  onClick={() => handleDrawerOpen(card)}
                  key={index}
                  sx={{
                    gridColumn,
                    gridRow,
                    padding: "18px",
                    border: "1px solid rgb(231, 225, 225)",
                    borderRadius: "10px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    sx={{
                      fontSize: "12px",
                      color: "white",
                      fontWeight: "600",
                      backgroundColor: "blue",
                      marginBottom: "10px",
                      width: "fit-content",
                    }}
                  >
                    {card.niche}
                  </Button>

                  {card.image !== 'none' && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={card.image}
                      alt="Task"
                      sx={{ borderRadius: "10px", marginBottom: "10px" }}
                    />
                  )}

                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h5" sx={{ fontSize: "16px", fontWeight: 600 }}>
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      {card.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "16px",
                        marginTop: "10px",
                        border: "1px solid gray",
                        width: "fit-content",
                        padding: "5px",
                        borderRadius: "10px",
                        color: "white",
                      }}
                    >
                      May 16, 2025
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}

          </Box>
        </Box>
      </Box>


      {/* Drawer Component */}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#1e293b",
            borderLeft: "1px solid #334155",
            marginTop: '4.3%',
            width: '40%',
            borderRadius: '50px',
            height: '90vh',
            marginRight: '10px'
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "white" }}>
            🔥 {selectedCard?.title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "gray" }}>
            {selectedCard?.description}
          </Typography>

          {/* Add more content here */}
          <Divider />
          <Typography sx={{ marginBottom: '20px', marginTop: '20px' }}>Properties</Typography>
          <Box sx={{ marginBottom: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ color: 'gray' }}>Progress</Typography>
              <StatusIndicator status={selectedCard?.status} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ color: 'gray' }}>Urgency</Typography>
              <SignalStrength priority={selectedCard?.priority} />
            </Box>
          </Box>
          <Typography variant="subtitle1" sx={{ color: "white", fontWeight: "bold", mb: 2 }}>
            Attachments
          </Typography>
          <Box sx={{ backgroundColor: "#334155", p: 1, borderRadius: 1, mb: 1 }}>
            <AttachFileIcon sx={{ color: "white" }} />
            <Typography variant="body2" sx={{ color: "white" }}>Client_Proposal.xls</Typography>
          </Box>
          <TextField
            fullWidth
            placeholder="Write a comment"
            variant="outlined"
            size="small"
            sx={{
              mt: 30,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#334155",
                color: "white",
              },
            }}
            InputProps={{
              endAdornment: (
                <IconButton size="small">
                  <SendIcon sx={{ color: "white" }} />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default Book;
