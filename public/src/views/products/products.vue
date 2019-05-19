<template>
    <div class="container">
        <div class="row">
            <card/>
            <card/>
            <card/>
        </div>
    </div>
</template>
<style scoped>
</style>

<script>
import card from '../../components/card/card';
export default {
    name : 'products',
    components : {
        card
    }
}
</script>