<template>
	<div>
			Home Page
			<div>
				config {{ $config }}
			</div>
			<div>
				ENV {{ process?.env }}
			</div>
	</div>
</template>

<script>
export default {
	name: 'HomeDemo',
	async mounted() {
		console.log('HomeDemo mounted')

		try {
			const config = await useFetch("/api/checkout", {
				method: "POST",
				body: JSON.stringify({})
			});
			console.log(config, "config")
		} catch(err) { console.log(err, "err") }
		
	}
};
</script>