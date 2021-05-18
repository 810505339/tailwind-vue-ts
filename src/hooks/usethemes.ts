import {ref, watchEffect} from "vue";


export default function () {
    const toggleIconsValue = ref('wb_sunny')
    watchEffect(() => {
        const htmlClasses = document.querySelector('html')!.classList
        if (toggleIconsValue.value === 'wb_sunny') {
            htmlClasses.remove('dark')
        } else {
            htmlClasses.add('dark')
        }
    })

    return toggleIconsValue
}