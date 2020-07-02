import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    backgroundSize: "100%",
    height: 0,
    paddingTop: "56.25%",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card raised={true} id={props.id}>
      <CardActionArea disableRipple={true}>
        <CardMedia className={classes.media} image={props.imageUrl} title={props.alt}/>
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2" >
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
