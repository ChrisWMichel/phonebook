<template>
    <div>
        <nav class="panel column is-offset-2 is-8">
            <p class="panel-heading">
                Phone Book

                <!--<router-link tag="button" :to="{name:'add'}">Add New</router-link>-->
                <button class="button is-primary is-outlined" @click="openAdd">
                    Add New
                </button>

                <span class="is-pulled-right" v-if="loading">
                    <i class="fa fa-refresh fa-spin fa-2x fa-fw"></i>
                </span>

            </p>


            <div class="panel-block">
                <p class="control has-icons-left">
                    <input class="input is-small" type="text" v-model="searchQuery" placeholder="search"/>
                    <span class="icon is-small is-left">
                   <i class="fa fa-search" aria-hidden="true"></i>
               </span>
                </p>
            </div>

            <a class="panel-block is-active" v-for="(user, index) in temp" :key="user.id">

            <span class="column is-9" >
                {{user.name}} &nbsp; {{user.email}} &nbsp; {{user.phone | phone_check}}

            </span>


                <span class="panel-icon column is-1">
                  <i class="has-text-danger fa fa-trash" aria-hidden="true" @click="deleteContact(user.id, index)"></i>
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
                record: '',
                loading: false,
                searchQuery: '',
                temp: ''
            }
        },
        created(){
            this.loading = true;
            this.contacts();
        },
        watch:{
            searchQuery(){
                if(this.searchQuery.length > 0){
                    this.temp = this.users.filter(elem => {
                        //return elem.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) >- 1
                        //return elem.name.match(this.searchQuery); // search for name within an object
                        //search for all attributes in an object
                        return Object.keys(elem).some(key => {
                            let string = String(elem[key]);
                             return string.match(this.searchQuery);
                        })
                    });
                }else{
                    this.temp = this.users;
                }
            }
        },
        methods:{
            openAdd(){
                this.addActive = 'is-active'
            },
            contacts(){

                axios.get('api/getRecords')
                    .then(resp => {
                        //console.log(resp.data);
                        this.users = this.temp = resp.data;
                        this.loading = false;
                    })
            },
            closeForm(){
                this.addActive = '';
                this.showActive = '';
                //this.contacts();
            },
            openShow(user){
                this.showActive = 'is-active';
                this.record = user;
            },
            deleteContact(id, index){

                if(confirm("Are you sure?")){
                    this.loading = !this.loading;
                    axios.delete('api/phonebook/' + id)
                        .then(resp => {
                            this.users.splice(index, 1);
                            this.loading = !this.loading;
                        })
                }

            }
        }
    }
</script>

<style scoped>

</style>