import "axios"

declare module "axios" {
    /*扩展ts*/
    interface AxiosRequestConfig {
        show?: boolean //是否全局弹窗
    }
}