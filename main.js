//const moment = require("moment");
//let nowSec = m.format("x");
let tgt = moment("2300-01-01 00:00:00");
//let tgtSec = tgt.format("x");

let output = document.createElement("p");
output.textContent = "ドラえもん誕生まであと";
document.body.appendChild(output);
const countDown = () => {
    let now = moment(new Date());
    cnt = tgt.clone().diff(now);
    cnt = Math.floor(cnt / 1000); // ミリ秒=>秒
    cntSec = cnt % 60;
    cntDay = Math.floor(cnt / 60 / 60 / 24); //day=60sec*60min*24h
    cntHour =
        Math.floor(cnt / 60 / 60) - 24 * cntDay; // 1hour=60sec*60minで割る,24hour*n_daysを引く
    cntMin = Math.floor(
        // 端数のsec,60sec*60min*n_hour,60sec*60min*24hour*n_daysを引く
        (cnt -
            cntSec -
            cntDay * 24 * 60 * 60 -
            cntHour * 60 * 60) /
            60 // n_min=60secで割る
    );
    output.textContent = `ドラえもん誕生まであと${cntDay}日${cntHour}時間${cntMin}分${cntSec}秒`;
};
const howmanyTime = () => {
    setInterval(() => {
        countDown();
    }, 1000);
};
howmanyTime();
