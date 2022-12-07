import { useState } from "react";

export const App = () => {
    const [dot, setDot] = useState([]);

    let clickHistory = [];
    let n = 0;

    const undo = () => {
        // clickHistory.pop();
    };

    const redo = () => {
        console.log("Redo Click");
    };

    const createDot = (e, x, y) => {
        console.log("Clicado");

        setDot(x, y);
    };

    document.addEventListener(
        "click",
        (e) => createDot(e, e.x, e.y)
        // console.log("click", e)
    );

    return (
        <div className="h-screen p-2 relative" id="divRoot">
            <div className="flex gap-2">
                <button onClick={undo} className="z-50">
                    UNDO
                </button>
                <button onClick={redo} className="z-50">
                    REDO
                </button>
            </div>
            {dot &&
                setDot.map((indexX, indexY) => {
                    <span
                        class="absolute bg-blue-600 block w-5 h-5 rounded-full"
                        style={{ top: `${indexX}`, left: `${indexY}` }}
                    />;
                })}
        </div>
    );
};
