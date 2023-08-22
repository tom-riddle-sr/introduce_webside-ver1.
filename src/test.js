    // <div>
    //   <div className="frontpage_up">
    //     <p>@copyright by tom.riddle.SR</p>
    //   </div>
    //   <div>
    //     <div>
    //       <p className="">Introduce</p>
    //       <p className="">Loti Chang</p>
    //       <p className="">
    //         I sneakily put a meaningless line here, just for aesthetics{" "}
    //       </p>
    //     </div>
    //     <div>
    //       <div className="frontpage_bg_circle">
    //         <img src=""></img>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
