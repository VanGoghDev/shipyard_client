/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBars, faUser, faCogs } from '@fortawesome/free-solid-svg-icons'


let icons = [faUserSecret, faBars, faUser, faCogs];
/* add icons to the library */
library.add(icons)

export default FontAwesomeIcon