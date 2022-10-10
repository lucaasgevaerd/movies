import './styles.css'

function Loader() {
  return (
    <>
      <div className="circles-moving-horizontally-loader-container">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Loader