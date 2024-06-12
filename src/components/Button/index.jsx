import './button.css'

function Button(props) {
    return(
        <button type="submit" className="submit_button" onClick={props.handleClickButton} disabled={props.disabled}>
          Gerar
          <img src="Vector.png" id='image'/>
        </button>
    )
}

export default Button