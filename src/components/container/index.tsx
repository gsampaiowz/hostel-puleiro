type ContainerProps = {
    children: React.ReactNode;
    additionalClass?: string;
};

const Container = ({children, additionalClass}: ContainerProps) => {
    return (
        <div className={`max-w-[1600px] w-[90%] ${additionalClass}`}>
            {children}
        </div>
    );
}

export default Container;