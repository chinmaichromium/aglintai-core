"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function processDirectory(rootDirs, outputFiles) {
    var result = [];
    function walkDirectory(rootDir, dir, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.base, base = _c === void 0 ? '' : _c, _d = _b.appRouter, appRouter = _d === void 0 ? false : _d;
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        var entries = fs.readdirSync(dir, { withFileTypes: true });
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            var fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                walkDirectory(rootDir, fullPath, { base: base, appRouter: appRouter });
            }
            else if (entry.isFile()) {
                if (entry.name.startsWith('type')) {
                    continue;
                }
                else if (entry.name.startsWith('index') ||
                    entry.name.startsWith('route') ||
                    entry.name.startsWith('page')) {
                    result.push(dir.replace(rootDir, base));
                }
                else if (!appRouter) {
                    var filePath = fullPath
                        .replace(/\.ts$|\.js$|\.jsx$|\.tsx$/, '')
                        .replace(rootDir, base);
                    result.push(filePath);
                }
            }
        }
    }
    Object.keys(rootDirs).map(function (rootDir) {
        return walkDirectory(rootDir, rootDir, {
            base: rootDirs[String(rootDir)].basePath,
            appRouter: rootDirs[String(rootDir)].appRouter,
        });
    });
    // filter out wrong PATH SEPARATOR
    if (path.sep === path.win32.sep) {
        result = result.map(function (item) {
            // eslint-disable-next-line security/detect-non-literal-fs-filename
            return item.replace(new RegExp('\\' + path.win32.sep, 'g'), '/');
        });
    }
    // write to file
    outputFiles.forEach(function (item) {
        var _a;
        var tempResult = ((_a = item.filter) === null || _a === void 0 ? void 0 : _a.call(item, item.filter(result))) || result;
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        fs.writeFileSync(item.path, "export const ".concat(item.objectName, " = [\n").concat(tempResult.map(function (item) { return "'" + item + "'"; }).join(',\n'), "\n] as const"), 'utf-8');
    });
}
// const args = process.argv.slice(2);
// const rootDirectory = args[0].split(',') || ['.'];
// const outputFile = args[1] || 'script/paths.ts';
var rootDirectory = (_a = {},
    _a[path.join('src', 'pages')] = {
        basePath: '',
        appRouter: false,
    },
    _a[path.join('../aglint-mail/src/app', 'api')] = {
        basePath: path.join('/api', 'emails'),
        appRouter: true,
    },
    _a);
var allPathOutputFile = path.join('src/constant', 'allPaths.ts');
var apiPathOutputFile = path.join('src/constant', 'apiPaths.ts');
processDirectory(rootDirectory, [
    { path: allPathOutputFile, objectName: 'PATHS' },
    {
        path: apiPathOutputFile,
        objectName: 'API_PATHS',
        filter: function (x) { return x.filter(function (item) { return item.startsWith('/api'); }); },
    },
]);
