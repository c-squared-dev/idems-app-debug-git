import { IDeploymentConfig, getDefaultAppConstants } from "data-models";

const app_constants = getDefaultAppConstants();

// Override any app constants here
app_constants.APP_HEADER_DEFAULTS.title = "c2dev";
app_constants.APP_SIDEMENU_DEFAULTS.title = "c2dev";

const config: IDeploymentConfig = {
  name: "c2dev_demo",
  git: {
    content_repo: "https://github.com/c-squared-dev/idems-app-data-demo",
    content_tag_latest: "1.0.9",
  },
  google_drive: {
    sheets_folder_id: "1ja6lzbphZaxnVv5mpQ4YHnn2qmxMiEBW",
    assets_folder_id: "1bNvUKN47YZAbMnRA1ThzSLGxLTd0mfDb",
  },
  app_constants,
};
export default config;
