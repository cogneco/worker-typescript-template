import * as http from "cloud-http"
import { handleRequest } from "./handler"

import "isomorphic-fetch"

describe("handler returns response with request method", () => {
	const methods = ["GET", "HEAD", "POST", "PUT", "DELETE", "CONNECT", "OPTIONS", "TRACE", "PATCH"]
	methods.forEach(method => {
		it(method, async () => {
			const result = await handleRequest(http.Request.from(new Request("http://example.com/", { method })))
			const text = await result.body
			expect(text).toMatch(method)
		})
	})
})
