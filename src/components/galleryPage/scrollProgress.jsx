import React, { Component } from "react";
import ScrollProgress from "scrollprogress";

class ScrollProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    this.progressObserver = new ScrollProgress((x, y) => {
      this.setState({ progress: y });
    });
  }

  componentWillUnmount() {
    this.progressObserver.destroy();
  }

  render() {
    const { progress } = this.state;
    const { color } = this.props;

    const style = {
      height: "5px",
      width: `${progress * 100}%`,
    };

    return <div className={`inset-0 z-20 fixed bg-${color}`} style={style} />;
  }
}

export default ScrollProgressBar;
