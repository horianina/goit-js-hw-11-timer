const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]')
}
// const data=Date.now()

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
const timer = {
  isActive: false,
  timerId: null,
  start(){
    if(this.isActive){
      return
    }
    this.isActive=true
    const target=new Date('January 15, 2021');

    updateClockface(0);
    this.intervalId=setInterval(()=>{
      
      const currentTime = Date.now()
      const deltaTime = target - currentTime;
      updateClockface(deltaTime);

    }, 1000)
  },
  stop(){
    clearInterval(this.intervalId);
    this.intervalId=null
    this.isActive=false
    updateClockface(0)
  }
}
refs.startBtn.addEventListener('click', timer.start.bind(timer))
refs.stopBtn.addEventListener('click', timer.stop.bind(timer))
function updateClockface(time){
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

refs.days.textContent=`${days}`;
refs.hours.textContent=`${hours}`;
refs.mins.textContent=`${mins}`;
refs.secs.textContent=`${secs}`;
}
function pad(value){
  return String(value).padStart(2,'0')
}