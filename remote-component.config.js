/**
 * Dependencies for Remote Components
 */
import * as react from "react";
import * as muiMaterial from "@mui/material";

export const resolve = {
        react: react,
        "@mui/material": require("@mui/material"),
        "@emotion/react": require("@emotion/react"),
        "@emotion/styled": require("@emotion/styled"),
        "@hye-ararat/states/instanceStore": require("./states/instance/")
};
