export default function Button({ children, type="button", disabled=false }) {

    return (
        <button 
            type={type}
            disabled={disabled}
            className="
                w-full
                p-2
                bg-(--color-accent) 
                text-white font-bold
                rounded-md
                cursor-pointer
                transtion-color duration-300
                hover:bg-(--color-accent-hover)
            ">
            {children}
        </button>
    );
}