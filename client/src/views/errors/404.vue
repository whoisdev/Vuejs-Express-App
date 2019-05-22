<template>
    <div class="container">
        <div class="error__page shadow-12">
            <q-btn to="/" icon="home" class="fixed-center" style="background: #FF0080; color: white" label="Back to Home" />
        </div>
    </div>
</template>
<style scoped>
.error__page{
    background: url('../../assets/404.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    background-size:100%;
    width:100%;
}
.container{
    height: 100vh;
}
</style>
