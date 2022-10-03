
const app = Vue.createApp({
    data() {
        return {
            string: "",
            multiplierN: 0,
            multiString: ""



            
        }
    },
    methods: {
        multiplyString(){        
            this.multiString = this.string.repeat(this.multiplierN)
        }

    }
    
}).mount('#app')