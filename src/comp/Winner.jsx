// Modal as a separate component
import { useEffect, useRef } from "react";

function Winner(props) {
    const ref = useRef();

    useEffect(() => {
        if (props.winner) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [props.winner]);

    return (
        <dialog
            ref={ref}
        >
            CONTEXT!
        </dialog>
    );
}

export default Winner;