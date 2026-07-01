import { afterEach } from "vitest";
import { mountedRuntimes } from "../runtime";

afterEach(() => {
	// Reset the mounted runtimes between every test so state doesn't leak
	mountedRuntimes.clear();
});
