import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    headsImgUrl: true,
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
      this.setState({
        headsImgUrl: true,
      })
    } else {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
      this.setState({
        headsImgUrl: false,
      })
    }
  }

  render() {
    const {headsImgUrl, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img
            src={
              headsImgUrl
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            className="img"
            alt="toss result"
          />
          <div>
            <button type="button" className="btn" onClick={this.onClickTossBtn}>
              {' '}
              Toss Coin
            </button>
          </div>
          <div className="count-container">
            <p>{`Total: ${totalCount}`}</p>
            <p>{`Heads: ${headsCount}`}</p>
            <p>{`Tails: ${tailsCount}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
