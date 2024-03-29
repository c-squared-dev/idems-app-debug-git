import { generateDeploymentConfig } from "scripts";
import { logWarning } from "scripts/src/utils";
const config = generateDeploymentConfig("debug_git");

// set firebase config if decrypted values available
// try {
//   const firebaseConfig = require("./encrypted/firebaseConfig.json");
//   config.firebase = { ...firebaseConfig, enabled: true };
// } catch {
//   logWarning({
//     msg1: "Deployment config requires encrypted data",
//     msg2: "Decrypt config in order to access firebase functionality",
//   });
// }

config.google_drive = {
  sheets_folder_id: "1ja6lzbphZaxnVv5mpQ4YHnn2qmxMiEBW",
  assets_folder_id: "1bNvUKN47YZAbMnRA1ThzSLGxLTd0mfDb",
};

config.git = {
  content_repo: "https://github.com/c-squared-dev/idems-app-debug-git",
  content_tag_latest: "1.2.0",
};

config.app_data.output_path = "./app_data";

// Override any app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "debug_git";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "debug_git";

export default config;
