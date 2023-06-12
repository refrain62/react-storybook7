import './button.css'

type Props = {
    children: React.ReactNode,
    // color?: string,
    color?: 'default' | 'primary' | 'danger',
    // size?: string,
    size?: 'base' | 'sm' | 'lg',
    onClick?: () => void,
};

function Button({
    children,
    color = 'default',
    size = 'base',
    onClick = () => console.log('click'),
    }: Props) {
    return (
        <button className={`${color} ${size}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
