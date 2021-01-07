import * as http from "cloud-http"
import { router } from "./router"

export async function handleRequest(request: http.Request): Promise<http.Response.Like> {
	const result = {
		body: `request method: ${request.method}`,
	}
	return result
}
router.add(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"], "test/", handleRequest)
