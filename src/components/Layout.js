import { Outlet } from "react-router-dom";
import Main from "./Main";

export default function layout() {
    return (
        
        <main>
            <article className='container text-center'>
                <div className='row'>
                    <Outlet/>
                </div>
            </article>
        </main>
    )
}