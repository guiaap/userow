import { Outlet } from "react-router-dom";

export default function AuthLayout() {

    return (
        <div className="bg-(--color-bg-primary)">
            <div className="
                min-h-screen
                max-w-(--container-page)
                mx-auto
                text-(--color-text-primary)
                font-sans
                shadow-xl
                flex items-center justify-center
            ">
                <main className="
                    p-5
                    bg-(--color-bg-secondary)
                    border border-(--color-border)
                    rounded-md
                    shadow-md
                ">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}