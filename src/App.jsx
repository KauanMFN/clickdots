import { useState } from "react";

export const App = () => {
    const [clickedPoints, setClickedPoints] = useState([]);
    const [undoClickedPoints, setUndoClickedPoints] = useState([]);

    const undo = () => {
        // const undoBtn = document.querySelector("#undoBtn");

        const newClickedPoints = [...clickedPoints];
        const undoPoints = newClickedPoints.pop();
        setClickedPoints(newClickedPoints);
        setUndoClickedPoints([...undoClickedPoints, undoPoints]);
    };
    const redo = () => {
        const redoPoints = [...undoClickedPoints];
        const undoPoints = redoPoints.pop();
        setUndoClickedPoints(redoPoints);
        setClickedPoints([...clickedPoints, undoPoints]);
    };

    const reset = () => {
        setClickedPoints([]);
        setUndoClickedPoints([]);
    };

    const getCords = (e) => {
        const { clientX, clientY } = e;

        setClickedPoints([...clickedPoints, { clientX, clientY }]);

        console.log("Clicado", clickedPoints, e);
    };

    return (
        <div className="p-5">
            <div className="flex justify-center gap-2 mb-6">
                <button
                    onClick={undo}
                    className="h-fit w-fit disabled:opacity-30"
                    disabled={clickedPoints.length === 0}
                >
                    UNDO
                </button>
                <button
                    onClick={redo}
                    className="h-fit w-fit disabled:opacity-30"
                    disabled={undoClickedPoints.length === 0}
                >
                    REDO
                </button>
                <button
                    onClick={reset}
                    className="h-fit w-fit disabled:opacity-30"
                    disabled={clickedPoints.length === 0}
                >
                    RESET
                </button>
            </div>

            <div
                className="w-auto h-[780px] bg-gray-200 rounded-lg shadow-md"
                onClick={getCords}
            >
                {clickedPoints.map((clickedPoint, index) => (
                    <span
                        className="absolute bg-blue-600 block w-5 h-5 rounded-full"
                        style={{
                            top: `${clickedPoint.clientY - 10}px`,
                            left: `${clickedPoint.clientX - 10}px`,
                        }}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};
