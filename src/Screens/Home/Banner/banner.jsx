import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import "../../../style/banner.scss";

export const Banner = (props) => {
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={4} key="content">
      <CardContent className="Content">
        <Typography className="Title">
          {props.item.Name} Simple Content Card
        </Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={4} key={item?.Name}>
        <CardMedia className="Media" image={item?.Image} title={item?.Name}>
          <Typography className="MediaCaption">
            {item?.Name} Media Card{" "}
          </Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="banner">
      <Grid container spacing={0} className="bannerGrid">
        {items}
      </Grid>
    </Card>
  );
};
