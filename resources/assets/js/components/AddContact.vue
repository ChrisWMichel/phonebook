<template>
    <div class="modal" :class="active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Add New Contact</p>
                <button class="delete"  @click="closeForm" aria-label="close"></button>
            </header>
            <section class="modal-card-body">

                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" v-model="contact.name">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" v-model="contact.email">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Phone</label>
                    <div class="control">
                        <input class="input" type="text" v-model="contact.phone">
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
                }

            }
        },
        methods:{
            closeForm(){
                this.$emit('close_form')
            },
            saveContact(){
                axios.post('api/phonebook', this.$data.contact)
                    .then(resp => {
                        console.log(resp);
                        this.closeForm();
                    })
            }
        }
    }
</script>

<style scoped>

</style>