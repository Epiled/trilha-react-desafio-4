
export interface IButtonProps {
    children?: React.ReactNode;
    title?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}