import React from 'react'
import { Box } from '@mui/material'
import Cards from '../Components/Cards.jsx'
import Task from '../Components/Task.jsx'

const Home = () => {
  return (
    <>
      <Box sx={{ px: { xs: 2, md: 4 }, py: 2 }}>
        <Cards />
      </Box>
      <Task />
    </>
  )
}

export default Home
