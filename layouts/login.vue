<template>
  <div>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  };
</script>

<style>
@import '././../assets/styles/global.css';
body {
  margin: 0;
  padding: 0;
}

header {
  background-color: #0092DD;
  color: white;
  padding: 10px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links a {
  color: white;
  margin-left: 15px;
}

main {
  padding: 20px;
}
</style>