import './Button.css'

const Button = ({ buttonLink, buttonText, highlighted }) => {

    const buttonStyle = {
        backgroundColor: highlighted ? 'green' : 'white'
    }

    return (
        <a style={buttonStyle} className='Button' href={buttonLink}>
            {buttonText}
        </a>
    )
}

export default Button