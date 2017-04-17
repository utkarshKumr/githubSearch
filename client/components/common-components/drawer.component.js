import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

export default class DrawerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle(){this.setState({open: !this.state.open})};



  render() {
        const style = {
  margin:5,
      width:90,
    height:25,
};

const drawerStyle={
    width:"50%"
}
const buttonStyle={
    padding:0,
    height:25
}

var messages=this.props.nMessage.map((item)=>{
    return(<MenuItem>{item}</MenuItem> )
})
    return (
      <span className="hidden-xs">
        {/*<RaisedButton style={style}
          label="Toggle"
          onClick={this.handleToggle.bind(this)}
        />*/}
            <Badge
      badgeContent={this.props.nMessage.length}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}
    >
      <IconButton tooltip="Notifications" style={buttonStyle} onClick={this.handleToggle.bind(this)}>
        <NotificationsIcon />
      </IconButton>
      </Badge>
        <Drawer open={this.state.open} style={drawerStyle} width={500}>
            <MenuItem onClick={this.handleToggle.bind(this)}><pre>Close         </pre></MenuItem> 
          {messages}
        </Drawer>
      </span>
    );
  }
}