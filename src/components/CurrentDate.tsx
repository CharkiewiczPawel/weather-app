
const CurrentDate: React.FC=()=>{
    
    const data:Date=new Date();
    const todaysDate:String=`Data:${data.getDate()}.${data.getMonth()+1}.${data.getFullYear()}`;
    const currentHours:String=`Godzina:${data.getHours()}:${data.getMinutes()}`;

    const compareData:number=data.getHours();
    let weatherPicture=("./images/weather/sun.png")
    if(compareData>4&&compareData<22){
        weatherPicture=("./images/weather/sun.png")
    }else weatherPicture=("./images/weather/moon.png")

    
    
    return(
    <div className="withDateBoard">
      <img className="displayWeatherPicture" src={weatherPicture} />
      <p>{todaysDate}</p>
      <p>{currentHours}</p>
    </div>        
    )
    }
    export default CurrentDate