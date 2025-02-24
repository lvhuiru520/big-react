import cjs from "@rollup/plugin-commonjs";
import { readFileSync } from "fs";
import path from "path";
import ts2 from "rollup-plugin-typescript2";
const pkgPath = path.resolve(__dirname, "../../packages");
const distPath = path.resolve(__dirname, "../../dist/node_modules");
export function resolvePkgPath(pkgName, isDist) {
  if (isDist) {
    return `${distPath}/${pkgName}`;
  }
  return `${pkgPath}/${pkgName}`;
}
export function getPackageJSON(pkgName) {
  const path = `${resolvePkgPath(pkgName)}/package.json`;
  const str = readFileSync(path, { encoding: "utf-8" });
  return JSON.parse(str);
}

export function getBaseRollupPlugins({ typescript = {} } = {}) {
  return [cjs(), ts2(typescript)];
}
