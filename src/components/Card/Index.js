import React from 'react';
import './styles.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

export default function CardHome({ title, image, text }) {
  return (
    <div>
      <Card raised className="fullCard">
        <CardActionArea>
          {/* <CardMedia component="img" alt={title} image={image} title={title} /> */}
          <Avatar alt={title} src={image} className="card-Avatar" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              display="block"
            >
              {title.toUpperCase()}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              display="inline"
            >
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
