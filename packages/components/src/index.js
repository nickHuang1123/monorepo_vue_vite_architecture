import { withInstall } from "./utils/withInstall";

import header from "./layouts/header.vue";
import footer from "./layouts/footer.vue";
import unKnown from "./components/UnKnown.vue";

const PHeader = withInstall(header);
const PFooter = withInstall(footer);
const UnKnown = withInstall(unKnown);

export { PHeader, PFooter, UnKnown };

export default [ PHeader, PFooter, UnKnown ];
