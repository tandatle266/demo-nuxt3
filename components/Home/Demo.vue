<template>
	<div>
			Home Page
			<div>
				public key {{ $config.public.stripePublicKey }}
			</div>
			<div>
				config {{ $config }}
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