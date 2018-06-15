<template>
    <div class="modal" :class="active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Add New Contact</p>
                <button class="delete"  @click="closeForm" aria-label="close"></button>
            </header>
            <section class="modal-card-body">

                <div class="field" :class="{'has-error': errors.name}">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" v-model="contact.name">
                        <span class="help-block" v-for="error in errors.name" v-text="error"></span>
                    </div>
                </div>

                <div class="field" :class="{'has-error': errors.email}">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" v-model="contact.email">
                        <span class="help-block" v-for="error in errors.email" v-text="error"></span>
                    </div>
                </div>

                <div class="field" :class="{'has-error': errors.phone}">
                    <label class="label">Phone</label>
                    <div class="control">
                        <input class="input" type="text" v-model="contact.phone">
                        <span class="help-block" v-for="error in errors.phone" v-text="error"></span>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="saveContact">Add Contact</button>
                <button class="button" @click="closeForm">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "AddContact",
        props:['active'],
        data(){
            return{
                contact:{
                    name: '',
                    email: '',
                    phone: ''
                },
                errors:[]
            }
        },
        methods:{
            closeForm(){
                this.$emit('close_form')
            },
            saveContact(){
                axios.post('api/phonebook', this.$data.contact)
                    .then(resp => {
                        this.$parent.users.push(resp.data);
                        this.$parent.users.sort((a, b) => {
                            if(a.name > b.name){
                                return 1;
                            }else{
                                return -1;
                            }
                        });
                        this.contact = '';
                        this.closeForm();
                    })
                    .catch(error => {
                        console.log(error.response.data.errors);
                        this.errors = error.response.data.errors;
                    })
            }
        }
    }
</script>

<style scoped>
    .has-error input{
        border: .5px solid red;
    }
    .help-block{
        color: red;
    }
</style>