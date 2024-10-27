<template>
    <v-col cols="12" md="10" class="mx-auto">
        <v-row>
            <v-col cols="12" lg="5" class="py-0">
                <div class="gen-info">
                    <div class="d-flex flex-column align-start ga-8">
                        <div class="text-h4 text-md-h2 font-weight-bold d-flex flex-column ga-3">
                            <v-divider length="40" thickness="5" class="border-opacity-100 mb-2"/>
                            <span>Hi, I'm Kin, a</span>
                            <span class="text-accent">Full Stack</span>
                            <span class="text-accent"> Web Developer</span>
                        </div>

                        <span class="text-body-1 font-weight-light introduction pe-lg-10">
                            With expertise in both front-end and back-end technologies, I enjoy transforming ideas into functional and visually appealing digital solutions. I thrive on tackling challenges and continuously learning new skills to stay ahead in the ever-evolving tech landscape.
                        </span>

                        <v-sheet color="transparent" class="text-grey-lighten-1">
                            <div class="d-flex align-center ga-4 mb-6">
                                <v-img src="@/assets/avatar.png" width="80"/>

                                <v-divider vertical class="border-opacity-75"/>

                                <div class="d-flex flex-column align-start">
                                    <span class="text-subtitle-1">Jestoni Kin A. Tubiano</span>
                                    <span class="text-body-2 mb-2">Philippines</span>
                                    <v-chip density="comfortable" class="rounded-lg font-weight-medium px-2">
                                        2+ Years of Experience
                                    </v-chip>
                                </div>
                            </div>

                            <div class="d-flex flex-column ga-3">
                                <div v-for="(contact, icontact) in contacts" :key="icontact" class="d-flex align-center ga-3">
                                    <v-icon :icon="contact.icon" size="small"/>
                                    <span>{{ contact.text }}</span>
                                </div>
                            </div>
                        </v-sheet>
                    </div>
                </div>
            </v-col>

            <v-col cols="12" lg="7">
                <section>
                    <p class="text-h6 mb-5">Tech Stack</p>

                    <v-row>
                        <v-col v-for="tech in techStack" :key="tech.text" cols="6" sm="3">
                            <v-card height="150" variant="tonal" color="grey-darken-1" class="d-flex align-center justify-center">
                                <div class="d-flex flex-column align-center ga-3"> 
                                    <v-img :src="require(`@/assets/${tech.icon}`)" height="70" width="70"/>
                                    <span class="text-white text-grey-lighten-1">{{ tech.text }}</span>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </section>

                <section>
                    <p class="text-h6 mb-5">Projects</p>

                    <v-row>
                        <v-col v-for="(project, iproject) in projects" :key="iproject" cols="12">
                            <v-card variant="tonal" color="grey-darken-1" class="pa-5">
                                <div class="d-flex align-start ga-10">
                                    <div class="text-grey-lighten-5 d-flex flex-column ga-8">
                                        <div>
                                            <p class="text-h6">{{ project.title }}</p>
                                            <span>{{ project.subtitle }}</span>
                                            
                                            <v-divider class="border-opacity-25 my-3"></v-divider>

                                            <span class="font-weight-light">
                                                {{ project.content }}
                                            </span>
                                        </div>

                                        <div>
                                            <p class="text-body-2 mb-2">Built with</p>

                                            <div class="d-flex flex-wrap ga-3">
                                                <v-chip v-for="tech in project.builtWith" :key="tech" color="amber-lighten-1">
                                                    {{ tech }}
                                                </v-chip>
                                            </div>
                                        </div>
                                    </div>

                                    <v-img :src="require(`@/assets/${project.thumbnail}`)" width="180" class="d-none d-md-block"></v-img>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </section>

                <section>
                    <p class="text-h6 mb-5">Experiences</p>

                    <v-row>
                        <v-col v-for="(v, k) in experiences" :key="k" cols="12">
                            <v-card variant="tonal" color="grey-darken-1">
                                <div class="text-grey-lighten-5 pa-5">
                                    <div class="mb-5">
                                        <p class="text-subtitle-1 text-sm-h6 font-weight-medium mb-2">{{ v.company }}</p>
                                        <span class="text-body-1 font-weight-light">{{ v.position }}</span>
                                    </div>
                                    
                                    <p class="text-subtitle-1 text-sm-h6 font-weight-bold">
                                        {{ v.period }}
                                    </p>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </section>
            </v-col>
        </v-row>
    </v-col>

        
    <!-- <v-btn variant="outlined" color="accent" height="45">
        Download CV
    </v-btn> -->
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
name: 'Portfolio',

setup () {
    const contacts = ref<any[]>(
        [
            { icon: 'mdi-email-outline', text: 'j.kintubiano@gmail.com' },
            { icon: 'mdi-phone-outline', text: '+63 970 897 7555' }
        ]
    )

    const techStack = ref<any[]>(
        [
            { text: 'Angular', icon: 'angular.svg' },
            { text: 'Vue.js', icon: 'vue.svg' },
            { text: 'Golang', icon: 'go.svg' },
            { text: '.NET Core', icon: 'dotnet.svg' },
            { text: 'Angular Material', icon: 'material.svg' },
            { text: 'Vuetify', icon: 'vuetify.svg' },
            { text: 'Bootstrap', icon: 'bootstrap.svg' },
            { text: 'MySQL', icon: 'mysql.svg' },
            { text: 'PostgreSQL', icon: 'postgre.svg' },
        ]
    );

    const projects = ref<any[]>(
        [
            {
                title: 'IPMMS',
                subtitle: 'Integrated Planning Management and Monitoring System',
                content: 'A software solution that assists in planning, monitoring, and managing operations, including strategic planning, budgeting, project management, performance monitoring, and reporting',
                builtWith: ['Vue.js', 'Pinia', 'Vuetify', 'Golang', 'Fiber', 'MySQL'],
                thumbnail: 'ipmms.png'
            },
            {
                title: 'DTCMS',
                subtitle: 'Digital Transformation Center Monitoring System',
                content: 'a software solution designed to manage requests, tracks multimedia equipment, and monitors software development progress.',
                builtWith: ['Angular', 'Angular Material', 'Bootstrap', '.NET Core', 'MySQL'],
                thumbnail: 'dtcms.png'
            },  
        ]
    );

    const experiences = ref<any[]>(
        [
            {
                company: 'Agusan del Sur State College of Agriculture and Technology | SUC',
                position: 'Full Stack Web Developer',
                period: '2022 - Present',
            },
        ]
    )

    return {
       contacts, techStack, projects, experiences
    }
}})
</script>

<style scoped>
    .gen-info {
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        padding: 40px 0px;
    }
    
    .introduction {
        line-height: 30px;
    }

    section {
        padding: 30px 0px 20px;
    }

    @media (min-width: 1279px) {
        .gen-info {
            min-height: 100vh;
        }
    }

    @media (max-width: 1279px) {   
        .gen-info {
            padding: 40px 0px 3px;
        }    

        section {
            padding: 20px 0px;
        }
    }
</style>
