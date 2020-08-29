
const gulp = require("gulp");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const tsconfig = require("./tsconfig.json");
const del = require("del");
const exec = require("child_process").exec;

gulp.task("build", () => {
    const DIST = webpackConfig.output.path;
    const TYPES_DIST = tsconfig.compilerOptions.declarationDir;

    del([`${DIST}/**`, `${TYPES_DIST}/**`], { force: true });
    return new Promise(resolve => webpack(webpackConfig).run(resolve))
        .then(() => exec("npx tsc --emitDeclarationOnly"));
});
