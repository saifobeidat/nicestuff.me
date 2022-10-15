export default function ({ route, redirect, app }) {
  if (route.path !== "/" && route.path.endsWith("/")) {
    const { path, query, hash } = route;
    const nextPath = path.replace(/\/+$/, "") || "/";
    const nextRoute = { path: nextPath, query, hash };
    console.log(nextRoute);
    app.router.push(nextRoute);
  }
}
