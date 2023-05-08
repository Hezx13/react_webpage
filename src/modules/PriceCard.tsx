import { BorderButton } from "./Borderbutton"
import styles from "./PriceCard.module.css"

const PriceCard = (props) => {
    
    function getPlanClass(prop){
        switch (prop){
            case "Basic":
                return styles.basic
            case "Hybrid":
                return styles.standard
            case "Premium":
                return styles.premium
            default:
                return styles.default
        }
    }

    return (
        
        <div className={`${styles.pricingCard} ${getPlanClass(props.plan)}` }>
      <div className={styles.heading}>
        <h4>{props.plan}</h4>
        <p>for small businesses</p>
      </div>
      <p className={styles.price}>
        $299
        <sub>/quater</sub>
      </p>
      <ul className={styles.features}>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>1 domain</strong> name
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>10 GB</strong> of disk space
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>100GB </strong>of bandwidth
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>1 MySQL</strong> database
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>5 email</strong> accounts
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>cPanel</strong> control panel
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>Free SSL</strong> certificate
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>24/7</strong> support
        </li>
        <li>
            <i className="fa-solid fa-check"></i>
            <strong>Advanced</strong> security features
          </li>
      </ul>
      <BorderButton text="Select"></BorderButton>
    </div>
    )
}

export default PriceCard