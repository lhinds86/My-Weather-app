import styles from './WeatherInfo.module.css'
import sunrise from '../../../src/assets/sunrise-white 1.png'
import sunset from '../../../src/assets/sunset-white 1.png'
import partlyCloudy from '../../../src/assets/partly_cloudy.png'
function WeatherInfo() {
  

    return (
      <div className={styles.infoContainer}>
        <div className={styles.weatherContainer}>
            
            <div className={styles.leftInfo}>
                <h2>75°F</h2>
                <h3>Feels like: 78°F</h3>

                <div className={styles.sunrise}>
                    <img src={sunrise} alt='Sunrise icon' />
                    <div className={styles.sunriseInfo}>
                        <h4>Sunrise</h4>
                        <p>06:37 AM</p>
                    </div>
                </div>
                <div className={styles.sunset}>
                    <img src={sunset} alt='Sunset icon' />
                    <div className={styles.sunsetInfo}>
                        <h4>Sunset</h4>
                        <p>020:37 AM</p>
                    </div>
                </div>
            </div>

            <div className={styles.middleInfo}>
                <img src={partlyCloudy} alt='Partly Cloudy' />
                <h2>Sunny</h2>
            </div>

            <div className={styles.rightInfo}>

            </div>

        </div>
      </div>
    )
  }
  
  export default WeatherInfo