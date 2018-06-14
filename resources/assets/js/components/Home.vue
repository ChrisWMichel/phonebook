<template>
    <div>
        <nav class="panel column is-offset-2 is-8">
            <p class="panel-heading">
                Phone Book

                <!--<router-link tag="button" :to="{name:'add'}">Add New</router-link>-->
                <button class="button is-primary is-outlined" @click="openAdd">
                    Add New
                </button>
            </p>


            <div class="panel-block">
                <p class="control has-icons-left">
                    <input class="input is-small" type="text" placeholder="search"/>
                    <span class="icon is-small is-left">
                   <i class="fa fa-search" aria-hidden="true"></i>
               </span>
                </p>
            </div>

            <a class="panel-block is-active" v-for="(user) in users" :key="user.id">

            <span class="column is-9" >
                {{user.name}} &nbsp; {{user.email}} &nbsp; {{user.phone | phone_check}}

            </span>


                <span class="panel-icon column is-1">
                  <i class="has-text-danger fa fa-trash" aria-hidden="true"></i>
                </span>
                <span class="panel-icon column is-1">
                  <i class="has-text-info fa fa-edit" aria-hidden="true"></i>
                </span>
                <span class="panel-icon column is-1">
                  <i class="has-text-success fa fa-eye" aria-hidden="true" @click="openShow(user)"></i>
                </span>
            </a>
        </nav>
        <app-add :active="addActive" @close_form="closeForm"></app-add>

        <app-show :showActive="showActive" :contact="record" @close_form="closeForm"></app-show>
    </div>
</template>

<script>
    import AddContact from './AddContact'
    import ShowContact from './ShowRecord'
    export default {
        name: "Home",
        components:{
            appAdd: AddContact,
            appShow: ShowContact
        },
        data(){
            return{
                addActive:'',
                users: '',
                showActive:'',
                record: ''
            }
        },
        created(){
            this.contacts();
        },
        computed:{

        },
        methods:{
            openAdd(){
                this.addActive = 'is-active'
            },
            contacts(){
                axios.get('api/getRecords')
                    .then(resp => {
                        //console.log(resp.data);
                        this.users = resp.data;
                    })
            },
            closeForm(){
                this.addActive = '';
                this.showActive = '';
                this.contacts();
            },
            openShow(user){
                this.showActive = 'is-active';
                this.record = user;
                console.log(this.record);
            }
        }
    }
</script>

<style scoped>

</style>