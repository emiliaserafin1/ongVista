<template>
  <div>
    <header>
      <div class="navbar">
        <div class="nav-links">
          <a href="/dashboard">Dashboard</a>
        </div>
      </div>
    </header>
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
body {
  font-family: 'Arial', sans-serif;
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