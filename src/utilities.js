export function formatDate(date) {
    const options = { weekday: "long", day: "numeric", month: "long" };
    return new Intl.DateTimeFormat("en-EN", options).format(date);
}