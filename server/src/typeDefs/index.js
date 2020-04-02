import { gql } from "apollo-server-express";

import root from "./root";
import activeJob from "./activeJob";
import teamLeaders from "./teamLeaders";

export default [root, activeJob, teamLeaders];
