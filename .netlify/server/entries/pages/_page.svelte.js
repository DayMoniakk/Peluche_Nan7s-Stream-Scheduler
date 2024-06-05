import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, e as escape, h as null_to_empty, v as validate_component, i as each } from "../../chunks/ssr.js";
class ScheduleData {
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
const css$4 = {
  code: ".week-container.svelte-x0e10a{background-color:white;width:300px;height:50px;border-radius:5px;border:3px solid rgb(66, 81, 97);margin-bottom:100px;display:flex;align-items:center;justify-content:space-around;margin-top:50px}input.svelte-x0e10a{cursor:pointer}",
  map: null
};
const Week = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dateHolder;
  createEventDispatcher();
  $$result.css.add(css$4);
  return `<div class="week-container svelte-x0e10a"><h3 data-svelte-h="svelte-jw39c4">Start date:</h3> <input type="date" name="" id="" class="svelte-x0e10a"${add_attribute("this", dateHolder, 0)}> </div>`;
});
const css$3 = {
  code: '.day-container.svelte-1tc6de5{background-color:#dbdbdb;width:80vw;max-width:700px;border-radius:5px;border:3px solid rgb(66, 81, 97);transition:background-color 0.2s;display:flex;flex-direction:column}.day-container.off.svelte-1tc6de5{background-color:rgb(83, 83, 83)}.stream.svelte-1tc6de5{height:100%;display:flex;align-items:center;justify-content:space-between;padding:0 10px 0 10px;height:50px}.stream-content.svelte-1tc6de5{flex-grow:1;height:30px;margin:0 10px 0 10px;font-size:large;transition:background-color 0.2s,\r\n            color 0.2s}.stream-content.off.svelte-1tc6de5{background-color:rgb(71, 71, 71);border:none;text-align:center;color:black}.btn-offline.svelte-1tc6de5{width:30px;height:30px;background-color:white;border:1px solid rgb(65, 65, 65);border-radius:5px;cursor:pointer;transition:background-color 0.3s;background-image:url("/icon_sleep.png");background-size:20px;background-position:center;background-repeat:no-repeat}.btn-offline.svelte-1tc6de5:hover{background-color:rgb(92, 142, 218)}.btn-offline.svelte-1tc6de5:disabled{background-color:rgb(65, 65, 65);cursor:not-allowed}.spacer.svelte-1tc6de5{width:5px}.btn-offline.stream-on.svelte-1tc6de5{background-image:url("/icon_cancel.png")}.btn-offline.stream-off.svelte-1tc6de5{background-image:url("/icon_add.png")}.day-text.svelte-1tc6de5{max-width:100px;padding-right:10px;font-weight:400;text-align:center}.stream-time.svelte-1tc6de5{height:30px;cursor:pointer}',
  map: null
};
const Day = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fullDay = "????" } = $$props;
  createEventDispatcher();
  let streamContentInput;
  let timeInput;
  if ($$props.fullDay === void 0 && $$bindings.fullDay && fullDay !== void 0)
    $$bindings.fullDay(fullDay);
  $$result.css.add(css$3);
  return `<div class="${escape(null_to_empty("day-container"), true) + " svelte-1tc6de5"}"><div class="stream svelte-1tc6de5"><h3 class="day-text svelte-1tc6de5">${escape(fullDay)}</h3> <input type="time" name="" class="stream-time svelte-1tc6de5" value="14:00" ${""}${add_attribute("this", timeInput, 0)}> <input type="text" name="" class="${escape(null_to_empty("stream-content"), true) + " svelte-1tc6de5"}" ${""}${add_attribute("this", streamContentInput, 0)}> <button class="${escape(
    null_to_empty("btn-offline stream-off"),
    true
  ) + " svelte-1tc6de5"}" ${""}></button> <div class="spacer svelte-1tc6de5"></div> <button class="btn-offline svelte-1tc6de5"></button></div> ${``} </div>`;
});
const css$2 = {
  code: "button.svelte-kdlgvs{margin:50px 0 100px 0;font-size:30px;padding:2px 10px 2px 10px;cursor:pointer;transition:scale 0.2s, padding 0.2s}button.svelte-kdlgvs:hover{scale:110%;padding:2px 30px 2px 30px}",
  map: null
};
const ApplyButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { weekDays } = $$props;
  let { scheduleData } = $$props;
  if ($$props.weekDays === void 0 && $$bindings.weekDays && weekDays !== void 0)
    $$bindings.weekDays(weekDays);
  if ($$props.scheduleData === void 0 && $$bindings.scheduleData && scheduleData !== void 0)
    $$bindings.scheduleData(scheduleData);
  $$result.css.add(css$2);
  return `<button class="svelte-kdlgvs" data-svelte-h="svelte-1nz05lr">Get Schedule</button>`;
});
const css$1 = {
  code: "h4.svelte-1v1hh2n{position:absolute;right:20px;background-color:rgba(0, 0, 0, 0.5);color:white;padding:20px;border-radius:10px;font-weight:400}",
  map: null
};
const ClipboardNotification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible = false;
  let timeout;
  function show(time) {
    if (timeout != null) {
      clearTimeout(timeout);
      visible = false;
    }
    setTimeout(
      () => {
        visible = true;
        timeout = setTimeout(
          () => {
            visible = false;
          },
          time
        );
      },
      100
    );
  }
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css$1);
  return `${visible ? `<h4 class="svelte-1v1hh2n" data-svelte-h="svelte-1lghdde">Schedule copied to the clipboard !</h4>` : ``}`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;700&display=swap");*{font-family:"Fredoka", sans-serif}body{margin:0;box-sizing:border-box;background-image:url("/background.jpg");background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:fixed;position:relative;min-height:100vh}.blur.svelte-aimgkw.svelte-aimgkw{position:absolute;backdrop-filter:blur(5px);width:100%;height:100%;background-color:rgba(0, 0, 0, 0.219);z-index:-1}.day-container.svelte-aimgkw.svelte-aimgkw{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px}.credit-container.svelte-aimgkw.svelte-aimgkw{position:absolute;bottom:5px;width:100%;text-align:center;color:rgb(175, 175, 175);font-weight:100}.credit-container.svelte-aimgkw a.svelte-aimgkw{text-decoration:none;color:rgb(224, 224, 224)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let daysString = [];
  let daysRef = new Array(7);
  let fullDays = [];
  let clipboardNotification;
  let scheduleData = [
    new ScheduleData(),
    new ScheduleData(),
    new ScheduleData(),
    new ScheduleData(),
    new ScheduleData(),
    new ScheduleData(),
    new ScheduleData()
  ];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1p7v8ea_START -->${$$result.title = `<title>Stream Scheduler</title>`, ""}<!-- HEAD_svelte-1p7v8ea_END -->`, ""} <div class="blur svelte-aimgkw"></div> ${validate_component(ClipboardNotification, "ClipboardNotification").$$render(
      $$result,
      { this: clipboardNotification },
      {
        this: ($$value) => {
          clipboardNotification = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="day-container svelte-aimgkw">${validate_component(Week, "Week").$$render($$result, {}, {}, {})} ${each(daysRef, (_, i) => {
      return `${validate_component(Day, "Day").$$render(
        $$result,
        { fullDay: daysString[i] },
        {
          fullDay: ($$value) => {
            daysString[i] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(ApplyButton, "ApplyButton").$$render(
      $$result,
      { weekDays: fullDays, scheduleData },
      {
        weekDays: ($$value) => {
          fullDays = $$value;
          $$settled = false;
        },
        scheduleData: ($$value) => {
          scheduleData = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <span class="credit-container svelte-aimgkw" data-svelte-h="svelte-x0v5s6">Developed for <a href="https://www.twitch.tv/peluche_nan7s" target="_blank" class="svelte-aimgkw">peluche_nan7s</a> by <a href="https://github.com/DayMoniakk" target="_blank" class="svelte-aimgkw">DayMoniakk</a></span>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
