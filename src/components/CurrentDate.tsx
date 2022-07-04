import sun from "../images/weather/sun.png"
import moon from "../images/weather/moon.png"


const CurrentDate: React.FC = () => {

  const data: Date = new Date();
  const todaysDate: String = `Data:${data.getDate()}.${data.getMonth() + 1}.${data.getFullYear()}`;



  const compareData: number = data.getHours();
  let weatherPicture = (sun)
  if (compareData > 4 && compareData < 22) {
    weatherPicture = (sun)
  } else weatherPicture = (moon)



  return (
    <div className="withDateBoard">
      <img className="displayWeatherPicture" src={weatherPicture} />
      <p>{todaysDate}</p>
    </div>
  )
}
export default CurrentDate