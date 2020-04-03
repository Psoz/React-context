import React,{useState, useEffect,useContext}  from 'react';
import styles from "./modal.module.scss";
import cx from 'classnames';
import ModalContext from '../../context/Modal/ModalContext';

const Modal = () => {
    const { addModal,closeModal } = useContext(ModalContext);
    const [component,setcomponent] = useState(()=>null);
    const [open,setOpen] = useState(false);
    const [modalState] = useState({isOpen:setOpen,componentToRender:setcomponent});

    useEffect(() => {
        addModal('globalModal', modalState);
    },[]);

    return(
    <div className={cx(styles.container,{[styles.open]:open})}>
        <div className={styles.content}>
            <div onClick={()=>closeModal('globalModal')} className={styles.closeModal}>X</div>
            {component}
        </div>
    </div>)
}

export default Modal;