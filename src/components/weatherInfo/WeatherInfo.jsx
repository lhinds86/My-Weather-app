import styles from './WeatherInfo.module.css'
import sunrise from '../../../src/assets/sunrise-white 1.png'
import sunset from '../../../src/assets/sunset-white 1.png'
import partlyCloudy from '../../../src/assets/partly_cloudy.png'
import humidityIcon from '../../../src/assets/humidity 1.png'
import windSpeedIcon from '../../../src/assets/wind 1.png'
import pressureIcon from '../../../src/assets/pressure-white 1.png'
import uvIcon from '../../../src/assets/uv-white 1.png'
function WeatherInfo() {
  

    return (
      <div className={styles.infoContainer}>
        <div className={styles.weatherContainer}>
            {/* Left Weather Info */}
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
            {/* Middle Weather Info */}
            <div className={styles.middleInfo}>
                <img src={partlyCloudy} alt='Partly Cloudy' />
                <h2>Sunny</h2>
            </div>

            {/* Right Weather Info */}
            <div className={styles.rightInfo}>
                <div className={styles.weatherLeft}>
                    <div className={styles.humidity}>
                        <img src={humidityIcon} alt="Humidity Icon" />
                        <p>41%</p>
                        <h4>Humidity</h4>
                    </div>
                    <div className={styles.windSpeed}>
                        <img src={windSpeedIcon} alt="Wind Speed Icon" />
                        <p>2km/h</p>
                        <h4>Wind Speed</h4>
                    </div>
                </div>

                <div className={styles.weatherRight}>
                    <div className={styles.pressure}>
                        <img src={pressureIcon} alt="Pressure Icon" />
                        <p>997hPa</p>
                        <h4>Pressure</h4>
                    </div>
                    <div className={styles.uv}>
                        <img src={uvIcon} alt="UV Icon" />
                        <p>8</p>
                        <h4>UV</h4>
                    </div>
                </div>
            </div>

        </div>
      </div>
    )
  }
  
  export default WeatherInfo