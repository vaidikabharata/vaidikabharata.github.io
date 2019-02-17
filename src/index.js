var app = new Vue({
    el: '#app',
    components: {
        'home': httpVueLoader('src/components/home.vue'),
        'donate-to-us': httpVueLoader('src/components/donate-to-us.vue'),
        'contact-us': httpVueLoader('src/components/contact-us.vue'),
        'aims-and-objectives': httpVueLoader('src/components/aims-and-objectives.vue'),
        'veda-paathashaalaa': httpVueLoader('src/components/veda-paathashaalaa.vue'),
        'our-projects': httpVueLoader('src/components/our-projects.vue'),
        'upcoming-events': httpVueLoader('src/components/upcoming-events.vue'),
        'events-held': httpVueLoader('src/components/events-held.vue'),
        'in-news': httpVueLoader('src/components/in-news.vue')
    },
    data: {
        website: 'VaidikaBharata.org',
        currentTab: '',
        route: window.location.href,
    },
    mounted() {
        this.currentTab = window.location.href.split("#")[1]||'home';
        $('#vb-carousel').carousel({
            interval: 2000
        });
    },
    methods: {
        setCurrentTab(tabName) {
            this.currentTab = tabName;
        }
    }
});