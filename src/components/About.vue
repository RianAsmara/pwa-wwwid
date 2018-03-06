<template>
	<div class="container">
        <p> 
            <h2> Vue PWA for WWWID Challenge </h2>
            <p>Find Me On</p>
            <a href="https://github.com/RianAsmara/">Github</a>
        </p>
    </div>
</template>

<style scoped>
.container {
    margin: 200px auto;
}
h2 {
    font-size: 20px;
}
p {
    font-size: 17px;
}
a {
    color: #000;
    margin-top: -15px;
}

@media only screen and (max-width: 750px) {
  .container {
      width: 60%;
  }
  h2 {
      font-size: 16px;
  }
}
</style>
