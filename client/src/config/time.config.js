import { format, getHours, getMinutes, parse } from "date-fns"
import TimeDiff from 'js-time-diff'

const parseTime = (timeStr) => {
    if (!timeStr) return null;
    return parse(timeStr, 'dd/MM/yyyy HH:mm:SS', new Date())
}
export const showTimeDiff = (timeStr) => {
    const timeParsed = parseTime(timeStr);
    if(!timeParsed) return "";
    return typeof TimeDiff(timeParsed) === "string" ? TimeDiff(timeParsed) : "error in diff" 
}
export const showOnlyHour = (timeStr) => {
    const parsedTime = parseTime(timeStr);
    if(!parsedTime) return "error in Hour display";
    return `${getHours(parsedTime)}: ${getMinutes(parsedTime).toString().padStart(2, "0")}`
}
export const fomatCurrentDate = () => {
    return format(new Date(), 'dd/MM/yyyy HH:mm:SS')
}