import './index.css'

const History = props => {
  const {browserHistory, updateTheHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserHistory

  const deleteHistory = () => {
    updateTheHistory(id)
  }

  return (
    <li>
      <div className="eachBrowserHistory">
        <div className="browser-container">
          <p className="time">{timeAccessed}</p>
          <img className="image-logo" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
        <div>
          <button
            className="delete-button-container"
            type="button"
            data-testid="delete"
            onClick={deleteHistory}
          >
            <img
              className="delete-img"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default History
