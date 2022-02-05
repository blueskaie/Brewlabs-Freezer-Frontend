import { createApp } from 'vue'
// UI COMPONENTS
import ExpansionPanel from "@/components/ui/expansion-panel";
import CInput from "@/components/ui/input";
import CTextArea from "@/components/ui/textarea";
import CoinIcon from "@/components/ui/coin-icon";
import CPagination from "@/components/ui/pagination/pagination";
import CopyAddress from "@/components/ui/copy-address";
import ENMT from "@/components/ui/enmt";

const global_component = createApp({})

// UI COMPONENTS
global_component.component('expansion-panel', ExpansionPanel)
global_component.component('c-input', CInput)
global_component.component('c-textarea', CTextArea)
global_component.component('coin-icon', CoinIcon)
global_component.component('c-pagination', CPagination)
global_component.component('copy-address', CopyAddress)
global_component.component('enmt-badge', ENMT)

global_component.mount("#app")