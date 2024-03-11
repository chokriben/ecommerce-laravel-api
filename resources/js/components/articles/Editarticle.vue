<template>
    <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h4 align="center">Edit Article</h4>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="reference">Référence</label>
                <input type="text" class="form-control" id="reference" v-model="article.reference">
            </div>
            <div class="form-group">
                <label for="designation">Désignation</label>
                <input type="text" class="form-control" id="designation" v-model="article.designation">
            </div>
            <div class="form-group">
                <label for="marque">Marque</label>
                <input type="text" class="form-control" id="marque" v-model="article.marque">
            </div>
            <div class="form-group">
                <label for="qtestock">Quantité en stock</label>
                <input type="number" class="form-control" id="qtestock" v-model="article.qtestock">
            </div>
            <div class="form-group">
                <label for="prix">Prix</label>
                <input type="number" class="form-control" id="prix" v-model="article.prix">
            </div>
            <br />
            <div class="form-group">
                <button type="submit" className="btn btn-outline-primary">
                    <i class="fa-solid fa-floppy-disk"></i>Enregister
                </button>
                <button type="button"class="btn btn-outline-danger mx-2"  @click="cancelEdit">   <i class="fa-solid fa-xmark"></i>Annuler</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute(); // Utilisez useRoute() pour accéder à l'objet de la route
const article = ref({});
const id = route.params.id; // Accédez aux paramètres de la route via route.params

onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:8000/api/articles/${id}`);
        article.value = response.data;
    } catch (error) {
        console.error(error);
    }
});

const submitForm = async () => {
    try {
        await axios.put(`http://localhost:8000/api/articles/${id}`, article.value);
        router.push({ name: 'Viewarticles' });
    } catch (error) {
        console.error(error);
    }
};
const cancelEdit = () => {
    router.push({ name: 'Viewarticles' });
};
</script>

<style scoped>
/* Vos styles CSS pour la page d'édition */
</style>
