export class ScheduleData {
    constructor() {
        this.isDayOff = false;
        this.hasSecondStream = false;

        this.day = "null";
        this.firstTime = "14:00";
        this.secondTime = "20:00";
        this.firstContent = "Unknown stream";
        this.secondContent = "Unknown stream";
    }

    setIsdayOff(isDayOff) {
        this.isDayOff = isDayOff;
    }
    getIsDayOff() {
        return this.isDayOff;
    }

    setHasSecondStream(hasSecondStream) {
        this.hasSecondStream = hasSecondStream;
    }
    getHasSecondStream() {
        return this.hasSecondStream;
    }

    setDay(day) {
        this.day = day;
    }
    getDay() {
        return this.day;
    }

    setFirstTime(time) {
        this.firstTime = time;
    }
    getFirstTime() {
        return this.firstTime;
    }

    setSecondTime(time) {
        this.secondTime = time;
    }
    getSecondTime() {
        return this.secondTime;
    }

    setFirstContent(content) {
        this.firstContent = content;
    }
    getFirstContent() {
        return this.firstContent;
    }

    setSecondContent(content) {
        this.secondContent = content;
    }
    getSecondContent() {
        return this.secondContent;
    }
}