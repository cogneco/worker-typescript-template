import * as http from "cloud-http"
import { router } from "./router"

import "./handler"

addEventListener("fetch", event => {
	event.respondWith(router.handle(http.Request.from(event.request)).then(http.Response.to))
})
