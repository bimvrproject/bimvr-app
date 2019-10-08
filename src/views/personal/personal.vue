<template>
    <div style="position: relative;">
    <!-- header开始 -->
    <div
            id="header_page_bg"
            style="position: fixed; top: 0; height: 44px; width: 100%; z-index: 10"
    >
        <a-row>
            <a-col :span="3" style="margin-top: 14px;">
                <img
                        src="../../assets/img/nav_icon_return.png"
                        style="width: 19px; height: 18px;"
                        v-on:click="returnHome()"
                />
            </a-col>
            <a-col :span="18">
                <h4
                        style="color: #FFFFFF; font-size: 18px; font-family: PingFangSC-Medium; margin-top: 9px;"
                >
                    个人中心
                </h4>
            </a-col>
            <a-col :span="3"></a-col>
        </a-row>
    </div>
    <!-- header结束 -->
<!--个人信息-->
        <div style="width: 100%;padding-top: 50px">
            <a-avatar :size="160" icon="user" />
        </div>

<!--    个人列表-->
    <div style="width: 100%">
        <a-list
                itemLayout="horizontal"
                :dataSource="data"
        >
            <a-list-item slot="renderItem" slot-scope="item, index">
                <a-list-item-meta >
                    <a slot="title" @click="title()">{{item.title}}</a>
                </a-list-item-meta>
            </a-list-item>
        </a-list>
    </div>
    </div>
</template>

<script>
    const data = [
        {
            title: '我的资料',
        },
        {
            title: '我的下载',
        },
        {
            title: '我的钱包',
        },
        {
            title: '设置',
        },
    ]
    export default {
        name: "personal",
        data () {
            return {
                data,
            }
        },
        methods:{
            title(){
                this.$router.push("/download");
            },
            returnHome() {
                this.$router.push("/home");
            },
        }
    }
</script>

<style scoped>

</style>
