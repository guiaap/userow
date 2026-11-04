export default function CreateAccount({ children }) {

    return (
        <h1 className="
            relative
            pb-1
            text-[1.4rem]
            font-bold text-center
            after:content-['']
            after:absolute after:bottom-0 after:left-1/2
            after:-translate-x-1/2
            after:h-[2px] after:w-15
            after:bg-(--color-accent)
        ">
            {children}
        </h1>   
    );
}