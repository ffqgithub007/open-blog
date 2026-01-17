// pnpmfile.cjs
module.exports = {
  hooks: {
    readPackage(pkg) {
      // 强制所有依赖使用 entities@3.0.1（兼容 CJS）
      if (pkg.dependencies && pkg.dependencies.entities) {
        pkg.dependencies.entities = '^3.0.1'
      }
      if (pkg.devDependencies && pkg.devDependencies.entities) {
        pkg.devDependencies.entities = '^3.0.1'
      }
      return pkg
    }
  }
}