<template>
    <div class="landing__page">
        <div class="row landingpage__cover text--white">
            <navigation/>
            <div class="col col-12 cover__content centre--align">
                <h1 class="text-h2 h2">Fashion at it's best!</h1>
                <q-btn color="purple" label="Browse" to="/products" />
            </div>
        </div>
        <div class="container">
                <h3 class="text-h3 h3 centre--align">Today's Deal</h3>
            <div class="row">
                <card></card>
                <card></card>
                <card></card>
            </div>
        </div>
    </div>
</template>

<style scoped>
.transparent{
    background: transparent !important;
}
.navbar{
    max-width: 100%;
}
.landingpage__cover{
    background-image: url('../assets/homepageCover.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 70vh;
}
</style>

<script>
import navigation from '../components/navigation/navigation';
import card from '../components/card/card';
export default {
    name : 'Index',
    components : {
        navigation,
        card
    }
}
</script>