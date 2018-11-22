<template>
	<div>
		<h3>Dashboard</h3>
    <h4>Hey Yo!</h4>
		<button
			name="button"
			@click="signOut"
		>
			Sign Out
		</button>
	</div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";

export default {
  methods: {
    signOut() {
      firebaseApp
        .auth()
        .signOut()
        .then(function() {
          // eslint-disable-next-line
          console.log("#Dashboard.vue: User successfully signed out.");
        })
        .catch(function(error) {
          // eslint-disable-next-line
          console.error("#Dashboard.vue: Error while signing out the user.");
          // eslint-disable-next-line
          console.error(JSON.stringify(error));
        });
    }
  }
};
</script>