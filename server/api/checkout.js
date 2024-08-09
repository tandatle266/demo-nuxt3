console.log("Come from server/api/checkout.js");
console.log("process.env out func", process.env);

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event);
	console.log("config in func", config);
	console.log("process.env in func", process.env);
	return config
});
