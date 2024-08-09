<template>
	<div>
			Home Page
			<div>
				config {{ $config }}
			</div>
			<div>
				ENV {{ process.env }}
			</div>
	</div>
</template>

<script>
export default {
	name: 'HomeDemo',
	mounted() {
		console.log('HomeDemo mounted')
	}
};
</script>