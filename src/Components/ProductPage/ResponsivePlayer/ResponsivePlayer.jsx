import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import styles from "./ResponsivePlayer.module.scss";

class ResponsivePlayer extends Component {
  render () {
    return (
      <div className={styles.player_wrapper}>
        <ReactPlayer
          className={styles.react_player}
          url='https://www.youtube.com/watch?v=_o8QtJvWRqs'
          width='100%'
          height='100%'
        />
      </div>
    )
  }
}

export default ResponsivePlayer;