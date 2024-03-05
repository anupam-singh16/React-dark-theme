import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const data = [];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {[{}, {}, {}]?.map((item, index) => (
        <Box key={index} sx={{ width: 510, marginLeft: 10, my: 5 }}>
          <Skeleton variant="rectangular" width={350} height={250} />

          <Box sx={{ pt: 0.5 }}>
            <Skeleton width="70%" />
            <Skeleton width="60%" />
            <Skeleton width="50%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
      <Media />
    </Box>
  );
}
