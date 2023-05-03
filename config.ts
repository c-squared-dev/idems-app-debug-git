import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("debug_git")

config.google_drive = {
  // This is the quality assurance sheets used in plh
  sheets_folder_id: "1YcG0GDJME1Ds1UzwXcEmo97Ckb5tnUWc",
  // global quality assurance folder only
  assets_folder_id: "1bnGPB70wPp9hzVOpT4LkPX9h3FwIrqfs",
}

config.git = {
  content_repo:'https://github.com/c-squared-dev/idems-app-debug-git',
  content_tag_latest:'1.0.0'
}

// Override any app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "debug_git"
config.app_config.APP_SIDEMENU_DEFAULTS.title = "debug_git"
  
export default config;
