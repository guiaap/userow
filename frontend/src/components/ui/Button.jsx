export default function Button({ children, onClick }) {

    return (
        <button 
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