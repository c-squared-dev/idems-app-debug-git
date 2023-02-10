import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("c2dev_demo");

// Override any app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "c2dev";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "c2dev";

config.git = {
  content_repo: "https://github.com/c-squared-dev/idems-app-c2dev-demo",
  content_tag_latest: "1.0.11",
};
config.google_drive = {
  sheets_folder_id: "1ja6lzbphZaxnVv5mpQ4YHnn2qmxMiEBW",
  assets_folder_id: "1bNvUKN47YZAbMnRA1ThzSLGxLTd0mfDb",
};

export default config;
