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
                    <a slot="title" @click="title(index)" >{{item.title}}</a>
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
            index:0,
        },
        {
            title: '我的下载',
            index:1,
        },
        {
            title: '我的钱包',
            index:2,
        },
        {
            title: '设置',
            index:3,
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
            title(index){
                switch (index) {
                    case 0:
                        this.openNotification();
                        break;
                    case 1:
                        this.$router.push("/download");
                        break;
                    case 2:
                        this.openNotification();
                        break;
                    case 3:
                        this.openNotification();
                        break;
                    default:
                        this.openNotification();
                }
            },
            returnHome() {
                this.$router.push("/home");
            },
            openNotification() {
                this.$notification.open({
                    message: '警告',
                    description:
                        '该功能暂未开放',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            },
        }
    }
</script>

<style scoped>

</style>
