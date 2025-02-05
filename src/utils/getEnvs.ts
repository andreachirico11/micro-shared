import { config } from 'dotenv';
import * as dotenvParseVariables from 'dotenv-parse-variables';
import { log_info } from './log';

export function getEnvs<EnvType>(envPrefix: string): EnvType {
  let { error, parsed: preParsingVars } = config({});
  if (error) {
    log_info(error, '.env file not found, using process envs');
    preParsingVars = process.env;
  }
  preParsingVars = Object.keys(preParsingVars)
    .filter((key) => key.startsWith(envPrefix))
    .reduce(
      (acc, key) => ({
        ...acc,
        [key.replace(envPrefix, '')]: preParsingVars[key],
      }),
      {}
    );
  return dotenvParseVariables(preParsingVars) as EnvType;
}
