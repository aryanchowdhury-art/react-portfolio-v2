import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-portfolio-v2/", // Fix this line to match your repo name (without the extra '-')
});
