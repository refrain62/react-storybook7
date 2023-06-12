import './button.css'

type Props = {
    children: React.ReactNode,
    color?: string,
    size?: string,
};

function Button({ children, color = 'default', size = 'base' }: Props) {
    return <button className={`${color} ${size}`}>{children}</button>;
}

export default Button;
