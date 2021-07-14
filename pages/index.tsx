import TemperatureHeader from '../components/TemperatureHeader';
import TemperatureCalculator from '../components/TemperatureCalculator';



export default function Home() {
  return (
    <>
    <div className="global">   
    <TemperatureHeader />
    <TemperatureCalculator />  
    </div>
    </>
    )
}
