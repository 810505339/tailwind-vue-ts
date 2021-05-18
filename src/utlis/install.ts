import {App} from "vue";
import Equal from 'equal-vue'

const install = (app: App) => {
    app.use(Equal)
}

export default install