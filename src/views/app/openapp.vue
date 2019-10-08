<template>
    <div class="H5ToApp" >
        <div v-for="site in sites" :scheme="site.scheme">
        <!--需要使用a标签-->
        <span>{{site.name}}</span>
        <div style="width: 100%;height: 50px" @click="app()"> <a class="btn"  href="site.scheme">打开</a></div>
        </div>
    </div>
</template>

<script>
    //脚手架配置了alias
    import api from "@/api/api.js";
    import global from "@/api/global";
    export default {
        name: "openapp",
        data() {
            return {
                sites:[],
                scheme:'',
            };
        },
        mounted(){
        this.app();
        },
        methods: {
            app(){
                let mythis=this;
                this.$http.get(api.AllApp).then(function (response) {
                    mythis.sites=response;
                }).catch(function (error) {
                    console.log(error)
                })
            }
        },

    }
</script>

<style scoped>

</style>
