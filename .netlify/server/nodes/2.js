

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.WB-Xszh6.js","_app/immutable/chunks/scheduler.dM4H8AQ0.js","_app/immutable/chunks/index.ArIGaIU1.js"];
export const stylesheets = ["_app/immutable/assets/2.qMhDDfEQ.css"];
export const fonts = [];
