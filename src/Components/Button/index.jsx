import './styles.css'

export const Button = ({onClick, disabled}) => (
    <button disabled={disabled}
     onClick={onClick}>Load more posts</button>
)