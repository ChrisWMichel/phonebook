<template>
    <div class="modal" :class="showActive">
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
                <button class="button is-success" @click="updateContact">Edit Contact</button>
                <button class="button" @click="closeForm">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ShowRecord",
        props:['showActive', 'contact'],
        data(){
            return{

            }
        },
        methods:{
            closeForm(){
                this.$emit('close_form')
            },
            updateContact(){
                let record ={
                    name: this.contact.name,
                    email: this.contact.email,
                    phone: this.contact.phone
                };
                axios.put('api/phonebook/' + this.contact.id, record)
                    .then(resp => {
                        //console.log(resp);
                        this.closeForm();
                    })
            }
        }
    }
</script>

<style scoped>

</style>