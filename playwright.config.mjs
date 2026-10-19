import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  workers: 1,
  use: { channel: "chrome", baseURL: "http://127.0.0.1:4323" },
  webServer: {
    command: "npm run build && npm run preview -- --host 127.0.0.1 --port 4323",
    url: "http://127.0.0.1:4323",
    env: { PUBLIC_GA_MEASUREMENT_ID: "G-WN68N9308Y" },
    reuseExistingServer: false,
  },
});
