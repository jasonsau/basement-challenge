import reactDom from "react-dom"
import './styles.css';

export function Modal({ children, onClose }) {

    return (
        <div className = "modal">
            <button 
                className = "cart__close"
                onClick = { onClose }
            > -> CLOSE
            </button>
            { children }
        </div>
    )

}

export default function ModalPortal( { children, onClose } ) {
    return (
        reactDom.createPortal(<Modal  onClose = { onClose }>{ children }</Modal>, document.getElementById('modal'))
    )
}
