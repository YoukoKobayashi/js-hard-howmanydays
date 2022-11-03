const tgtValue =
    document.getElementById("dateSet");
//const tgtValue =
//    document.getElementsByTagName("input")[0];
let tgt = tgtValue.getAttribute("value", "value");
console.dir(dateSet); //表示内容  value:"2022-11-14",valueAsDate:Mon Nov 14 2022 09:00:00 GMT+0900
let tgtSec = moment(tgt, "x");
let output = document.getElementById("diffTime");
output.textContent = `${tgt}まであと`;

const countDown = () => {
    let now = moment(new Date());
    cnt = tgtSec.clone().diff(now);
    cnt = Math.floor(cnt / 1000); // ミリ秒=>秒
    cntSec = cnt % 60;
    cntDay = Math.floor(cnt / 60 / 60 / 24);
    cntHour =
        Math.floor(cnt / 60 / 60) - 24 * cntDay;
    cntMin = Math.floor(
        (cnt -
            cntSec -
            cntDay * 24 * 60 * 60 -
            cntHour * 60 * 60) /
            60
    );
};

//let timer;
const howmanyTime = () => {
    //clearInterval(timer);
    //timer = setInterval(() => {
    setInterval(() => {
        countDown();
    }, 1000);
    output.textContent = `${tgt}まであと${cntDay}日${cntHour}時間${cntMin}分${cntSec}秒`;
};

const dateSearch =
    document.getElementById("dateSearch");
dateSearch.addEventListener("click", () => {
    howmanyTime();
});
