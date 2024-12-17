class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="mins"]`),
            secs: document.querySelector(`${this.selector} [data-value="secs"]`),
        };
        this.start();
    }

    start() {
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;

            if (time <= 0) {
                clearInterval(this.intervalId);
                this.updateTimer(0, 0, 0, 0); // Зупинка таймера на нулях
                return;
            }

            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);

            this.updateTimer(days, hours, mins, secs);
        }, 1000);
    }

    updateTimer(days, hours, mins, secs) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = String(hours).padStart(2, '0');
        this.refs.mins.textContent = String(mins).padStart(2, '0');
        this.refs.secs.textContent = String(secs).padStart(2, '0');
    }
}
new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 18, 2024'),

})