import logo from './logo.svg';
import './App.css';
import data from './data.json'
import { saveAs } from 'file-saver';

function App() {
  function changeLog() {
    let change = [];
    let keys = Object.keys(data.changelog);
          keys.map((x) => {
              let value = data.changelog[x];
              return change.push(<span><h1 className='text-xl font-bold text-gdd'>{x}<span className='font-normal text-gray-400 px-2'>{value}</span></h1></span>)
          })
    return change
  }
  function comments() {
    let comment = [];
    let keys = Object.keys(data.comments)
    keys.map((x) => {
      let value = data.comments[x];
      return comment.push(<span><h1 className='text-xl font-bold text-gdd'>{x}<span className='font-normal text-gray-400 px-2'>{value}</span></h1></span>)
  })
  return comment
  }
  function save() {
    saveAs('/GameDesignV.1.3.3.zip', "spacePiratesV.1.3.3.zip")
  }
  return (
    <body className="App">
      <main className="flex min-h-screen h-full flex-col items-center justify-between px-24 py-12">
      <div className='fixed left-20 top-[15%]'>
        <div className='h-fit w-[250px] text-center bg-[#1b1a1a] rounded-lg gap-4 flex flex-col p-4'>
            <a className='font-bold font-gdd text-xl hover:text-red-500' href='#overview'>Overview</a>
            <a className='font-bold font-gdd text-xl hover:text-red-500' href='#assets'>Assets</a>
            <a className='font-bold font-gdd text-xl hover:text-red-500' href='#art'>Art</a>
            <a className='font-bold font-gdd text-xl hover:text-red-500' href='#story'>Story</a>
            <a className='font-bold font-gdd text-xl hover:text-red-500' href='#controls'>Controls</a>
            <a className='font-bold font-gdd text-xl hover:text-red-500' href='#scenes'>Scenes</a>
            <a className='font-bold font-gdd text-xl hover:text-red-500' href='#mda'>MDA</a>
            <a className='font-bold font-gdd text-xl hover:text-red-500' href='#roadmap'>RoadMap</a>
            <a className='font-bold font-gdd text-xl hover:text-red-500' href='#changelog'>Change Log</a>
            <a className='font-bold font-gdd text-xl hover:text-red-500' href='#comments'>Comments</a>
            <a className='font-bold font-gdd text-xl hover:text-red-500' href={'#download'}>Download</a>
        </div>
      </div>
       <div className='h-full w-full flex flex-col items-center justify-center' id='body'>
          <div className='top w-full text-center' id='header'>
            <h1 className='text-4xl font-gdd font-bold '>Space Pirates | Game Design Document</h1>
          </div>
          <div className='bg-[#1b1a1a] h-fit my-10 rounded-2xl w-[50%] '>
                <div className='h-full w-full p-6'>
                  <h1 id='overview' className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>Overview</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    <h1 className='text-xl font-bold text-gdd'>Game's Title:<span className='font-normal text-gray-400 px-2'>{data.title}</span></h1>
                    <h1 className='text-xl font-bold text-gdd'>Game's Genre:<span className='font-normal text-gray-400 px-2'>{data.genre}</span></h1>
                    <h1 className='text-xl font-bold text-gdd'>Game's Target Age Of Players:<span className='font-normal text-gray-400 px-2'>{data.tap}</span></h1>
                    <h1 className='text-xl font-bold text-gdd'>Game's ESRP Rating<span className='font-normal text-gray-400 px-2'>{data.esrp}</span></h1>
                    <h1 className='text-xl font-bold text-gdd'>Game's Summary<span className='font-normal text-gray-400 px-2'>{data.summary}</span></h1>
                    <h1 className='text-xl font-bold text-gdd'>Game's UI & Art<span className='font-normal text-gray-400 px-2'>{data.ui}</span></h1>
                  </div>
                  <h1 id='assets' className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>Assets</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    <span><h1 className='text-xl font-bold text-gdd'>Enemy Laser: <a href='https://www.kenney.nl' className='font-normal text-gray-400 px-2'>{data.assets.enemyLaser}</a></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Title Music: <a href='https://mixkit.co/free-stock-music/' className='font-normal text-gray-400 px-2'>{data.assets.titleMusic}</a></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Pickup Sound: <a href='https://www.kenney.nl' className='font-normal text-gray-400 px-2'>{data.assets.pickupSound}</a></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Health Pack: <a href={data.assets.healthPowerup.link} className='font-normal hover:border-b border-b-gray-400 text-gray-400 px-2'>{data.assets.healthPowerup.text}</a></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Ammo Powerup: <a href={data.assets.ammoPowerup.link} className='font-normal hover:border-b border-b-gray-400 text-gray-400 px-2'>{data.assets.ammoPowerup.text}</a></h1></span>
                  </div>
                  <h1 id='art' className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>Art</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    <span><h1 className='text-xl font-bold text-gdd'>User Interface: <span className='font-normal text-gray-400 px-2'>{data.art.ui}</span></h1></span>
                  </div>
                  <h1 className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>Hero Craft</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    <span><h1 className='text-xl font-bold text-gdd'>Attached Components: <span className='font-normal text-gray-400 px-2'>{data.assets.components}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Scripts: <span className='font-normal text-gray-400 px-2'>{data.assets.scripts}</span></h1></span>
                  </div>
                  <h1 id='story' className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>Story</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    <span><h1 className='text-xl font-bold text-gdd'>Exposition: <span className='font-normal text-gray-400 px-2'>{data.story.exposition}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Inciting Incident: <span className='font-normal text-gray-400 px-2'>{data.story.ii}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Rising Action: <span className='font-normal text-gray-400 px-2'>{data.story.ra}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Climax: <span className='font-normal text-gray-400 px-2'>{data.story.climax}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Falling Action: <span className='font-normal text-gray-400 px-2'>{data.story.fa}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Resolution: <span className='font-normal text-gray-400 px-2'>{data.story.res}</span></h1></span>
                  </div>
                  <h1 id='controls' className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>Controls</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    <span><h1 className='text-xl font-bold text-gdd'>Move Forwards: <span className='font-normal text-gray-400 px-2'>{data.controls.forwards}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Move Backwards: <span className='font-normal text-gray-400 px-2'>{data.controls.backwards}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Move Left: <span className='font-normal text-gray-400 px-2'>{data.controls.left}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Move Right: <span className='font-normal text-gray-400 px-2'>{data.controls.right}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Shoot Laser: <span className='font-normal text-gray-400 px-2'>{data.controls.shoot}</span></h1></span>
                  </div>
                  <h1 id='scenes' className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>Scenes</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    <span><h1 className='text-xl font-bold text-gdd'>Main Menu: <span className='font-normal text-gray-400 px-2'>{data.scenes.mainMenu}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Level 1: <span className='font-normal text-gray-400 px-2'>{data.scenes.level1}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Credits: <span className='font-normal text-gray-400 px-2'>{data.scenes.credits}</span></h1></span>
                  </div>
                  <h1 id='mda' className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>MDA</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    <span><h1 className='text-xl font-bold text-gdd'>Difficulty: <span className='font-normal text-gray-400 px-2'>{data.mda.difficuly}</span></h1></span>
                    <span><h1 className='text-xl font-bold text-gdd'>Game Flow: <span className='font-normal text-gray-400 px-2'>{data.mda['game-flow']}</span></h1></span>
                  </div>
                  <h1 id='roadmap' className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>RoadMap</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    <span><h1 className='text-xl font-bold text-gdd'>Post Processing Effects: <span className='font-normal text-gray-400 px-2'>{data.roadmap['post-effects']}</span></h1></span>
                  </div>
                  <h1 id='changelog' className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>Change Log</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    {changeLog()}
                  </div>
                  <h1 id='comments' className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>Comments</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    {comments()}
                  </div>
                  <h1 id='download' className='text-center text-red-500 font-bold font-gdd text-3xl p-6'>Download</h1>
                  <div className='m-6 flex flex-col gap-4'>
                    <a onClick={save} className='hover:cursor-pointer'><h1 className='text-xl font-bold text-gdd hover:text-[#5dcee2]'>Click Here: <span className='font-normal text-gray-400 px-2'></span></h1></a>
                  </div>
                </div>
          </div>
       </div>
    </main>
    </body>
  );
}

export default App;
