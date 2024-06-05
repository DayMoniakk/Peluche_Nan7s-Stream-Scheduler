export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["background.jpg","favicon.png","icon_add.png","icon_cancel.png","icon_sleep.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.rIxr3Gcr.js","app":"_app/immutable/entry/app.e-QVFse8.js","imports":["_app/immutable/entry/start.rIxr3Gcr.js","_app/immutable/chunks/entry.yq9oOVfB.js","_app/immutable/chunks/scheduler.dM4H8AQ0.js","_app/immutable/entry/app.e-QVFse8.js","_app/immutable/chunks/scheduler.dM4H8AQ0.js","_app/immutable/chunks/index.ArIGaIU1.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
