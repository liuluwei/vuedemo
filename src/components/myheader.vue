<template>
    <div>
        {{count}}
        <button @click="clickHandle"></button>
    </div>
</template>
<script>
export default {
    props: ["count1"],
    data(){
        return {
            count: this.count1
        }
    },
    methods:{
        clickHandle(){
            this.count++
            this.$emit("parent")
        }

    }
}
</script>
<style>

</style>