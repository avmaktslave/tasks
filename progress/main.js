function userProgress(time) {
    let start = 0;
    let timeout = Math.round(time * 10);
    const progEl = document.getElementById('user-progress');
    const intervalId = setInterval(() => {
        if (start > 100) {
            clearInterval(intervalId);
            const block = document.querySelector('.show-me');
            block.style.display = 'block';
        } else {
            progEl.value = start;
            start++;
        }
    }, timeout);
}

userProgress(1);