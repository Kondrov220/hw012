//1
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("05 28, 2025"),
});
const box = document.querySelector(`${timer.selector}`);
setInterval(() => {
    
  const now = Date.now();
  const time = timer.targetDate.getTime() - now;
  const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
  const mins =String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
  const secs = String(Math.floor((time % (1000 * 60)) / 1000) ).padStart(2, "0");
  
  box.querySelector("[data-value='days']").textContent = days;
  box.querySelector("[data-value='hours']").textContent = hours;
  box.querySelector("[data-value='mins']").textContent = mins;
  box.querySelector("[data-value='secs']").textContent = secs;
  const dayEl = box.querySelector("[data-value='days']");
if (dayEl.textContent !== days) {
  dayEl.classList.add("flip");
  setTimeout(() => dayEl.classList.remove("flip"), 700); // зняти анімацію
  dayEl.textContent = days;
}
}, 1000);
//2
let count = 2
document.querySelector("button").addEventListener("click", (e)=>{
e.preventDefault()
    const code = `
<div class="timer" id="timer-${count}">
<h1></h1>
        <div class="field">
          <span class="value" data-value="days">11</span>
          <span class="label">Days</span>
        </div>
      ​
        <div class="field">
          <span class="value" data-value="hours">11</span>
          <span class="label">Hours</span>
        </div>
      ​
        <div class="field">
          <span class="value" data-value="mins">11</span>
          <span class="label">Minutes</span>
        </div>
      ​
        <div class="field">
          <span class="value" data-value="secs">11</span>
          <span class="label">Seconds</span>
        </div>
      </div>
`
    document.querySelector("body").insertAdjacentHTML("beforeend", code)
    const timer1 = new CountdownTimer({
        selector: `#timer-${count}`,
        targetDate: new Date(document.querySelector("#time").value),
      });
      const box = document.querySelector(`${timer1.selector}`);
      box.querySelector("h1").textContent = document.querySelector("#name").value;
      setInterval(() => {
        const now = Date.now();
        const time = timer1.targetDate.getTime() - now;
        const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
        const mins =String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
        const secs = String(Math.floor((time % (1000 * 60)) / 1000) ).padStart(2, "0");
        box.querySelector("[data-value='days']").textContent = days;
        box.querySelector("[data-value='hours']").textContent = hours;
        box.querySelector("[data-value='mins']").textContent = mins;
        box.querySelector("[data-value='secs']").textContent = secs;
      }, 1000);
      count ++;
})
