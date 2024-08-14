import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box 
        sx={{ 
          height: { sx: "auto", md: "92vh" }, 
          borderRight: "1px solid #3d3d3d", 
          px: { sx: 0, md: 2 } 
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box 
        p={2} 
        sx={{ 
          overflowY: "auto", 
          height: "90vh", 
          flex: 2, 
          marginRight: { xs: "0", md: "40px" } // Set max right margin
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        {/* Container around the Videos component with max right margin */}
        <Box 
          sx={{ 
            padding: "20px", 
            backgroundColor: "#1e1e1e", 
            borderRadius: "8px", 
            marginRight: { xs: "0", md: "40px" } // Ensure the right margin is respected
          }}
        >
          <Videos videos={videos} />
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;
