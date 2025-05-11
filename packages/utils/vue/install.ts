import type {SFCWithInstall} from "./typescript";
import type {App} from "vue";

export const withInstall = <T>(
    main: T,
) => {
    (main as SFCWithInstall<T>).install = (app: App) => {
        for (const c of [main]) {
            app.component((c as any).name, c as any);
        }
    }
    return main as SFCWithInstall<T>
}