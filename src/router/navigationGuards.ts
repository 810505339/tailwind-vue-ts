import router from './index'
import {Loadingbar} from 'equal-vue'

router.beforeEach(() => {
    Loadingbar.start()
})

router.afterEach(() => {
    Loadingbar.finish()
})

export default router