<template>
    <div id="container">
        <div v-for="(certificate, index) in certificates" class="project" :key="index">
            <a class="certificate" :href="certificate.link">
                <img :src="'/icons/' + certificate.company + '.svg'">
                <div class="info">
                    <h1 class="title">{{ certificate.name }}</h1>
                    
                    <div class="skills">
                        <span v-for="(skill, index) in certificate.skills" class="skill" :key="index">{{ skill }}</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { certificates } from '../certificates';

export default {
    data() {
        return {
            certificates
        }
    }
}
</script>

<style scoped>
    a {
        color: white;
        text-decoration: none;
    }

    #container {
        min-height: 100px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 1400px;
        margin: 120px auto;
        gap: 24px;
    }
    
    .certificate {
        width: min(80vw, 400px);
        flex-basis: 33%;
        display: flex;
        align-items: start;
        gap: 8px;
        overflow: hidden;
    }

    .title {
        margin: 0;
        font-size: 32px;
    }

    .skills {
        display: flex;
        flex-wrap: wrap;
    }
    .skill {
        background-color: #232323;
        padding: 4px;
        margin: 2px;
        border-radius: 12px;
    }

    @media screen and (max-width: 500px) {
        .title {
            font-size: 24px;
        }
    }
</style>