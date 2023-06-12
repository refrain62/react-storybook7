import './button.css'

type Props = {
    children: React.ReactNode,
    color?: string,
    //color?: 'default' | 'primary' | 'danger',
    size?: string,
    // size?: 'base' | 'sm' | 'lg',
};

function Button({ children, color = 'default', size = 'base' }: Props) {
    return <button className={`${color} ${size}`}>{children}</button>;
}

export default Button;
