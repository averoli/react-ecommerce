

const ButtonCard = ({handleClick, children}) => {
  return(
    <button onClick={handleClick}>{children}</button>
  )
}

export default ButtonCard
