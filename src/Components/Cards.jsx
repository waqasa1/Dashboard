import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

// --- Wave SVG Components ---
const PurpleWave = () => (
  <svg width="120" height="60" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M0 60 Q 15 50, 30 55 T 60 45 T 90 50 T 120 40 T 150 45"
      stroke="#5A4FFF" 
      strokeWidth="3" 
      fill="none" 
      strokeLinecap="round"
    />
  </svg>
);

const BlueWave = () => (
  <svg width="120" height="60" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M0 60 Q 15 50, 30 55 T 60 45 T 90 50 T 120 40 T 150 45"
      stroke="#2196F3" 
      strokeWidth="3" 
      fill="none" 
      strokeLinecap="round"
    />
  </svg>
);

const RedWave = () => (
  <svg width="120" height="60" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M0 60 Q 15 50, 30 55 T 60 45 T 90 50 T 120 40 T 150 45"
      stroke="#F44336" 
      strokeWidth="3" 
      fill="none" 
      strokeLinecap="round"
    />
  </svg>
);

// --- Card Data ---
const cardDetail = [
  { title:'Task Completed', Completed:'08', graph:PurpleWave, graphDetail:'10+ more from last week' },
  { title:'New Task', Completed:'10', graph:BlueWave, graphDetail:'10+ more from last week' },
  { title:'Pending Tasks', Completed:'10', graph:RedWave, graphDetail:'08+ more from last week' },
  { title:'Over Due Tasks', Completed:'10', graph:RedWave, graphDetail:'08+ more from last week' },
];

const Cards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // column on mobile, row on desktop
        flexWrap: "wrap",
        gap: 2,
        justifyContent: { xs: "center", md: "flex-start" },
      }}
    >
      {cardDetail.map((card, index) => (
        <Card
          key={index}
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 22%" }, // full width on mobile, ~25% each on desktop
            minWidth: "220px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "15px",
          }}
        >
          <CardContent sx={{ mt: 1 }}>
            <Box>
              <Box sx={{display:'flex', justifyContent:'space-between', mb: 3}}>
                <StarIcon />
                <Typography>{card.title}</Typography>
                <Typography>{card.Completed}</Typography>
              </Box>
              <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, gap:'10px', alignItems:'center'}}>
                {card.graph()}
                <Box sx={{width:{xs:'100%', md:'60%'}, textAlign:{xs:'center', md:'left'}}}>
                  <Typography color='text.secondary'>{card.graphDetail}</Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default Cards
