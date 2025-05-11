import Button from './src/button.vue'
import type {SFCWithInstall} from "@ane-ui/utils"
import {withInstall} from "@ane-ui/utils";

export const AneButton: SFCWithInstall<typeof Button> = withInstall(Button);

export default AneButton


