<template>
    <div id="container">
        <div v-for="(certificate, index) in certificates" class="project" :key="index">
            <a class="certificate" :href="certificate.link">
                <img :src="'/icons/companies/' + certificate.company.toLowerCase() + '.svg'">
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
        text-decoration: none;
    }

    #container {
        max-width: 1200px;
        min-height: 100px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 120px auto;
        gap: 40px;
    }
    
    .certificate {
        width: min(80vw, 500px);
        flex: 0 0 50%;
        display: inline-flex;
        align-items: start;
        gap: 8px;
        overflow: hidden;
    }

    .title {
        margin: 0;
        font-size: 32px;
        margin-bottom: 24px;
        font-weight: 250;
    }

    .skills {
        display: flex;
        flex-wrap: wrap;
    }
    .skill {
        background-color: #232323;
        padding: 6px 10px;
        margin: 2px;
        border-radius: 18px;
        color: white;
        box-shadow: inset 0 0 4px #040404;
    }

    @media screen and (max-width: 500px) {
        .title {
            font-size: 24px;
        }
    }
</style>