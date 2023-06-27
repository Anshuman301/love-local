import logo from './assets/logo.svg'
import menu_1 from './assets/menu-1.svg'
import menu_2 from './assets/menu-2.svg'
import team from './assets/Team.svg';
import './App.scss'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Card, { CardContent, CardHeader } from './components/Card/Card'
export const Img  = ({src}: {src: string}) => {
  const arr = src.split('/')
return (
<img src={src} alt={arr[arr.length -1].split('.')[0]}/>
)
}
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
function App() {
  return (
    <>
      <section className='app__section-1'>
      <Img src={logo}/>
      <div className='app__section-1__div'>
        <p>
          Pages
        </p>
        <ul>
          <li className='select-li'>
            <Img src={menu_1}/><span>Dashboard</span></li>
          <li>
            <Img src={menu_2} /> <span>Customer</span></li>
        </ul>
      </div>
      </section>
      <section className='app__section-2'>
        <Header/>
        <section>
          <Banner/>
        <div className='app__section-2__div-1'>
          <div>
            <Img src={team} />
          </div>
        </div>
        <div className='app__section-2__card-container'>
          <Card>
            <>
            <CardHeader title='Retail' mode='primary'/>
            <div className='app__section-2__card-container__card-content-container'>
            <CardContent data={data} type='area' mode='primary'/>
            </div>
            </>
          </Card>
          <Card>
            <>
            <CardHeader title='Customer' mode='primary'/>
            <div className='app__section-2__card-container__card-content-container'>
            <CardContent data={data} type='area' mode='primary'/>
            </div>
            </>
          </Card>
          <Card>
            <>
            <CardHeader title='Key Account' mode='primary'/>
            <div className='app__section-2__card-container__card-content-container'>
            <CardContent data={data} type='area' mode='primary'/>
            </div>
            </>
          </Card>
        </div>
        <div className='app__section-2__card-container-2'>
        <Card>
            <>
            <CardHeader title='Direct VS Indirect' mode='secondary'/>
            <div className='app__section-2__card-container-2__card-content-container'>
              <CardContent data={data} type='area' mode='secondary'/>
            </div>
            </>
          </Card>
          <Card>
            <>
            <CardHeader title='AVG Order Value' mode='secondary'/>
            <div className='app__section-2__card-container-2__card-content-container'>
              <CardContent data={data} type='bar' mode='primary'/>
            </div>
            </>
          </Card>
        </div>
        </section>
      </section>
    </>
  )
}

export default App
