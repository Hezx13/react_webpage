import styles from './Borderbutton.module.css'


export const BorderButton = (props) =>{
    return (
        <div className={props.cardButton ? styles.cardButton : ''}>
            <button type={Array('submit','button','reset').includes(props.type) ? props.type : 'button'} onClick={()=>props.onClick} className={styles['btn-4']}><span><p>{props.text}</p></span></button>
        </div>
        
    )
}