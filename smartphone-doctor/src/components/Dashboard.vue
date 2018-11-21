<template>
	<div>
		<h3>Dashboard</h3>
		<button
			name="button"
			@click="signOut"
		>
			Sign Out
		</button>
	</div>
</template>

<script>
	import { firebaseApp } from '../firebaseApp';

	export default {
		methods: {
			signOut() {
				firebaseApp
				.auth()
				.signOut();
			}
		}
	}
</script>