import type {App, Plugin} from "vue";

export const makeInstaller = (components: Plugin[] = []) => {
    const install = (app: App) => {
        components.forEach((c) => app.use(c))
    }
    return {
        install,
    }
}