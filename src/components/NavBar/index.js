import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav>
      <div>
        <div className="logo-and-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p>
              Score: <span>{currentScore}</span>
            </p>
            <p>
              Top Score: <span>{topScore}</span>
            </p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
