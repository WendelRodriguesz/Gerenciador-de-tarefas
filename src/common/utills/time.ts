export function timeForSeconds(time:string){
    const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");

    const hoursEmSeconds = Number(hours) * 3600;
    const minutesEmSeconds = Number(minutes) * 60;
    return hoursEmSeconds + minutesEmSeconds + Number(seconds);
}